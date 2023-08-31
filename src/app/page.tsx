
import WebCard from "./components/webCard/webCard";
import styles from "./page.module.css";
import webCards_Data from "./webCards_Data";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
      {webCards_Data.map(content => (
          <div key={content.title} className={styles.webCard}>
            <WebCard {...content} />
          </div>
        ))}
      </div>
    </main>
  );
}
