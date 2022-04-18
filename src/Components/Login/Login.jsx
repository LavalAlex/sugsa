import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle, FaKey } from "react-icons/fa";
import { loginAdmin } from "../../Redux/Actions/Auth";
import style from "./Login.module.css";
import {
  validateInput,
  validateLogin,
  validateNewPassword,
} from "../../Utils/validate";

export default function AdminLogin() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [input, setInput] = useState({
    email: "lavalalexander@gmail.com",
    password: "123456",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = validateLogin(input);
    if (email || password) {
      setErrors((old) => ({
        ...old,
        email: email ? email : "",
        password: password ? password : "",
      }));
      email
        ? setInput({ email: "", password: "" })
        : setInput((old) => ({
            ...old,
            password: "",
          }));
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
          <div className={`${style.inputGroup} ${
              errors.email ? style.error : ""
            } `}>
            <FaUserCircle />
            <input
              type="text"
              value={input.email}
              name="email"
              onChange={(e) => handleChange(e)}
              placeholder="Enter username"
              autoComplete="off"
            />
          </div>
        </label>
        <div>
          {errors.email ? (
            <span className={style.errorSpan}>{errors.email}</span>
          ) : (
            ""
          )}
        </div>
        <label>
          Password
          <div
            className={`${style.inputGroup} ${
              errors.password ? style.error : ""
            } `}
          >
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
          {errors.password ? (
            <span className={style.errorSpan}>{errors.password}</span>
          ) : (
            ""
          )}
        </div>
        <div className={style.buttonContainer}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
