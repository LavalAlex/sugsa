import React, { useState } from "react";
import { BiCommentDetail, BiDotsVerticalRounded } from "react-icons/bi";
import { BsFillPencilFill } from "react-icons/bs";
import { IoKey } from "react-icons/io5";
import NewPassword from "../NewPassword/NewPassword";

import styles from "./CardUser.module.css";

export default function CardUser({ name, email, rol, id }) {
  const [editMode, setEditMode] = useState(false);
  const [options, setOptions] = useState(false);
  const [newPass, setNewPass] = useState(false);

  const handleEditMode = (mode) => {
    setEditMode(mode);
    setNewPass(false)
  };
  const handleOptions = () => setOptions((old) => !old);

  const handleNewPass = (e)=>{
    e.preventDefault()
    setNewPass(true)
    setOptions(false)
  }
  const handleClose = ()=>{
    setNewPass(false)
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <button onClick={handleOptions} className={styles.optionsHandler}>
          <BiDotsVerticalRounded
            style={{
              color: "#1e1e1e",
              width: "2em",
              height: "2em",
            }}
          />
        </button>

        {editMode ? (
          <li>
            <button
              onClick={() => {
                handleEditMode(false);
              }}
            >
              cancel
            </button>
          </li>
        ) : (
          ""
        )}

        <div
          className={`${options ? styles.show : styles.hide} ${
            styles.optionsMenu
          }`}
        >
          <button onClick={handleNewPass}>
            <IoKey
              style={{
                color: "#1e1e1e",
                width: "2em",
                height: "2em",
              }}
            />
            forgot password?
          </button>
        </div>
      </div>

      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Rol: {rol}</div>
      {newPass?<NewPassword id={id} handleClose={handleClose}/>:""}
    </div>
  );
}
