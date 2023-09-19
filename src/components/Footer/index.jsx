import React from "react";
import NavMenu from "../NavMenu";
import style from "./Footer.module.css";
import Logo from "../../assets/LogoBikeVision.png";

export default function Footer() {
  return (
    <>
      <footer>
        <div className={style.container}>
          <NavMenu />

          <img src={Logo} alt="Logo da BikeVision" />
        </div>
        <small>Direitos reservados - BikeVision 2023</small>
      </footer>
    </>
  );
}
