"use client"
import styles from "@styles/dashboardLayout.module.scss"
import Sidebar from "@components/Sidebar"
import { useSelector, useDispatch } from "react-redux"
import isAuth from "@components/isAuth"
import { getFromLocalStorage } from "@utils/localstorage"
import { useEffect } from "react"
import { setUserLogin } from "@features/userSlice"

const UserDashboardlayout = ({ children }) => {
  const dispatch = useDispatch()

  const auth = getFromLocalStorage("data")
  console.log(auth)

  const user = useSelector((state) => state.user.user)

  useEffect(() => {
    dispatch(setUserLogin(auth))
  },[])
  console.log(user)
  return (
    <main className={styles.wrapper}>
        <div className={styles.sidebar}>
            <Sidebar/>
        </div>
        <div className={styles.body}>
            {children}
        </div>
    </main>
  )
}

export default UserDashboardlayout