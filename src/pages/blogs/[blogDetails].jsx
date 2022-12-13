import React from 'react'
import styles from "../../styles/BlogDetails.module.css"
import detailsImg from "../../../public/assets/images/bdImg.png"
import articleImg from "../../../public/assets/images/articleImg.png"
import GoToTop from '../../utils/GoToTop'
import Image from "next/image"
const BlogDetails = () => {
  return (
    <section className={styles.blogDetails}>
        {/* <GoToTop/> */}
        <div className={styles.blogDetailsWrapper}>
            <div className={styles.blogDetailsleft}>
                <div className={styles.leftHeader}>
                    <div className={styles.blogProfile}>
                        <div className={styles.image}></div>
                        <div className={styles.profileInfo}>
                            <p>Edward Neequaye</p>
                            <p>5 min read</p>
                        </div>
                    </div>
                    <p className={styles.date}>12 June, 2022</p>
                </div>
                <Image src={detailsImg} alt="" className="detail-img"/>
                <div className={styles.detailstitleContainer}>
                    <h1>The PAYE calculator in Ghana</h1>
                    <div className={styles.blogTag}>
                        <span>Accounting</span>
                    </div>
                </div>
                <div className={styles.details}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin tristique pharetra. Pellentesque ac consectetur tellus. Sed sodales quam erat, et maximus magna tempor vitae. In pretium arcu at odio pretium dapibus. Integer eu vestibulum odio, ac hendrerit leo. Nulla eu turpis nec orci porta varius eu a purus. Aenean eu tortor mollis, aliquet lorem a, aliquet augue.Fusce consequat congue nibh, quis eleifend ante tincidunt eu. Sed dolor sem, volutpat non finibus at, auctor eu neque. Mauris quis odio eu nisi tincidunt gravida ut eu sapien. Cras in dignissim tortor, id pretium sapien. Etiam cursus egestas massa eu cursus. Sed in auctor lacus, eget maximus urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam cursus nulla sed urna euismod aliquet sit amet at leo.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin tristique pharetra. Pellentesque ac consectetur tellus. Sed sodales quam erat, et maximus magna tempor vitae. In pretium arcu at odio pretium dapibus. Integer eu vestibulum odio, ac hendrerit leo. Nulla eu turpis nec orci porta varius eu a purus. Aenean eu tortor mollis, aliquet lorem a, aliquet augue.Fusce consequat congue nibh, quis eleifend ante tincidunt eu. Sed dolor sem, volutpat non finibus at, auctor eu neque. Mauris quis odio eu nisi tincidunt gravida ut eu sapien. Cras in dignissim tortor, id pretium sapien. Etiam cursus egestas massa eu cursus. Sed in auctor lacus, eget maximus urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam cursus nulla sed urna euismod aliquet sit amet at leo.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin tristique pharetra. Pellentesque ac consectetur tellus. Sed sodales quam erat, et maximus magna tempor vitae. In pretium arcu at odio pretium dapibus. Integer eu vestibulum odio, ac hendrerit leo. Nulla eu turpis nec orci porta varius eu a purus. Aenean eu tortor mollis, aliquet lorem a, aliquet augue.Fusce consequat congue nibh, quis eleifend ante tincidunt eu. Sed dolor sem, volutpat non finibus at, auctor eu neque. Mauris quis odio eu nisi tincidunt gravida ut eu sapien. Cras in dignissim tortor, id pretium sapien. Etiam cursus egestas massa eu cursus. Sed in auctor lacus, eget maximus urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam cursus nulla sed urna euismod aliquet sit amet at leo.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin tristique pharetra. Pellentesque ac consectetur tellus. Sed sodales quam erat, et maximus magna tempor vitae. In pretium arcu at odio pretium dapibus. Integer eu vestibulum odio, ac hendrerit leo. Nulla eu turpis nec orci porta varius eu a purus. Aenean eu tortor mollis, aliquet lorem a, aliquet augue.Fusce consequat congue nibh, quis eleifend ante tincidunt eu. Sed dolor sem, volutpat non finibus at, auctor eu neque. Mauris quis odio eu nisi tincidunt gravida ut eu sapien. Cras in dignissim tortor, id pretium sapien. Etiam cursus egestas massa eu cursus. Sed in auctor lacus, eget maximus urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam cursus nulla sed urna euismod aliquet sit amet at leo.</p>
                </div>
            </div>
            <div className={styles.blogDetailsRight}>
                <h1>More Articles</h1>
                <div className={styles.moreArticles}>
                    <div className={styles.article}>
                        <div className={styles.articleleft}>
                            <div className={styles.articleleftTop}>
                                <div className={styles.img}></div>
                                <p>Edward Neequaye</p>
                            </div>
                            <p>The PAYE calculator in Ghana</p>
                        </div>
                        <Image src={articleImg} alt="" />
                    </div>
                    <div className={styles.article}>
                        <div className={styles.articleLeft}>
                            <div className={styles.articleleftTop}>
                                <div className={styles.img}></div>
                                <p>Edward Neequaye</p>
                            </div>
                            <p>The PAYE calculator in Ghana</p>
                        </div>
                        <Image src={articleImg} alt="" />
                    </div>
                    <div className={styles.article}>
                        <div className={styles.articleLeft}>
                            <div className={styles.articleleftTop}>
                                <div className={styles.img}></div>
                                <p>Edward Neequaye</p>
                            </div>
                            <p>The PAYE calculator in Ghana</p>
                        </div>
                        <Image src={articleImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogDetails