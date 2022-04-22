import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";

import styles from "./Menu.module.css";

export default function Menu({ column, dashboard }) {
  const path = useLocation().pathname;

  return (
    <ul className={`${styles.menu} ${column ? styles.column : ""}`}>
      {!dashboard ? (
        <li>
          <NavLink
            title="Dashboard"
            className={`${styles.menu__link} ${
              path === "/dashboard" ? styles.active : ""
            }`}
            to="/dashboard"
          >
            <BiHomeAlt className={styles.icon} />
          </NavLink>
        </li>
      ) : (
        <></>
      )}
    </ul>
  );
}
