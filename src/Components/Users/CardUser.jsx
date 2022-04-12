import React, { useState } from "react";
import { BiCommentDetail, BiDotsVerticalRounded } from "react-icons/bi";
import { BsFillPencilFill } from "react-icons/bs";
import { IoKey } from "react-icons/io5";

import styles from "./CardUser.module.css";

export default function CardUser({ name }) {
  const [editMode, setEditMode] = useState(false);
  const [options, setOptions] = useState(false);

  const handleEditMode = (mode) => {
    setEditMode(mode);
  };
  const handleOptions = () => setOptions((old) => !old);
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
          <button >
            <IoKey  style={{
              color: "#1e1e1e",
              width: "2em",
              height: "2em",
            }} />
            forgot password?
          </button>
        </div>
      </div>

      <div>Name: Admin</div>
      <div>Rol: {name}</div>
      <div>Email: test@gamil.com</div>
    </div>
  );
}
