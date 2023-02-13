import React from 'react'
import styles from "../../../styles/global.module.css"
const ContactForm = () => {
  return (
    <div className={styles.form_section}>
        <div className={styles.inner_section}>
            <form>
                <div className={styles.input_row}>
                    <div className={styles.input_col}>
                        <label htmlFor='full_name'>Full Name</label>
                        <input type="text" placeholder='Janecooper' id='full_name'/>
                    </div>
                    <div className={styles.input_col}>
                        <label htmlFor='phone'>Phone Number</label>
                        <input type="tel" placeholder='+92305 7805031' id='phone'/>
                    </div>
                </div>
                <div className={styles.input_row}>
                    <div className={`${styles.input_col} ${styles.col_full}`}>
                        <label htmlFor='email'>Email</label>
                        <input type="email" placeholder='Janecooper@gmail.com' id='email'/>
                    </div>
                </div>
                <div className={styles.input_row}>
                    <div className={`${styles.input_col} ${styles.col_full}`}>
                        <label htmlFor='Message'>Message</label>
                        <textarea cols="30" rows="10" id='Message' placeholder='Write Message...'></textarea>
                    </div>
                </div>
                <div className={styles.input_row}>
                    <div className={`${styles.input_col} ${styles.col_full}`}>
                        <input type="submit" value={"Submit"}/>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactForm