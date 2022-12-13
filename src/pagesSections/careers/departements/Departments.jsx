import styles from "./Departments.module.css"
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Link from 'next/link'
const Departments = () => {
  return (
    <section className={styles.departments}>
        <div className={styles.departmentsWrapper}>
            <div className={styles.departmentsHeader}>
                <h1>What We're About</h1>
                <p>Where do you think you can make an impact?</p>
            </div>
            <form>
                <select name="departments" id={styles.departments}>
                    <option value="All Departements">All Departments</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Business Development">Business Development</option>
                </select>
            </form>
            <div className={styles.majorDepartments}>
                <div className={styles.departmentAvailable}>
                    <div className={styles.departmentTitle}>
                        <h1 className={styles.departmentName}>Accounting</h1>
                        <span>(4)</span>
                    </div>
                    <Link href="/careers/1" className={styles.link}>
                        <div className={styles.departmentsPositions}>
                            <div className={styles.departmentPositionLeft}>
                                <div className={styles.positionTitle}>
                                    <h1>Manager Accounting</h1>
                                    <h1>(Remote)</h1>
                                </div>
                                <p className={styles.jobLocation}>Accra</p>
                            </div>
                            <ChevronRightOutlinedIcon className={styles.arrowRight}/>
                        </div>
                    </Link>
                    <Link href="/careers/2" className={styles.link}>
                        <div className={styles.departmentsPositions}>
                            <div className={styles.departmentPositionLeft}>
                                <div className={styles.positionTitle}>
                                    <h1>Manager Accounting</h1>
                                    <h1>(Remote)</h1>
                                </div>
                                <p className={styles.jobLocation}>Accra</p>
                            </div>
                            <ChevronRightOutlinedIcon className={styles.arrowRight}/>
                        </div>
                    </Link>
                    <Link href="/careers/3" className={styles.link}>
                        <div className={styles.departmentsPositions}>
                            <div className={styles.departmentPositionLeft}>
                                <div className={styles.positionTitle}>
                                    <h1>Manager Accounting</h1>
                                    <h1>(Remote)</h1>
                                </div>
                                <p className={styles.jobLocation}>Accra</p>
                            </div>
                            <ChevronRightOutlinedIcon className={styles.arrowRight}/>
                        </div>
                    </Link>
                    <Link href="/careers/4" className={styles.link}>
                        <div className={styles.departmentsPositions}>
                            <div className={styles.departmentPositionLeft}>
                                <div className={styles.positionTitle}>
                                    <h1>Manager Accounting</h1>
                                    <h1>(Remote)</h1>
                                </div>
                                <p className={styles.jobLocation}>Accra</p>
                            </div>
                            <ChevronRightOutlinedIcon className={styles.arrowRight}/>
                        </div>
                    </Link>
                    <Link href="/careers/5" className={styles.link}>
                        <div className={styles.departmentsPositions}>
                            <div className={styles.departmentPositionLeft}>
                                <div className={styles.positionTitle}>
                                    <h1>Manager Accounting</h1>
                                    <h1>(Remote)</h1>
                                </div>
                                <p className={styles.jobLocation}>Accra</p>
                            </div>
                            <ChevronRightOutlinedIcon className={styles.arrowRight}/>
                        </div>
                    </Link>
                </div>
                <div className={styles.departmentAvailable}>
                    <div className={styles.departmentTitle}>
                        <h1 className={styles.departmentName}>Business Accounting</h1>
                        <span>(2)</span>
                    </div>
                    <div className={styles.departmentsPositions}>
                        <div className={styles.departmentPositionleft}>
                            <div className={styles.positionTitle}>
                                <h1>Manager Accounting</h1>
                                <h1>(Remote)</h1>
                            </div>
                            <p className={styles.jobLocation}>Accra</p>
                        </div>
                        <ChevronRightOutlinedIcon className={styles.arrowRight}/>
                    </div>
                    <div className={styles.departmentsPositions}>
                        <div className={styles.departmentPositionleft}>
                            <div className={styles.positionTitle}>
                                <h1>Manager Accounting</h1>
                                <h1>(Remote)</h1>
                            </div>
                            <p className={styles.jobLocation}>Accra</p>
                        </div>
                        <ChevronRightOutlinedIcon className={styles.arrowRight}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Departments