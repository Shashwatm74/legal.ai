// This is the dashboard page for the app

import React from "react";
import styles from "@/styles/components/dashboard/Dashboard.module.scss";



export default function Dashboard() {
    return (
        <>


            <section className={styles.dashboard}>
                <div className={styles.sectionWrapper}>
                    <div className={styles.profile}>
                        profile section
                        <button className={styles.editButton}>Edit</button>
                    </div>
                    <div className={styles.meetCard}>
                        <div className={styles.meetWindow}></div>
                    </div>
                    {/* <div className={styles.registrationCard}></div> */}
                </div>
            </section>
        </>
    )
}