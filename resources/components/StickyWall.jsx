import styles from '@styles/stickywall.module.scss'

const StickyWall = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.task_heading}>Social media</h3>
      <div className={styles.tasks}>
        <p>- plan a socicl media content</p>
        <p>- plan socicl content</p>
        <p>- plan a socicl media content</p>
        <p>- plan a socicl</p>
        <p>- plan a socicl media content</p>
      </div>
    </div>
  )
}

export default StickyWall