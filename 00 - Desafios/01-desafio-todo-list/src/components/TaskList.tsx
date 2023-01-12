import style from "./TaskList.module.css";
import imgClipboard from "../assets/clipboard.svg";

import { CardTask } from "../components/CardTask";
export function TaskList() {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <div className={style.tarefasCriadas}>
          Tarefas criadas <span className={style.tarefasCriadasSpan}>0</span>
        </div>
        <div className={style.tarefasConcluidas}>
          Concluídas <span className={style.tarefasConcluidasSpan}>0</span>
        </div>
      </header>
      <div className={style.listaTarefas}>
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

        <CardTask />
        <CardTask />
      </div>
    </div>
  );
}
