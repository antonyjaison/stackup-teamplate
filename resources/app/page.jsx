import styles from "@styles/homepage.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.dim_layer}>
          <nav>
            <img src="/images/timanage.svg" alt="logo" />
            <Link href="/login">Login</Link>
          </nav>

          <div className={styles.content}>
            <h1>
              Task <br />
              <span>Management</span>
            </h1>
            <p>
              Task management entails structuring and organizing tasks
              efficiently, employing strategies to prioritize, execute, and
              track progress, ultimately ensuring effective and timely
              completion.
            </p>
          </div>

          <div></div>
          <div></div>

        </div>
      </div>
    </>
  );
}
