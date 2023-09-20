// This is the dashboard page for the app

import React from "react";
import styles from "@/styles/components/dashboard/Dashboard.module.scss";
import Link from "next/link";
const user = "Admin";


export default function Dashboard() {
    return (
        <>

            <aside className={styles.sidebar}>
                <h1 className={styles.sidebargreeting}>
                    Hello {user}
                </h1>
                <Link href="/dashboard/" replace>Home</Link>
                <Link href="/dashboard/announcements}">Announcements</Link>
                <Link href="/dashboard/submissions/}">Submissions</Link>
                <Link href="/dashboard/results/}">Results</Link>
                <Link href="/dashboard/contact-us/}">Contact us </Link>
                <Link href="/dashboard/privacy-policy/}">Privacy Policy</Link>
                <Link href="/dashboard/profile">Profile</Link>
            </aside>
            <section className={styles.dashboard}>
                <div className={styles.sectionWrapper}>
                    <div className={styles.profile}>
                        profile section
                        <button className={styles.editButton}>Edit</button>
                    </div>
                    <div className={styles.meetCard}>
                        <div className={styles.meetWindow}></div>
                    </div>
                    <div className={styles.registrationCard}></div>
                </div>
            </section>
        </>
    )
}