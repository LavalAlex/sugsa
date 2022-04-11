import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUsers } from "../../Redux/Actions/User";
import { getLocal } from "../../Utils/storage";

export default function Dashboard() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state);
  useEffect(() => {
    dispatch(allUsers());
  }, []);
  const handleStorage = () => {
    console.log('Storage',getLocal("susa_admin"));
  };
//   console.log(users);
  return (
    <div>
      <div>Dashboard</div>
      <button onClick={handleStorage}>storage</button>
    </div>
  );
}
