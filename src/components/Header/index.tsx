import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.headerRight}>
          <img src="/images/logo.svg" alt="Logo" />
          <nav>
            <a href="">Home</a>
            <a href="">Posts</a>
          </nav>
        </div>
        <div>Sign in</div>
      </div>
    </header>
  );
}
