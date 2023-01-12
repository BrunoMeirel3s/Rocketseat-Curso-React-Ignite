import { useState } from "react";
import "./global.css";
import style from "./App.module.css";
import { Header } from "./components/Header";
import { InputNewTask } from "./components/InputNewTask";
import { ButtonCreateTask } from "./components/ButtonCreateTask";
import { TaskList } from "./components/TaskList";
function App() {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.content}>
        <div className={style.inputArea}>
          <InputNewTask />
          <ButtonCreateTask />
        </div>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
