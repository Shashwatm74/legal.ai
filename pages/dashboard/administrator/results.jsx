import React from "react";
import styles from "@/styles/components/dashboard/administrator/Results.module.scss";

export default function Results() {
    return (
        <>
            <section section data-scroll-section className={styles.results} id="results">
                <div className={styles.sectionWrapper}>
                    <div className={styles.resultsCard}>
                        <div className={styles.resultTab}>
                            This is a sample result and more results can be added here .

                        </div>
                        <button className={styles.addResultButton}>
                            +
                        </button>
                    </div>

                </div>
            </section>
        </>
    )
}