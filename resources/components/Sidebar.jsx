import styles from "@styles/sidebar.module.css"
import SearchBar from "./SearchBar"
import { Menu } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.logo}>
            <h3 className={styles.title}>Menu</h3>
            <Menu className="icon" size={22}/>
        </div>
        <SearchBar/>
    </div>
  )
}
export default Sidebar