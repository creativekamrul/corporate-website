import React from 'react'
import styles from "../../../styles/global.module.css"
const InnerPageHero = ({title}) => {
  return (
    <div className={styles.inner_page_hero_section}>
        <h1>{title}</h1>
    </div>
  )
}

export default InnerPageHero