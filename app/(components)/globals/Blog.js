import React from "react";
import SectionTitle from "../miscs/SectionTitle";
import styles from "../../../styles/global.module.css"
import Link from 'next/link'
const Blog = () => {
  return (
    <div className={styles.blog_section}>
      <div className={styles.inner_section}>
        <SectionTitle
          title={"Our Latest Blogs"}
          sub={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy "
          }
        />
        <div className={styles.blog_container}>
            <div className={styles.blog_card}>
                <img src="/Project 1.png" alt="" />
                <h2>UI/UX Design</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...</p>
                <Link href="#">Read More</Link>
            </div>
            <div className={styles.blog_card}>
                <img src="/Project 1.png" alt="" />
                <h2>UI/UX Design</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...</p>
                <Link href="#">Read More</Link>
            </div>
            <div className={styles.blog_card}>
                <img src="/Project 1.png" alt="" />
                <h2>UI/UX Design</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...</p>
                <Link href="#">Read More</Link>
            </div>
        </div>
        <button className={styles.view_all_posts}>
            View All
        </button>
      </div>
    </div>
  );
};

export default Blog;
