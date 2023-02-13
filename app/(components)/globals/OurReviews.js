import React from "react";
import styles from "../../../styles/global.module.css";
import SectionTitle from "../miscs/SectionTitle";
const OurReviews = () => {
  return (
    <div className={styles.review_section}>
      <div className={styles.inner_section}>
        <SectionTitle
          title={"Here’s What Our Customers Have Said"}
          sub={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy "
          }
        />
        <div className={styles.reviews_container}>
          <div className={styles.single_review}>
            <div className={styles.single_review_inner}>
              <img src="/Empolyee 1.png" alt="" />
              <h3>Esther Howard</h3>
              <h5>C.E.O</h5>
              <p>
                Karubar has been providing excellent support. There might be
                some timezone issuses but that’s out of his control. Very
                prodessional and efficient in prioviding support with all of my
                inquiries.{" "}
              </p>
            </div>
          </div>
          <div className={styles.single_review}>
            <div className={styles.single_review_inner}>
              <img src="/Empolyee 1.png" alt="" />
              <h3>Esther Howard</h3>
              <h5>C.E.O</h5>
              <p>
                Karubar has been providing excellent support. There might be
                some timezone issuses but that’s out of his control. Very
                prodessional and efficient in prioviding support with all of my
                inquiries.{" "}
              </p>
            </div>
          </div>
          <div className={styles.single_review}>
            <div className={styles.single_review_inner}>
              <img src="/Empolyee 1.png" alt="" />
              <h3>Esther Howard</h3>
              <h5>C.E.O</h5>
              <p>
                Karubar has been providing excellent support. There might be
                some timezone issuses but that’s out of his control. Very
                prodessional and efficient in prioviding support with all of my
                inquiries.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurReviews;
