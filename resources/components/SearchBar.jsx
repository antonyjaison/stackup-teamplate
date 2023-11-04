import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import styles from "@styles/searchbar.module.css"

const SearchBar = () => {
  return (
    <form className={styles.wrapper}>
        <MagnifyingGlassIcon className="icon"/>
        <input type="text"  className={styles.input} placeholder="Search"/>
    </form>
  )
}

export default SearchBar