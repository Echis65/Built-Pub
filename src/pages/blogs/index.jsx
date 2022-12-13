import React from 'react'
// import GoToTop from '../utils/GoToTop'
import styles from "../../styles/Blog.module.css"
import BlogCard from '../../components/blogCard/BlogCard'
import Link from 'next/link'
const Blog = () => {
  return (
    <section className={styles.blog}>
        {/* <GoToTop/> */}
        <div className={styles.blogWrapper}>
            <div className={styles.blogHeader}>
                <h1>builders blog</h1>
                <p>Read our latest insights on finance, tax, accounting and SME operations</p>
                <div className={styles.searchbox}>
                    <input type="text" placeholder="Enter"/>
                    <button className={styles.searchbtn}>Search</button>
                </div>
            </div>
            <div className={styles.blogBody}>
                <div className={styles.blogbodyWrapper}>
                    <Link href="/blogs/1" className={styles.link}>
                        <BlogCard/>
                    </Link>
                    <Link href="/blogs/2" className={styles.link}>
                        <BlogCard/>
                    </Link>
                    <Link href="/blogs/3" className={styles.link}>
                        <BlogCard/>
                    </Link>
                    <Link href="/blogs/4" className={styles.link}>
                        <BlogCard/>
                    </Link>
                    <Link href="/blogs/5" className={styles.link}>
                        <BlogCard/>
                    </Link>
                    <Link href="/blogs/6" className={styles.link}>
                        <BlogCard/>
                    </Link>
                    <Link href="/blogs/7" className={styles.link}>
                        <BlogCard/>
                    </Link>
                    <Link href="/blogs/8" className={styles.link}>
                        <BlogCard/>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog