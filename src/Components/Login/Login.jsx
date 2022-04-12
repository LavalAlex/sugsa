import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle, FaKey } from "react-icons/fa";
import { loginAdmin } from "../../Redux/Actions/Auth";
import style from "./Login.module.css";


export default function AdminLogin() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    "email": "jorgemg0908@gmail.com",
    "password": "111111"
  });

  var admin = useSelector((state) => state);

  // console.log(admin)
  const handleChange = (e) => {
    // setInput({
    //   ...input,
    //   [e.target.name]: e.target.value.replaceAll(/^\s+/g, ""),
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // const errors = validate(input);
    // if (Object.values(errors).filter((error) => error).length) {
    // console.log(input);
    // } else {
    dispatch(loginAdmin(input));
    // dispatch(allUsers());
    // }
  };
  
  return(
    <div className={style.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Login Admin</h1>
        <label>
          Email
          <div className={style.inputGroup}>
            <FaUserCircle />
            <input
              type="text"
              value={input.email}
              name="email"
              onChange={(e) => handleChange(e)}
              placeholder="Enter username"
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
        <div className={style.buttonContainer}>
          <button className={style.btn} type="submit">
            Login
          </button>
        </div>
      </form>
    </div>)
  
}
