import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
} from "@material-ui/core";

import style from "./Table.module.css";
import { IoConstructOutline, IoKey, IoPersonAdd } from "react-icons/io5";
import { RiUserAddLine } from "react-icons/ri";
import NewPassword from "../NewPassword/NewPassword";
import SearchBar from "../SearchBar/SearchBar";
// import { createUser } from "../../Redux/Actions/User";

export default function Tables({ user, createUser, setPassowrd, newPassword }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // const [newPassword, setNewPassword] = useState(false);
  // const [userPass, setUserPass] = useState({ name: "", email: "", id: "" });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleCreateUser = () => {
    createUser(true);
  };

  const handleNewPassaword = ({ e, id, name, email }) => {
    e.preventDefault();
    setPassowrd((old) => ({
      ...old,
      id,
      name,
      email,
    }));
    newPassword(true);
  };
  // console.log(userPass);
  return (
    <TableContainer className={style.tableContainer}>
      <Table className={style.table}>
        <TableHead className={style.head}>
          <TableRow className={style.row}>
            <TableCell className={style.user}>
              <div className={style.TitleUser}>
                <span>User</span>
                <SearchBar />
              </div>
            </TableCell>
            <TableCell className={style.rol}>
              <div className={style.TitleRol}>
                <span>Rol</span>
              </div>
            </TableCell>
            <TableCell>
              <div className={style.btn}>
                <button title="New User" onClick={handleCreateUser}>
                  <IoPersonAdd
                    style={{
                      width: "2em",
                      height: "2em",
                    }}
                  />
                </button>
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user
            ? user
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, i) => (
                  <TableRow key={row.Nombre}>
                    <TableCell>
                      <Grid>
                        <div className={style.bodyUser}>
                          <div>
                            <Grid item lg={2}>
                              <Avatar alt={row.Nombre} src="." />
                            </Grid>
                          </div>
                          <div>
                            <Grid item lg={10}>
                              <Typography>{row.Nombre}</Typography>
                              <Typography color="textSecondary" variant="body2">
                                {row.Correo}
                              </Typography>
                            </Grid>
                          </div>
                        </div>
                      </Grid>
                    </TableCell>
                    <TableCell className={style.bodyRol}>
                      <Typography className={style.tableRol}>
                        {row.Rol}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <button
                        title="New Password"
                        className={style.btnKey}
                        onClick={(e) =>
                          handleNewPassaword({
                            e,
                            email: row.Correo,
                            name: row.Nombre,
                            id: row.id,
                          })
                        }
                      >
                        <IoKey className={style.IKey} />
                      </button>
                    </TableCell>
                  </TableRow>
                ))
            : ""}
        </TableBody>
        {user[0] ? (
          <TableFooter>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              count={user.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableFooter>
        ) : (
          ""
        )}
      </Table>
    </TableContainer>
  );
}
