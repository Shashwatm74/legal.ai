// This is the dashboard home page for the app

import React from "react";
import styles from "@/styles/components/dashboard/Dashboard.module.scss";
import { Button } from "@geist-ui/react";
import Link from "next/link";



export default function Dashboard() {
    const dateTimeTarget = new Date('June 3, 24 17:30:00 GMT+05:30').getTime();
    return (
        <>


            <section className={styles.dashboard}>
                <div className={styles.sectionWrapper}>
                    <div className={styles.profile}>
                        <div className={styles.photo}>Photo</div>
                        <div className={styles.headCard}>
                            <div className={styles.nameHead}>John Wick</div>
                            <div className={styles.emailHead}>johnwick@gmail.com</div>
                        </div>
                        <div className={styles.locDetails}>
                            <div className={styles.collegeName}>Indian Institute of Technology Kanpur</div>
                            <div className={styles.stateName}>Uttar Pradesh</div>
                            <div className={styles.phNumber}>9876543210</div>
                        </div>
                        <Link href={"/dashboard/profile"} replace><button className={styles.editButton}>Edit</button></Link>
                    </div>

                    <div className={styles.meetCard}>

                        <div className={styles.meetJoin}>
                            <p>
                                The the join meet button will be enabled once the host starts the meeting
                            </p>
                            <div className={styles.joinButton}>
                                <Button disabled auto type="success" scale={0.75} className={styles.button}>Join The Meet</Button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}