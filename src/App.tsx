import styles from "./app.module.css";

import { Header } from "./components/Header";
import { Letter } from "./components/Letter";
import { Tip } from "./components/Tip";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

export default function App() {

  function handleRestartGame() {
    alert("Reiniciar o jogo!");
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />
        <Tip tip="Essa é uma dica legal!" />

        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="e" />
          <Letter value="a" />
          <Letter value="c" />
          <Letter value="t" />
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input placeholder="?" maxLength={1} autoFocus />
          <Button title="Confirmar" />
        </div>

      </main>
    </div>
  );
}