import style from "./CardTask.module.css";
import { Trash } from "phosphor-react";

interface CardTaskProps {
  checked: boolean;
  task: string;
  id: string;
  onDeleteTask: (id: string) => void;
  onFinishTask: (id: string) => void;
}
export function CardTask({
  checked = false,
  task,
  id,
  onDeleteTask,
  onFinishTask,
}: CardTaskProps) {
  function deleteTask() {
    onDeleteTask(id);
  }

  function finishTask() {
    onFinishTask(id);
  }
  return (
    <div className={style.container} id={id}>
      <input
        type="checkbox"
        className={style.input}
        checked={checked}
        onChange={finishTask}
      />
      <p className={checked ? style.finishedTask : ""}>{task}</p>
      <button className={style.button} onClick={deleteTask}>
        <Trash size={20} />
      </button>
    </div>
  );
}
