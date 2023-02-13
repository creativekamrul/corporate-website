import React from "react";
import styles from "../../../styles/global.module.css";
import SectionTitle from "../miscs/SectionTitle";
const OurServices = () => {
  return (
    <div className={styles.our_services}>
      <div className={styles.inner_section}>
        <SectionTitle
          title={"Our Services"}
          sub={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy "
          }
        />
        <div className={styles.services_container}>
          <div className={styles.single_service}>
            <div>
              <img src="/icon-1.png" alt="" />
              <h3>Content Management</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the...
              </p>
            </div>
          </div>
          <div className={styles.single_service}>
            <div>
              <img src="/icon-2.png" alt="" />
              <h3>Process Automation</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the...
              </p>
            </div>
          </div>
          <div className={styles.single_service}>
            <div>
              <img src="/icon-3.png" alt="" />
              <h3>SEO & Marketing</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the...
              </p>
            </div>
          </div>
          <div className={styles.single_service}>
            <div>
              <img src="/icon-4.png" alt="" />
              <h3>UI/UX Design</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the...
              </p>
            </div>
          </div>
          <div className={styles.single_service}>
            <div>
              <img src="/icon-5.png" alt="" />
              <h3>Apps Development</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the...
              </p>
            </div>
          </div>
          <div className={styles.single_service}>
            <div>
              <img src="/icon-6.png" alt="" />
              <h3>Video Editing</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
