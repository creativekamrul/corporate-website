import React from "react";
import styles from "../../../styles/global.module.css";
import SectionTitle from "../miscs/SectionTitle";
const OurProjects = () => {
  return (
    <div className={styles.our_porjects}>
      <div className={styles.inner_section}>
        <SectionTitle
          title={"Our Recent Projects"}
          sub={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy "
          }
        />
        <div className={styles.project_container}>
          <div style={{backgroundImage: `url('/Project ${1}.png')`}} className={styles.single_project}>
            <div className={styles.single_project_inner}>
              <h3>Mobile App Design</h3>
              <h5>App Developemt</h5>
            </div>
          </div>
          <div style={{backgroundImage: `url('/Project ${2}.png')`}} className={styles.single_project}>
            <div className={styles.single_project_inner}>
              <h3>Mobile App Design</h3>
              <h5>App Developemt</h5>
            </div>
          </div>
          <div style={{backgroundImage: `url('/Project ${3}.png')`}} className={styles.single_project}>
            <div className={styles.single_project_inner}>
              <h3>Mobile App Design</h3>
              <h5>App Developemt</h5>
            </div>
          </div>
        </div>
        <button className={styles.projects_view_all}>
        View All
        </button>
      </div>
    </div>
  );
};

export default OurProjects;
