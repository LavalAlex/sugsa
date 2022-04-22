import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { searchUser } from "../../Redux/Actions/User";

import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [show, setShow] = useState(true);

  useEffect(() => dispatch(searchUser(input)), [input, dispatch]);

  const handleChange = ({ target: { value } }) => {
    setInput(value);
  };

  const handleList = (e) => {
    setShow(e);
  };

  return (
    <label className={style.inputData}>
      <BiSearch className={style.icon} /> 
      <input
        onBlur={() => handleList(true)}
        onFocus={() => handleList(false)}
        onChange={handleChange}
        placeholder="Search Users... "
        className={style.search}
      />
    </label>
  );
}
