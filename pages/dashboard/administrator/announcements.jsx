import React from "react";
import styles from "@/styles/components/dashboard/administrator/Announcements.module.scss";

export default function Announcements() {
    return (
        <>
            <section section data-scroll-section className={styles.announcements} id="announcements">
                <div className={styles.sectionWrapper}>
                    <div className={styles.announcementsCard}>
                        <div className={styles.announcementTab}>
                            this is a sample announcement and more announcements can be added here .

                        </div>
                        <button className={styles.addAnnouncementsButton}>
                            +
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}   