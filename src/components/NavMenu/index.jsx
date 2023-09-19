import { Link } from "react-router-dom";
import style from "./NavMenu.module.css"

export default function NavMenu() {
  return (
    <>
      <nav className={style.nav}>
        <ul>
          <li >
            <Link to={"/"}>
              <p className="item">
                Home
              </p>
            </Link>
          </li>

          <li>
            <Link to={"/vistoria"}>
              <p className="item">
                Vistoria
              </p>
            </Link>
          </li>

          <li>
            <Link to={"/sobre"}>
              <p className="item">
                Sobre nós
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
