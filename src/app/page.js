import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Hellooo, This is my first app to deploy<br/>
        Good morning
      </h1>
    </div>
  );
}
