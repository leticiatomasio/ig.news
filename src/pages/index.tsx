import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.mainContent}>
        <div className={styles.textContainer}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span className={styles.cyanText}>React</span> world
          </h1>
          <p>Get access to all the publications</p>
          <p className={styles.cyanText}>for $9.90 month</p>
          <SubscribeButton />
        </div>
        <img src="/images/illustration.svg" alt="Girl coding" />
      </main>
    </>
  );
}
