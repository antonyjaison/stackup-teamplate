import styles from "@styles/toggledarkmode.module.scss";
import { Moon,Sun } from "lucide-react";

const ToggleDarkmode = () => {
  return (
    <div className={styles.wrapper}>
        <button>
            <Moon/>
            <p>Dark</p>
        </button>
        <button>
            <Sun/>
            <p>Light</p>
        </button>
    </div>
  )
}

export default ToggleDarkmode