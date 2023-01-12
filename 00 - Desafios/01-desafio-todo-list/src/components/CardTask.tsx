import style from "./CardTask.module.css";
import { Trash } from "phosphor-react";
export function CardTask() {
  return (
    <div className={style.container}>
      <input type="checkbox" className={style.input} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
        nisi cupiditate laboriosam rerum nulla dignissimos, fugit harum
        suscipit, culpa doloremque, voluptate libero? Suscipit blanditiis
        eveniet recusandae, fugit ratione obcaecati explicabo.
      </p>
      <button className={style.button}>
        <Trash size={20} />
      </button>
    </div>
  );
}
