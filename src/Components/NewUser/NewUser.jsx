import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { allRoles, createUser } from "../../Redux/Actions/User";

import { validateNewUser } from "../../Utils/validate";
import { objNewUser } from "../../Utils/utils";
import optionSelect from "../../Utils/select";
import style from "./NewUser.module.css";
import { useNavigate } from "react-router-dom";

export default function NewUserCard() {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin);
  const [optionsRoles, setOptionsRoles] = useState([]);
  const roles = useSelector((state) => state.users.roles);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(allRoles(admin.token));
  }, []);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    moduls: "",
  });
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    rol: [],
    moduls: "",
  });

  useEffect(() => {
    if (roles) {
      setOptionsRoles(optionSelect(roles));
    } else {
      setOptionsRoles([]);
    }
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setData((old) => ({ ...old, [name]: value }));
    setErrors({
      name: "",
      email: "",
      password: "",
      moduls: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, password, rol, moduls, email } = validateNewUser(data);
    if (name || password || rol || moduls || email)
      setErrors((old) => ({
        ...old,
        name: name ? name : "",
        email: email ? email : "",
        password: password ? password : "",
        rol: rol ? rol : "",
        moduls: moduls ? moduls : "",
      }));
    else {
      let newUser = objNewUser(data);
      const error = await dispatch(createUser(newUser));
      if (error) return alert("Error, could not create user");
      else {
        alert("User create successfully");
        setData({
          name: "",
          email: "",
          password: "",
          moduls: "",
          rol: [],
        });
        navigate("/user");
      }
    }
  };

  const handleSelect = (e) => {
    setData((old) => ({ ...old, rol: e.map((option) => option.value) }));
    setErrors({
      name: "",
      email: "",
      password: "",
      moduls: "",
    });
  };

  return (
    <form className={style.container} onSubmit={(e) => handleSubmit(e)}>
      <div className={style.title}>
        <h1>New User</h1>
      </div>
      <label className={style.wrapper}>
        Name
        <div
          className={`${style.inputGroup} ${errors.name ? style.error : ""} `}
        >
          <input
            value={data.name}
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Name user..."
            autoComplete="off"
          />
        </div>
        {errors.name ? (
          <span className={style.errorSpan}>{errors.name}</span>
        ) : (
          ""
        )}
      </label>

      <label className={style.wrapper}>
        Email
        <div
          className={`${style.inputGroup} ${errors.email ? style.error : ""} `}
        >
          <input
            value={data.email}
            onChange={handleChange}
            name="email"
            type="text"
            placeholder="Email..."
            autoComplete="off"
          />
        </div>
        {errors.email ? (
          <span className={style.errorSpan}>{errors.email}</span>
        ) : (
          ""
        )}
      </label>

      <label className={style.wrapper}>
        Password
        <div
          className={`${style.inputGroup} ${
            errors.password ? style.error : ""
          } `}
        >
          <input
            value={data.password}
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password..."
            autoComplete="off"
          />
        </div>
        {errors.password ? (
          <span className={style.errorSpan}>{errors.password}</span>
        ) : (
          ""
        )}
      </label>

      <label className={style.wrapper}>
        Moduls
        <div
          className={`${style.inputGroup} ${errors.moduls ? style.error : ""} `}
        >
          <input
            value={data.moduls}
            onChange={handleChange}
            name="moduls"
            type="text"
            placeholder="Moduls..."
            autoComplete="off"
          />
        </div>
        {errors.moduls ? (
          <span className={style.errorSpan}>{errors.moduls}</span>
        ) : (
          ""
        )}
      </label>

      <label className={style.wrapper}>
        <Select
          onChange={(e) => handleSelect(e)}
          options={optionsRoles}
          placeholder="Roles"
          isMulti
        />
      </label>
      {errors.rol ? <span className={style.errorSpan}>{errors.rol}</span> : ""}
      <button className={style.submit} type="submit">
        Create
      </button>
    </form>
  );
}
