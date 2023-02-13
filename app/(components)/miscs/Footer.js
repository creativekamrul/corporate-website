import Link from 'next/link'
import React from 'react'
import styles from "../../../styles/global.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <footer className={styles.main_footer}> 
        <div className={styles.inner_section}>
            <div className={styles.footer_menus}>
                <div className={styles.single_menu}>
                    <h2>Company</h2>
                    <ul>
                        <li><Link href={"#"}>About us</Link></li>
                        <li><Link href={"#"}>Contact us</Link></li>
                        <li><Link href={"#"}>Privacy Policy</Link></li>
                        <li><Link href={"#"}>Terms & Conditions</Link></li>
                    </ul>
                </div>
                <div className={styles.single_menu}>
                    <h2>Question?</h2>
                    <ul>
                        <li><Link href={"#"}>About us</Link></li>
                        <li><Link href={"#"}>Why Choose us</Link></li>
                        <li><Link href={"#"}>FAQS</Link></li>
                    </ul>
                </div>
                <div className={styles.single_menu}>
                    <h2>Contact us</h2>
                    <ul>
                        <li><Link href={"#"}><span><FontAwesomeIcon icon={faLocationDot} /></span> loremipsum.learniooo</Link></li>
                        <li><Link href={"#"}><span><FontAwesomeIcon icon={faEnvelope} /></span> info@gmail.com</Link></li>
                        <li><Link href={"#"}><span><FontAwesomeIcon icon={faPhone} /></span> 2382035970</Link></li>
                    </ul>
                </div>

            </div>
            <div className={styles.footer_copy}>
                    <p>copyright @ 2023 learnio.eu. all right reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer