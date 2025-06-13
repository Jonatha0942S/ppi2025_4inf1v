import styles from "./Header.module.css";
import img from "../assets/img/apple.png";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.centralContainer}>
        <div className={styles.containerImg}>
          <img src={img}
          alt="Foco, Força e Fé"
          />
        </div>
        <h1 className={styles.tema}>Foco, Força e Fé</h1>
      </div>
    </header>
  );
}