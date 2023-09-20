import React from "react";
import styles from "@/styles/components/dashboard/administrator/Submissions.module.scss";


export default function Submissions() {
    return (
        <>
            <section section data-scroll-section className={styles.submissions} id="submissions">
                <div className={styles.sectionWrapper}>
                    <div className={styles.submissionsCard}>
                        <div className={styles.submissionTab}>
                            this is a sample Submission and more submissions will appear here .
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}