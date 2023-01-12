import style from "./InputNewTask.module.css";
interface InputProps {}
export function InputNewTask() {
  return (
    <input
      type="text"
      className={style.input}
      placeholder="Adicione uma nova tarefa"
    />
  );
}
