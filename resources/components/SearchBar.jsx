import styles from "@styles/searchbar.module.css";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <form className={styles.wrapper}>
      <div>
        <Search className="icon" size={22} />
      </div>
      <input type="text" className={styles.input} placeholder="Search" />
    </form>
  );
};

export default SearchBar;
