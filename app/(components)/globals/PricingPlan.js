import React from "react";
import styles from "../../../styles/global.module.css";
import SectionTitle from "../miscs/SectionTitle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
const PricingPlan = () => {
  return (
    <div className={styles.price_plan}>
      <div className={styles.inner_section}>
        <SectionTitle
          title={"Choose Your Plan"}
          sub={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy "
          }
        />
        <div className={styles.plan_container}>
            <div className={styles.single_plan}>
                <div className={styles.plan_content}>
                    <div className={styles.price}>
                        <h3>$39 <span>/2 month</span></h3>
                    </div>
                    <div className={styles.plan_features}>
                        <ul>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Audience Selection</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Audience Selection</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Audience Selection</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Audience Selection</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Audience Selection</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Audience Selection</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Audience Selection</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Audience Selection</li>
                        </ul>
                    </div>
                    <div className={styles.plan_cta}>
                        <button>CHOOSE PLAN</button>
                    </div>
                </div>
            </div>
            <div className={styles.single_plan}>
                <div className={styles.plan_content}>
                    <div className={styles.price}>
                        <h3>$39 <span>/2 month</span></h3>
                    </div>
                    <div className={styles.plan_features}>
                        <ul>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Audience Selection</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Audience Selection</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Audience Selection</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Audience Selection</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Audience Selection</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Audience Selection</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Audience Selection</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Audience Selection</li>
                        </ul>
                    </div>
                    <div className={styles.plan_cta}>
                        <button>CHOOSE PLAN</button>
                    </div>
                </div>
            </div>
            <div className={styles.single_plan}>
                <div className={styles.plan_content} >
                    <div className={styles.price}>
                        <h3>$39 <span>/2 month</span></h3>
                    </div>
                    <div className={styles.plan_features}>
                        <ul>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Audience Selection</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Audience Selection</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Audience Selection</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Audience Selection</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Audience Selection</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Audience Selection</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Audience Selection</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Audience Selection</li>
                        </ul>
                    </div>
                    <div className={styles.plan_cta}>
                        <button>CHOOSE PLAN</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
