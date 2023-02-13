import Link from 'next/link'
import React from 'react'
import styles from "../../../styles/global.module.css"
const Header = () => {
  return (
    <header className={styles.main_header}>
        <div className={styles.inner_section}>
        <div className={styles.logo}>
            Learnio
        </div>
        <div className={styles.main_menu}>
            <nav>
                <ul>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/services"}>Services</Link></li>
                    <li><Link href={"/team"}>Our Team</Link></li>
                    <li><Link href={"/choose-us"}>Why Choose us</Link></li>
                    <li><Link href={"/about"}>About Us</Link></li>
                </ul>
            </nav>
        </div>
        <div className={styles.top_cta}>
            <button><Link href={"/contact"}>Contact</Link></button>
        </div>
        </div>
    </header>
  )
}

export default Header