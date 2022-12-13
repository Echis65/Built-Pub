import LinkedIn from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter';
import memImg1 from "../../../../public/assets/images/careers/Ellipse 21.png"
import memImg2 from "../../../../public/assets/images/careers/Ellipse 20.png"
import memImg3 from "../../../../public/assets/images/careers/Ellipse 19.png"
import memImg4 from "../../../../public/assets/images/careers/Ellipse 18.png"
import memImg5 from "../../../../public/assets/images/careers/Ellipse 17.png"
import memImg6 from "../../../../public/assets/images/careers/Ellipse 16.png"
import memImg7 from "../../../../public/assets/images/careers/Ellipse 15.png"
import teamImg from "../../../../public/assets/images/careers/Rectangle 125.png"
import styles from "./Team.module.css"
import Image from "next/image"

const teamdata = [
    {
        id: 1,
        name: "Edward",
        position: "Developer, PM",
        image: memImg1
    },
    {
        id: 2,
        name: "Betty",
        position: "Developer, PM",
        image: memImg2
    },
    {
        id: 3,
        name: "Kwame vs.2",
        position: "Developer, PM",
        image: memImg3
    },
    {
        id: 4,
        name: "Theophilus",
        position: "Developer, PM",
        image: memImg5
    },
    {
        id: 5,
        name: "Grace",
        position: "Developer, PM",
        image: memImg4
    },
    {
        id: 6,
        name: "Daniel",
        position: "Developer, PM",
        image: memImg6
    },
    {
        id: 7,
        name: "Nathaniel",
        position: "Developer, PM",
        image: memImg7
    },
]
const Team = () => {
  return (
    <section className={styles.team}>
        <div className={styles.teamWrapper}>
            <h1>The Team Behind Built</h1>
            <div className={styles.teamMemberContainer}>
                {teamdata.map((tdata)=>
                    <div className={styles.teamMemberinfo} key={tdata.id}>
                        <div className={styles.memberImg}>
                            <Image src={tdata.image} alt="" />
                            <div className={styles.socialLinks}>
                                <LinkedIn className={styles.memberSocialLink}/>
                                <TwitterIcon className={styles.memberSocialLink}/>
                            </div>
                        </div>
                        <p className={styles.memberName}>{tdata.name}</p>
                        <p className={styles.memberPosition}>{tdata.position}</p>
                    </div>
                )}
            </div>
            <Image src={teamImg} alt="" className={styles.teamImg} />
        </div>
    </section>
  )
}

export default Team