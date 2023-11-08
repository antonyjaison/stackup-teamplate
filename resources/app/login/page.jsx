import styles from "@styles/login.module.scss";
import Image from "next/image";

const page = () => {
  return (
    <div className={styles.wrapper}>

      <div className={styles.loginsection}>
        <div className={styles.lor}>
          <Image src="/images/timanage.svg" width={162} height={65} alt="timage" />
        </div>
        <div className={styles.logincontent}>
          <div className={styles.wlcm}>Welcome Back !</div>
          <div className={styles.wlcm2}>
            <p>Please enter your details</p>
          </div>
          <div className={styles.txt}>
            <p>Email</p>
            <input type="text" placeholder="Email" />
            <p>Password</p>
            <input type="password" placeholder="Password" />
          </div>
          <div className={styles.reem}>
            <div className={styles.Reem}>
              <a href="#">Forgot Password ?</a>
            </div>
            <button className={styles.button}>
              <span>Log In</span>
            </button>
          </div>
          <div className={styles.dont}>
            <p>Don't have an account ?</p>
            <a href="#">Sign Up.</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
