import React from "react";
import Select from "react-select";
import { useState, useEffect } from "react";
import optionSelect from "../../Utils/select";

function Roles({ handleSelect, allRoles }) {
  const [optionsRoles, setOptionsRoles] = useState([]);

  useEffect(() => {
    if (allRoles) {
      setOptionsRoles(optionSelect(allRoles));
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
