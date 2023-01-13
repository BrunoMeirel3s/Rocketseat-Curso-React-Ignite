import React from "react";
import style from "./ButtonCreateTask.module.css";
import { PlusCircle } from "phosphor-react";

interface ButtonCreateTaskProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export function ButtonCreateTask({ onClick }: ButtonCreateTaskProps) {
  return (
    <button className={style.button} onClick={onClick}>
      <span className={style.buttonText}>
        Criar
        <PlusCircle size={18} />
      </span>
    </button>
  );
}
