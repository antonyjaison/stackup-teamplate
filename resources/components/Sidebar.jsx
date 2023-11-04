import styles from "@styles/sidebar.module.css"
import { Bars3Icon } from '@heroicons/react/24/outline'
import SearchBar from "./SearchBar"

const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.logo}>
            <h3 className={styles.title}>Menu</h3>
            <Bars3Icon className={styles.icon}/>
        </div>
        <SearchBar/>
    </div>
  )
}
export default Sidebar