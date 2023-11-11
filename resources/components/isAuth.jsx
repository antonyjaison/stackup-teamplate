"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";


export default function isAuth(Component) {
  return function IsAuth(props) {

    const user = useSelector(state => state.user.user)

    const auth = user;

    // console.log(auth)

    useEffect(() => {
      if (!auth) {
        return redirect("/");
      }
    }, []);


    if (!auth) {
      return null;
    }

    return <Component {...props} />;
  };
}
