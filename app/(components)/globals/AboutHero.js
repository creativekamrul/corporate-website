import React from "react";
import styles from "../../../styles/global.module.css"
const AboutHero = () => {
  return (
    <div className={styles.about_hero}>
      <div className={styles.inner_section}>
        <div className={styles.about_content}>
          <span>About us</span>
          <h2>World Class Trending Platform</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown. Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry’s standard dummy
          </p>
        </div>
        <div className={styles.about_image}>
            <img src="/about-hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
