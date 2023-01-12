import style from "./ButtonCreateTask.module.css";
import { PlusCircle } from "phosphor-react";
export function ButtonCreateTask() {
  return (
    <button className={style.button}>
      <span className={style.buttonText}>
        Criar
        <PlusCircle size={18} />
      </span>
    </button>
  );
}
