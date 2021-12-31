import Head from "next/head";
import { GetStaticProps } from "next";
import { SubscribeButton } from "../components/SubscribeButton";

import styles from "./home.module.scss";
import { stripe } from "../services/stripe";

type HomeProps = {
  product: {
    priceId: string;
    amount: number;
  };
};

export default function Home(props: HomeProps) {
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
          <p className={styles.cyanText}>for {props.product.amount} month</p>
          <SubscribeButton priceId={props.product.priceId} />
        </div>
        <img src="/images/illustration.svg" alt="Girl coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1KCSVoIhgSN4EtQ4DactAsDh");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: { product },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
