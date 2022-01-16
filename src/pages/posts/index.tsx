import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.mainContent}>
        <div className={styles.posts}>
          <a href="#">
            <time>Jan 16, 2022</time>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas a
              ab, quae quisquam ipsa blanditiis. Minus eligendi esse nesciunt
              quasi repudiandae, quia qui id deleniti temporibus! Inventore
              asperiores placeat deleniti?
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
