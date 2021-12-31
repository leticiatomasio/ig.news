import styles from "./styles.module.scss";

type SubscribeButtonProps = {
  priceId: string;
};

export function SubscribeButton(props: SubscribeButtonProps) {
  return (
    <button type="button" className={styles.btn}>
      Subscribe now
    </button>
  );
}
