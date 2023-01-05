import { useState } from "react";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Bruno Meireles"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero accusamus doloremque sunt eveniet repellendus enim reprehenderit dolorum, harum nisi quam illum vero qui adipisci labore. Obcaecati tenetur adipisci corrupti necessitatibus!"
          />
          <Post
            author="Ana Karolini"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero accusamus doloremque sunt eveniet repellendus enim reprehenderit dolorum, harum nisi quam illum vero qui adipisci labore. Obcaecati tenetur adipisci corrupti necessitatibus!"
          />
        </main>
      </div>
    </>
  );
}

export default App;
