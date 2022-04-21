import React, { useState } from "react";
import Button from "./ButtonFloat";
import { FaUserCircle } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { AiOutlineFullscreenExit, AiOutlineMenu } from "react-icons/ai";
import { VscNewFile } from "react-icons/vsc";

import { WrapMenu } from "./ButtonUtils.elements.jsx";
import { useNavigate } from "react-router-dom";

export default function ButtonUtils() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  /* Comprobacion de rol usuario */

  // -------------------------------------------------------------------------------------------------
  // Solo para pruebas de imagen con usuario creado                                                   |
  const isSession = false || localStorage.getItem("token"); // true para dev y false para produccion  |
  // -------------------------------------------------------------------------------------------------

  function handleMenu() {
    return setIsOpen(!isOpen);
  }

  function navigateTo(path) {
    setIsOpen(false);
    navigate(path);
  }

  return (
    <>
      {isOpen && (
        <WrapMenu>
          {/* Iniciar sesion */}
          {!isSession && (
            <button onClick={() => navigateTo("/login")}>
              <FaUserCircle />
            </button>
          )}

          {/* Buscar un PDF */}
          <button onClick={() => navigateTo("/category")}>
            <BsSearch />
          </button>

          {/* Subir PDF */}
          {[localStorage.rol].find(
            (element) =>
              element.toLowerCase().includes("jefe") ||
              element.toLowerCase().includes("direccion") ||
              element.toLowerCase().includes("gerente")
          ) && (
            <button onClick={() => navigateTo("/upload")}>
              <VscNewFile />
            </button>
          )}

          {/* Cerrar Tab */}
          <button onClick={handleMenu}>
            <AiOutlineFullscreenExit />
          </button>
        </WrapMenu>
      )}

      {/* Abrir Tab */}
      {!isOpen && <Button Icono={AiOutlineMenu} onClick={handleMenu} />}
    </>
  );
}
