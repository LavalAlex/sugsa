import styles from "./Roles.module.css";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import optionSelect from "../../Utils/select";

function Roles({ roles, mode, handleSelect, editRoles, allRoles }) {
  const dispatch = useDispatch();
  //   const allRoles = useSelector((state) => state.users.users.roles);
    console.log(allRoles);
  
  const [optionsRoles, setOptionsRoles] = useState([]);
  useEffect(() => {
    if (allRoles) {
      setOptionsRoles(
        optionSelect(allRoles)
      );
    } else {
      setOptionsRoles([]);
    }
  }, []);

  return (

        <Select
          onChange={(e) => handleSelect(e)}
          options={optionsRoles}
          placeholder="Roles"
        />
  );
}

export default Roles;
