import { useState, ChangeEvent } from "react";
import "./global.css";
import style from "./App.module.css";
import { Header } from "./components/Header";
import { InputNewTask } from "./components/InputNewTask";
import { ButtonCreateTask } from "./components/ButtonCreateTask";
import { TaskList } from "./components/TaskList";

interface Task {
  checked: boolean;
  task: string;
  id: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [tasksAmount, setTasksAmount] = useState(0);
  const [finishedTasksAmount, setFinishedTasksAmount] = useState(0);

  function handleAddNewTask() {
    const formattedNewTask = {
      checked: false,
      task: newTask,
      id: Math.floor(Math.random() * 999).toString(),
    };
    setTasks([...tasks, formattedNewTask]);

    const amountTasks = tasks;
    setTasksAmount(amountTasks.length + 1);
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleDeleteTask(id: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== id);
    setTasks(tasksWithoutDeletedOne);
  }

  function handleFinishTask(id: string) {
    const tasksWithFinishedOne = tasks.map((task) => {
      if (task.id == id) {
        task.checked = !task.checked;
      }
      return task;
    });
    setTasks(tasksWithFinishedOne);

    const amountFinishedTasks = tasksWithFinishedOne.filter(
      (task) => task.checked == true
    );
    setFinishedTasksAmount(amountFinishedTasks.length);
  }

  return (
    <div className={style.container}>
      <Header />
      <div className={style.content}>
        <div className={style.inputArea}>
          <InputNewTask value={newTask} onChange={handleNewTaskChange} />
          <ButtonCreateTask onClick={handleAddNewTask} />
        </div>
        <TaskList
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onFinishTask={handleFinishTask}
          tasksAmount={tasksAmount}
          finishedTasksAmount={finishedTasksAmount}
        />
      </div>
    </div>
  );
}

export default App;
