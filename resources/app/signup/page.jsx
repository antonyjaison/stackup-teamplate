"use client";

import styles from "@styles/login.module.scss";
import Image from "next/image";
import { useState, useRef } from "react";
import signUp from "@firebase/auth/signup";
import { useRouter } from "next/navigation";

const Signup = () => {
  // states for form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // userefs for form data
  const emailRef = useRef();
  const passwordRef = useRef();

  // functions for updating states
  const updateEmail = (e) => {
    emailRef.current.style.borderBottom = "1px solid black";
    setEmail(e.target.value);
  };
  const updatePassword = (e) => {
    passwordRef.current.style.borderBottom = "1px solid black";
    setPassword(e.target.value);
  };

  // function for validate email
  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const submitData = async (e) => {
    e.preventDefault()
    if (email == "" || !validateEmail(email)) {
      emailRef.current.style.borderBottom = "1px solid red";
    }
    if (password == "") {
      passwordRef.current.style.borderBottom = "1px solid red";
    }

    if (email != "" && password != "" && validateEmail(email)) {
      const { result, error } = await signUp(email, password);

      if (error) {
        return console.log(error.message);
      }

      // else successful
      console.log(result);
      setEmail("");
      setPassword("");
      return router.push("/dashboard")
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.loginsection}>
        <div className={styles.lor}>
          <Image
            src="/images/timanage.svg"
            width={162}
            height={65}
            alt="timage"
          />
        </div>
        <form>
          <div className={styles.logincontent}>
            <div className={styles.wlcm}>Welcome Back !</div>
            <div className={styles.wlcm2}>
              <p>Please enter your details</p>
            </div>
            <div className={styles.txt}>
              <p>Email</p>
              <input
                value={email}
                ref={emailRef}
                onChange={updateEmail}
                type="text"
                placeholder="Email"
              />
              <p>Password</p>
              <input
                value={password}
                ref={passwordRef}
                onChange={updatePassword}
                type="password"
                placeholder="Password"
              />
            </div>
            <div className={styles.reem}>
              <div className={styles.Reem}>
                <a href="#">Forgot Password ?</a>
              </div>
              <button type="submit" onClick={submitData} className={styles.button}>
                <span>Signup</span>
              </button>
            </div>
            <div className={styles.dont}>
              <p>Don't have an account ?</p>
              <a href="#">Sign Up.</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
