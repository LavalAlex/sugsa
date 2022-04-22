import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../../Components/Login/Login";

import styles from "./Login.module.css";

export default function Admin() {
  const admin = useSelector((state) => state.admin);
  const navitage = useNavigate();

  return admin.name ? (
    navitage("/dashboard")
  ) : (
    <div>
      <div className={styles.container}></div>
      <div className={styles.loginCard}>
        <Login />
      </div>
    </div>
  );
}
