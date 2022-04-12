import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import optionSelect from "../../Utils/select";
import style from "./NewUser.module.css";
import Select from "react-select";
import { validateNewUser } from "../../Utils/validate";
import { allRoles, createUser } from "../../Redux/Actions/User";
import { objNewUser } from "../../Utils/utils";

export default function NewUserCard() {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin);
  const [optionsRoles, setOptionsRoles] = useState([]);
  const roles = useSelector((state) => state.users.roles) ;

  useEffect(()=>{
    dispatch(allRoles(admin.token))
  },[])

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
    console.log(data.rol)
    const { name, password, rol, moduls } = validateNewUser(data);
    if (name || password || rol || moduls)
      setErrors((old) => ({
        ...old,
        name: name ? name : "",
        password: password ? password : "",
        rol: rol ? rol : "",
        moduls: moduls ? moduls : "",
      }));
    else {
      let newUser = objNewUser(data);
      const error = await dispatch(createUser(newUser));
      if (error) alert("Error, could not create user");
      else {
        alert("User create successfully");
        setData({
          name: "",
          email: "",
          password: "",
          moduls: "",
          rol: [],
        });
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
      <label className={style.wrapper}>
        Name
        <div className={style.inputGroup}>
          <input
            value={data.name}
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Name user..."
            autoComplete="off"
          />
        </div>
        {errors.name ? <span className={style.error}>{errors.name}</span> : ""}
      </label>

      <label className={style.wrapper}>
        Email
        <div className={style.inputGroup}>
          <input
            value={data.email}
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email..."
            autoComplete="off"
          />
        </div>
        {errors.email ? (
          <span className={style.error}>{errors.email}</span>
        ) : (
          ""
        )}
      </label>

      <label className={style.wrapper}>
        Password
        <div className={style.inputGroup}>
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
          <span className={style.error}>{errors.password}</span>
        ) : (
          ""
        )}
      </label>

      <label className={style.wrapper}>
        Moduls
        <div className={style.inputGroup}>
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
          <span className={style.error}>{errors.moduls}</span>
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
      {errors.rol ? <span className={style.error}>{errors.rol}</span> : ""}
      <button className={style.submit} type="submit">
        Create
      </button>
    </form>
  );
}
