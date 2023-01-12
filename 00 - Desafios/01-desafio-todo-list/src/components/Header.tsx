import style from "./Header.module.css";
import imgLogo from "../assets/logo.svg";
export function Header() {
  return (
    <div className={style.headerContainer}>
      <img src={imgLogo} alt="Logo ToDo List" />
    </div>
  );
}
