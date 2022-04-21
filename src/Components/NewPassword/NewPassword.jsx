import React, { useState } from "react";
import style from "./NewPassword.module.css";
import { AiFillSave, AiOutlineCloseCircle } from "react-icons/ai";
import { IoSaveOutline, IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { newPassword } from "../../Redux/Actions/User";
import { validateNewPassword } from "../../Utils/validate";
import { FaEye } from "react-icons/fa";

export default function NewPassword({ name, email, id, handleClose }) {
  const dispatch = useDispatch();
  const [data, setData] = useState({ password: "" });
  const admin = useSelector((state) => state.admin);
  const [errors, setErrors] = useState("");
  const [keyOn, setKeyOn] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setData((old) => ({ ...old, [name]: value }));
    setErrors("");
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const error = validateNewPassword(data);
    if (error.error) {
      setErrors(error);
      setData({ password: "" });
    } else {
      const error = await dispatch(
        newPassword({ token: admin.token, id: id, password: data.password })
      );
      if (error) alert("Error, could not create user");
      else {
        alert("The New Password create successfully");
        setData({ password: "" });
        handleClose();
      }
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <div className={style.container}>
      {/* <button > */}
      <div className={style.containerCancel}>
        <IoCloseCircleOutline className={style.close} onClick={handleCancel} />
      </div>
      {/* </button> */}
      <div className={style.title}>
        <h1>New Password</h1>
      </div>
      <div className={style.data}>
        <h5>Name:</h5>
        <div>{name}</div>
        <h5>Email:</h5>
        <div>{email}</div>
      </div>
      <label>
        <h5>New Password:</h5>
        <div
          className={`${style.inputGroup} ${errors.error ? style.error : ""} `}
        >
          <input
            value={data.password}
            onChange={handleChange}
            name="password"
            type={keyOn? "text": "password"}
            placeholder="New Password..."
            autoComplete="off"
          />
        <FaEye className={style.keyEye} onClick={(e)=>{setKeyOn((old) => !old)}}/>
        </div>
      </label>
      <div className={style.wrapper}>
        {errors.error ? (
          <span className={style.errorSpan}>{errors.error}</span>
        ) : (
          ""
        )}
      </div>
      <div className={style.containerBtn}>
        <button className={style.save} onClick={handleSave}>
     
          <IoSaveOutline
            style={{
              width: "1.1em",
              height: "1.1em",
              color:"#1e1e1e"
            }}
          />
          <span>

          Save
          </span>

        </button>
      </div>
    </div>
  );
}
