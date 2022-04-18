import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../../Components/Login/Login";
import styles from './Login.module.css'
export default function Admin() {
  const admin = useSelector((state) => state.admin);
  const navitage = useNavigate()
  console.log(admin)
  return admin.name ? (
    navitage('/dashboard')
  ) : (
    <div className={styles.container}>
      <Login />
    </div>
  );
}
