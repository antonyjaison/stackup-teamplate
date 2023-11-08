import StickyWalls from "@components/StickyWalls"
import styles from "@styles/dashboard.module.scss"

const Dashboard = ({ params }) => {
  const { username } = params
  return (
    <div className={styles.wrapper}>
      <h3>Sticky Wall</h3>
      <StickyWalls/>
    </div>
  )
}

export default Dashboard