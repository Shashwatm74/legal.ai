import React from "react";
import styles from "@/styles/components/dashboard/administrator/PrivacyPolicy.module.scss";


export default function PrivacyPolicy() {
    return (
        <>
            <section section data-scroll-section className={styles.privacyPolicy} id="privacyPolicy">
                <div className={styles.sectionWrapper}>
                    <div className={styles.privacyCard}>
                        <h1> Privacy Policy</h1>

                        At our conference and research website, we understand the importance of protecting your personal information and respecting your privacy. This privacy policy explains how we collect, use, and protect your information, and the ways in which we may change this policy without prior notice.

                        <h3> Collection and Use of Personal Information:</h3>
                        We only collect personal information that is necessary for the purpose of our conference and research website, such as your name, email address, and affiliation. This information is collected when you register to attend our conference, submit a research paper, or contact us with a query. We use this information to provide you with updates about our conference and research activities and to communicate with you about your paper submission.

                        <h3>Disclosure of Personal Information:</h3>
                        We do not sell or disclose any of your personal information to third parties without your consent, except as required by law or to protect our rights. We may, however, disclose your personal information to our trusted service providers, such as our web hosting provider or email service provider, who are obligated to keep your information confidential and secure.

                        <h3>Data Security:</h3>
                        We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. This includes using secure servers, firewalls, and encryption technologies to safeguard your data.

                        <h3>Research Paper Submission:</h3>
                        Your research paper will be reviewed by our committee members for acceptance at the conference. If your paper is not accepted, we will delete it from our records. If your paper is accepted, it will be shared with conference attendees in accordance with the conference program. We do not share your research paper with anyone outside of our conference or research activities.

                        <h3>Changes to the Privacy Policy:</h3>
                        We may change this privacy policy from time to time without prior notice. Any changes will be posted on our website. By using our website, you agree to the terms of this privacy policy.

                        <h3>Contact Us:</h3>
                        If you have any questions or concerns about our privacy policy, please contact us at  confenrence@gmail.com


                    </div>
                </div>
            </section>
        </>
    )
}