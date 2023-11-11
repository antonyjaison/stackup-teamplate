"use client";

import styles from "@styles/login.module.scss";
import Image from "next/image";
import Link from "next/link";
import signIn from "@firebase/auth/signin";
import { saveToLocalStorage } from "@utils/localstorage";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector,useDispatch } from "react-redux";
import { setUserLogin } from "@features/userSlice";
import { db } from "@firebase/config";
import {collection, addDoc, Timestamp} from 'firebase/firestore'

const page = () => {

  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user.user);

  // console.log(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    e.preventDefault();

    if (email == "" || !validateEmail(email)) {
      emailRef.current.style.borderBottom = "1px solid red";
    }
    if (password == "") {
      passwordRef.current.style.borderBottom = "1px solid red";
    }

    if (email != "" && password != "" && validateEmail(email)) {
      const { result, error } = await signIn(email, password);

      const { user } = result;

      const uid = user.uid;
      const accessToken = user.accessToken;
      const resEmail = user.email;

      const data = {
        uid,
        accessToken,
        email:resEmail,
      };

      // try {
      //   await addDoc(collection(db, 'users'), {
      //     uid: uid,
      //     email: email,
      //     created: Timestamp.now()
      //   })
      //   onClose()
      // } catch (err) {
      //   alert(err)
      // }

      saveToLocalStorage(data);
      dispatch(setUserLogin(data));
      // console.log(data);


      if (error) {
        return console.log(error.message);
      }

      // else successful
      setEmail("");
      setPassword("");
      return router.push("/dashboard");
    }
  };

  return (
    <div className={styles.wrapper}>
      <form>
        <div className={styles.loginsection}>
          <div className={styles.lor}>
            <Image
              src="/images/timanage.svg"
              width={162}
              height={65}
              alt="timage"
            />
          </div>
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
              <button
                type="submit"
                onClick={submitData}
                className={styles.button}
              >
                Login
              </button>
            </div>
            <div className={styles.dont}>
              <p>Don't have an account ?</p>
              <Link href="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
