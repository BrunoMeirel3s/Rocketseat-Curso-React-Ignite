import style from "./TaskList.module.css";
import imgClipboard from "../assets/clipboard.svg";

import { CardTask } from "../components/CardTask";

interface Task {
  checked: boolean;
  task: string;
  id: string;
}

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
  onFinishTask: (id: string) => void;
  tasksAmount: number;
  finishedTasksAmount: number;
}

export function TaskList({
  tasks,
  onDeleteTask,
  onFinishTask,
  tasksAmount,
  finishedTasksAmount,
}: TaskListProps) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <div className={style.tarefasCriadas}>
          Tarefas criadas{" "}
          <span className={style.tarefasCriadasSpan}>{tasksAmount}</span>
        </div>
        <div className={style.tarefasConcluidas}>
          Concluídas{" "}
          <span className={style.tarefasConcluidasSpan}>
            {finishedTasksAmount} de {tasksAmount}
          </span>
        </div>
      </header>
      <div className={style.listaTarefas}>
        {tasks.length >= 1 ? (
          <div style={{ marginTop: "1rem" }}>
            {tasks.map((task) => {
              return (
                <CardTask
                  key={task.id}
                  id={task.id}
                  checked={task.checked}
                  task={task.task}
                  onDeleteTask={onDeleteTask}
                  onFinishTask={onFinishTask}
                />
              );
            })}
          </div>
        ) : (
          <>
            <div className={style.listaTarefasVazia}>
              <span>
                <img src={imgClipboard} alt="Lista de tarefas" />
              </span>
              <span className={style.listaTarefasVaziaTexto}>
                <span style={{ fontWeight: "bold" }}>
                  Você ainda não tem tarefas cadastradas
                </span>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
