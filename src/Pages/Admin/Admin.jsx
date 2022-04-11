import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import AdminLogin from "../../Components/Admin/AdminLogin";
import styles from './Admin.module.css'
export default function Admin() {
  const admin = useSelector((state) => state.admin);
  return admin.token ? (
    <Redirect to="/dashboard" />
  ) : (
    <div className={styles.container}>
      <AdminLogin />
    </div>
  );
}
