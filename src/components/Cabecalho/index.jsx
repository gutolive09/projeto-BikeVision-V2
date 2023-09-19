import Logo from "../../assets/LogoBikeVision.png"
import NavMenu from "../NavMenu"
import style from "./Cabecalho.module.css"

export default function Cabecalho() {
  return (
    <>
        <header className={style.header}>
            <div>
            <img src={Logo} alt="Logo da BikeVision" />
            </div>
            <div>
                <NavMenu/>
            </div>
        </header>
    </>
  )
}
