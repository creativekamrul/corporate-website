import React from 'react'
import styles from "../../../styles/global.module.css";

const SectionTitle = ({title, sub}) => {
  return (
    <div className={styles.section_title}>
            <h2>{title}</h2>
            <p>{sub}</p>
        </div>
  )
}

export default SectionTitle