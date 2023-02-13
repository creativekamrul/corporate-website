import React from "react";
import styles from "../../../styles/global.module.css";
import SectionTitle from "../miscs/SectionTitle";
const OurTeam = ({title, sub}) => {
  
  return (
    <div className={styles.our_team}>
      <div className={styles.inner_section}>
        <SectionTitle
          title={title}
          sub={sub}
        />
        <div className={styles.team_container}>
          <div style={{backgroundImage: `url('/Empolyee ${1}.png')`}} className={styles.single_member}>
            <div className={styles.single_member_inner}>
              <h3>James Cooper</h3>
              <h5>UI/UX Design</h5>
            </div>
          </div>
          <div style={{backgroundImage: `url('/Empolyee ${1}.png')`}} className={styles.single_member}>
            <div className={styles.single_member_inner}>
              <h3>James Cooper</h3>
              <h5>UI/UX Design</h5>
            </div>
          </div>
          <div style={{backgroundImage: `url('/Empolyee ${1}.png')`}} className={styles.single_member}>
            <div className={styles.single_member_inner}>
              <h3>James Cooper</h3>
              <h5>UI/UX Design</h5>
            </div>
          </div>
          <div style={{backgroundImage: `url('/Empolyee ${1}.png')`}} className={styles.single_member}>
            <div className={styles.single_member_inner}>
              <h3>James Cooper</h3>
              <h5>UI/UX Design</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
