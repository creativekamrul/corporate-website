import React from "react";
import styles from "../../../styles/global.module.css";
const HomeHero = () => {
  return (
    <div className={styles.hero_area}>
      <div className={styles.inner_section}>
        <div className={styles.section_content}>
          <h1>Let’s Create Something Great Together</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
