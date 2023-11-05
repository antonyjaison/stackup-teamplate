import styles from "@styles/dashboardLayout.module.scss"
import Sidebar from "@components/Sidebar"


const UserDashboardlayout = ({ children }) => {
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