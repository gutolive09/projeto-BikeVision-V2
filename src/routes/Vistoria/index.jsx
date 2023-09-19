import React, { useState } from "react";
import QuestBike from "../../components/QuestBike";
import CadastroBike from "../../components/CadastroBike";
import CamVistoria from "../../components/CamVistoria";
import style from "./Vistoria.module.css";
import BannerSec from "../../assets/Banner_sec_img.jpg";

export default function Vistoria() {
  const [cadastro, setCadastro] = useState(null);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${BannerSec})` }}
        className={style.banner}
      >
        <div className={style.bannerShade}>
          {cadastro == null && <QuestBike setCadastro={setCadastro} />}
          {cadastro == false && <CadastroBike setCadastro={setCadastro} />}
          {cadastro == true && <CamVistoria />}
        </div>
      </div>
    </>
  );
}
