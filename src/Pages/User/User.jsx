import React, { useState } from "react";
import { IoPersonAdd } from "react-icons/io5";
import NewUser from "../../Components/NewUser/NewUser";
import SelectBox from "../../Components/Users/SelectBox";
import style from "./user.module.css";

export default function User() {
  const [createUser, setCreateUser] = useState(false);

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
            <NewUser createUser={createUser}/>
          </div>
        ) : (
          ""
        )}
        <div className={style.newUserOpen}>
          <button
            className={style.createUser}
            onClick={() => setCreateUser(true)}
          >
          <IoPersonAdd/>
            Create User
          </button>
        </div>
      </div>

      <SelectBox />
      <div></div>
    </div>
  );
}
