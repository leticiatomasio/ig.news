import { signIn, signOut, useSession } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

export function SignInButton() {
  const { data: session } = useSession();

  return session ? (
    <button type="button" className={styles.btn}>
      <FaGithub color="#04D361" />
      <span>{session.user.name}</span>
      <FiX
        color="#737380"
        className={styles.closeIcon}
        onClick={() => signOut()}
      />
    </button>
  ) : (
    <button
      type="button"
      className={styles.btn}
      onClick={() => signIn("github")}
    >
      <FaGithub color="#eba417" />
      <span>Sign in with Github</span>
    </button>
  );
}
