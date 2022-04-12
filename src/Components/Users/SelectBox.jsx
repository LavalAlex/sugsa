import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUsers } from "../../Redux/Actions/User";
import CardUser from "./CardUser";


export default function SelectBox() {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin);
  const users = useSelector((state) => state.users.users);
  useEffect(() => {
    dispatch(allUsers(admin.token));
  }, []);
 
  return (
    <div>
      {users.roles
        ? users.roles.map((e, index) => {
            return <CardUser key={index} name={e.name} />;
          })
        : " LOADING..."}
    </div>
  );
}
