import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAdmin } from "../../Redux/Actions/Auth";
import Menu from "./Menu/Menu";
import styles from "./NavBar.module.css";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import logo from '../../Img/logo.jpeg'

export default function NavbarAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const session = useSelector((store) => store.admin);
  const [showMenu, setShowMenu] = useState(false);
  const search = useLocation().pathname === "/user";

  const logoutNav = () => {
    dispatch(logoutAdmin());
    navigate("/login");
  };

  return (
    <header className={`${styles.navbar}  `}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Link className={styles.brand} to="/">
            <span>SU-SA</span>
            <img src={logo} width="30px" alt="" />
          </Link>
          {search ? <SearchBar /> : ""}
        </div>

        <ul className={styles.menu}>
          <Menu home />
        </ul>

        <div className={styles.right}>
          {session ? (
            <div className={styles.profile__container}>
              <div
                className={
                  `${showMenu ? styles.show : styles.hide} ` +
                  styles.profile__menu
                }
              >
                <Menu column dashboard profile user />
              </div>
            </div>
          ) : (
            <NavLink
              className={styles.signup}
              // activeClassName={styles.active}
              to="/login"
            >
              Log In
            </NavLink>
          )}
          {session ? (
            <div className={styles.right}>
              <button
                className={`${styles.nav__link} ${styles.logout}`}
                onClick={() => logoutNav()}
              >
                <FiLogOut />
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
      <Outlet/>
    </header>
  );
}
