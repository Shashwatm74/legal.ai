//ooga booga
// This is the dashboard profile page for the app

import React from "react";
import styles from "@/styles/components/dashboard/Profile.module.scss";

import { Button } from "@geist-ui/react";

export default function Dashboard() {
    return (
        <>
            <section section data-scroll-section className={styles.profile} id="profile">
                <div className={styles.sectionWrapper}>
                    <div className={styles.profileCard}>

                        <script defer src="https://cdn.lordicon.com/bhenfmcm.js" />

                        <lord-icon src="https://cdn.lordicon.com/jxwksgwv.json"
                            trigger="hover"
                            colors="primary:#121331"                        >
                        </lord-icon>

                        ACCOUNT SETTINGS
                        <div className={styles.photo}>Photo</div>
                        <div className={styles.headCard}>
                            <div className={styles.nameHead}>John Wick</div>
                            <div className={styles.emailHead}>johnwick@gmail.com</div>
                        </div>
                        <div className={styles.detailsBox}>

                            {/* Full Name */}
                            <input className={styles.nameBox} placeholder="John Wick" />
                            {/* </div> */}
                            {/* <div className={styles.boxSet}> */}
                            {/* Email Id */}
                            <input className={styles.emailBox} placeholder="johnwick@gmail.com" />
                            {/* </div> */}
                            {/* <div className={styles.boxSet}> */}
                            {/* Permanent Address */}
                            <input className={styles.addressBox} placeholder="1234 Church Street Rd" />
                            {/* </div> */}
                            {/* <div className={styles.boxSet}> */}
                            {/* City */}
                            <input className={styles.cityBox} placeholder="New York City" />
                            {/* </div> */}
                            {/* <div className={styles.boxSet}> */}
                            {/* Pincode */}
                            <input className={styles.pinBox} placeholder="987654" />
                            {/* </div> */}
                            <div className={styles.buttonBox}>
                                <Button className={styles.Button}>Save</Button>
                                <Button className={styles.Button}>Back</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}