import { FiSettings, FiUsers } from "react-icons/fi";
import { BiHomeAlt } from "react-icons/bi";
import { NavLink, useLocation} from "react-router-dom";
import styles from "./Menu.module.css";

export default function Menu({ column, dashboard, profile, user, logout }) {
  const path = useLocation().pathname;

  return (
    <ul className={`${styles.menu} ${column ? styles.column : ""}`}>
      {!dashboard ? (
        <li>
          <NavLink
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

      {!user ? (
        <li>
          <NavLink
            className={`${styles.menu__link} ${
              path === "/user" ? styles.active : ""
            }`}
            // activeClassName={styles.active}
            to="/user"
          >
            <FiUsers className={styles.icon} />
          </NavLink>
        </li>
      ) : (
        <></>
      )}

      {!profile ? (
        <li>
          <NavLink
            className={`${styles.menu__link}  ${
              path === "/setting" ? styles.active : ""
            }`}
            to={`/setting/`}
          >
            <FiSettings />
          </NavLink>
        </li>
      ) : (
        <></>
      )}
    </ul>
  );
}
