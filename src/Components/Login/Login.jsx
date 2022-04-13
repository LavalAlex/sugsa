import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle, FaKey } from "react-icons/fa";
import { loginAdmin } from "../../Redux/Actions/Auth";
import style from "./Login.module.css";
import { validateNewPassword } from "../../Utils/validate";

export default function AdminLogin() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState("");
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors("")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateNewPassword(input);
    if (error.error) {
      setErrors(error);
      setInput({ password: "" });
    } else {
      dispatch(loginAdmin(input));
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Login Admin</h1>
        <label>
          Email
          <div className={style.inputGroup}>
            <FaUserCircle />
            <input
              type="email"
              value={input.email}
              name="email"
              onChange={(e) => handleChange(e)}
              placeholder="Enter username"
              autoComplete="off"
            />
          </div>
        </label>
        <label>
          Password
          <div className={style.inputGroup}>
            <FaKey />
            <input
              type="password"
              value={input.password}
              name="password"
              onChange={(e) => handleChange(e)}
              placeholder="Enter password"
  
            />
          </div>
        </label>
        <div>
          {errors.error ? (
            <span className={style.error}>{errors.error}</span>
          ) : (
            ""
          )}
        </div>
        <div className={style.buttonContainer}>
          <button type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
