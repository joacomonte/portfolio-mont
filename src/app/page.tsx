import WebCard from "./components/webCard/WebCard";
import styles from "./page.module.css";
import webCards_Content from "./webCards_Data";


export default function Page() {
  return (
    <main className={styles.main}>
      <h1 style={{margin:'50px', fontSize: '2.5rem'}}>My Projects</h1>
      <div className={styles.grid}>
      {webCards_Content.map(content => (
          <div key={content.title} className={styles.webCard}>
            <WebCard {...content} />
          </div>
        ))}
      </div>
    </main>
  );
}
