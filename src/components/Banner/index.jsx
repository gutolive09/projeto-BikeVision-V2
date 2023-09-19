import BannerImg from "../../assets/Banner_img.jpg";
import style from "./Banner.module.css";

export default function Banner() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${BannerImg})` }}
        className={style.banner}
      >
        <div className={style.bannerShade}>
          <h1>Bem vindo ao futuro <br/> do seguro de bicicletas</h1>
        </div>
      </div>
    </>
  );
}
