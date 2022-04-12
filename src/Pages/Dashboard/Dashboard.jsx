import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUsers } from "../../Redux/Actions/User";
import { getLocal } from "../../Utils/storage";

export default function Dashboard() {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(allUsers(admin.token));
  }, []);


  return (
    <div>
      <div>Dashboard</div>

    </div>
  );
}
