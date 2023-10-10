import webCards_Content from "@/webCards_Data";

import styles from "./page.module.css";
import WebCard from "@/components/webCard/WebCard";



export default function Page() {
  return (
    <main className={styles.main}>
      <h1 className="m-12 text-4xl font ">A quick look at what I have been working ons.</h1>
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
