import React, { useState } from "react";
import style from "./NewPassword.module.css";
import { AiFillSave, AiOutlineCloseCircle } from "react-icons/ai";
import { IoSaveOutline, IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { newPassword } from "../../Redux/Actions/User";
import { validateNewPassword } from "../../Utils/validate";

export default function NewPassword({ id, handleClose }) {
  const dispatch = useDispatch();
  const [data, setData] = useState({ password: "" });
  const admin = useSelector((state) => state.admin);
  const [errors, setErrors] = useState("");

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
    <div>
      <label className={style.wrapper}>
        New Password:
        <div className={style.inputGroup}>
          <input
            value={data.password}
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="New Password..."
            autoComplete="off"
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
      <div className={style.containerBtn}>
        <button className={style.save} onClick={handleSave}>
          <IoSaveOutline
            style={{
              width: "1.1em",
              height: "1.1em",
            }}
          />
          Save
        </button>
        <button className={style.close} onClick={handleCancel}>
          <IoCloseCircleOutline
            style={{
              width: "1.5em",
              height: "1.5em",
            }}
          />
        </button>
      </div>
    </div>
  );
}
