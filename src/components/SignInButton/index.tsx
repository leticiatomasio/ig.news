import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export function SignInButton() {
  const isLoggedIn = false;

  return isLoggedIn ? (
    <button type="button" className={styles.btn}>
      <FaGithub color="#04D361" />
      <span>user</span>
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.btn}>
      <FaGithub color="#eba417" />
      <span>Sign in with Github</span>
    </button>
  );
}
