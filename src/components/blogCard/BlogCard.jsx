import React from 'react'
import blogImg from "../../../public/assets/images/blogImg1.png"
import styles from "./BlogCard.module.css"
import Image from "next/image"
const BlogCard = () => {
  return (
    <article className={styles.blogCard}>
        <div className={styles.blogCardWrapper}>
            <div className={styles.blogTag}>
                <span>Accounting</span>
            </div>
            <Image src={blogImg} alt="" />
            <div className={styles.blogCardInfo}>
                <h1>The PAYE calculator in Ghana</h1>
                <p className={styles.bogCardInfomsg}>Employees pay their taxes using a system known as pay-as-you-earn, or PAYE, in which the government deducts taxes from their…</p>
                <div className={styles.blogProfile}>
                    <div className={styles.image}></div>
                    <div className={styles.profileInfo}>
                        <p>Edward Neequaye</p>
                        <p>12 Jun - 5 min read</p>
                    </div>
                </div>
            </div>
        </div>
    </article>
  )
}

export default BlogCard