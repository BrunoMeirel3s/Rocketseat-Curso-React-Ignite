import style from "./InputNewTask.module.css";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
export function InputNewTask({ value, onChange }: InputProps) {
  return (
    <input
      type="text"
      className={style.input}
      placeholder="Adicione uma nova tarefa"
      value={value}
      onChange={onChange}
    />
  );
}
