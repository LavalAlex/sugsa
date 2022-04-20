import React, { useEffect, useState } from "react";
import { IoPersonAdd } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import NewPassword from "../../Components/NewPassword/NewPassword";
import NewUser from "../../Components/NewUser/NewUser";
import Tables from "../../Components/Table/Table";
// import Table from "../../Components/Table/table";
import SelectBox from "../../Components/Users/SelectBox";
import { allUsers } from "../../Redux/Actions/User";
import style from "./user.module.css";

export default function User() {
  const dispatch = useDispatch();
  const [createUser, setCreateUser] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const admin = useSelector((state) => state.admin);
  const users = useSelector((state) => state.users.users);
  const [userPass, setUserPass] = useState({ name: "", email: "", id: "" });

  useEffect(() => {
    dispatch(allUsers(admin.token));
  }, []);

  return (
    <div className={style.container}>
      <div className={style.containerNewUser}>
        {createUser ? (
          <div
            className={style.newUser}
            id="close"
            onClick={(e) =>
              e.target.id === "close" ? setCreateUser((old) => false) : ""
            }
          >
            <NewUser createUser={createUser} />
          </div>
        ) : (
          ""
        )}
        {newPassword ? (
          <div
            className={style.newUser}
            id="close"
            onClick={(e) =>
              e.target.id === "close" ? setNewPassword((old) => false) : ""
            }
          >
            <NewPassword
              handleClose={setNewPassword}
              email={userPass.email}
              name={userPass.name}
              id={userPass.id}
            />
          </div>
        ) : (
          ""
        )}
      </div>

      <div>
        <Tables
          user={users}
          createUser={setCreateUser}
          setPassowrd={setUserPass}
          newPassword={setNewPassword}
        />
      </div>
    </div>
  );
}
