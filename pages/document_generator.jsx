import React from "react";
import styles from "@/styles/components/services/docgen.module.scss";
import Head from "next/head";
import logo from "@/assets/images/logo.png";
import Image from "next/image";


function docgen() {
    return (
        <>
            <Head>
                <title>Legal.ai</title>
                <meta name="description" content="AI based legal assistant" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className={styles.section}>

                <div className={styles.sectionWrapper}>
                    <div className={styles.heading} >
                        Document Generation
                    </div>

                    <div className={styles.subheading1} >
                        Original Text
                    </div>
                    <textarea
                        className={styles.input_box}
                        placeholder="Enter your text..."
                        required
                        type="text"
                    />
                    <div className={styles.subheading2} >
                        Generated Document
                    </div>

                    <div className={styles.result_box}>
                        See your generated document here...
                    </div>


                    <button className={styles.submitbtn}>GENERATE</button>
                </div>

            </section>
        </>
    );
}

export default docgen;
