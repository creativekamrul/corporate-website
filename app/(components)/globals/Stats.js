import React from 'react'
import styles from "../../../styles/global.module.css"
const Stats = () => {
  return (
    <div className={styles.stats}>
        <div className={styles.inner_section}>
            <div className={styles.single_stat}>
                <h2>1500+</h2>
                <h5>Happy Customers</h5>
            </div>
            <div className={styles.single_stat}>
                <h2>1500+</h2>
                <h5>Finished Projects</h5>
            </div>
            <div className={styles.single_stat}>
                <h2>1500+</h2>
                <h5>Running Projects</h5>
            </div>
            <div className={styles.single_stat}>
                <h2>1500+</h2>
                <h5>Years of Experience</h5>
            </div>
        </div>
    </div>
  )
}

export default Stats