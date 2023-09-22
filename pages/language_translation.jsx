import React, { useState } from "react";
import styles from "@/styles/components/services/langtrans.module.scss";
import Head from "next/head";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
// import translation from "@/pages/translation.js";
// import countries from "@/pages/countries.js";

function langsimpli() {

    return (
        <>
            <Head>
                <title>Legal.ai</title>
                <meta name="description" content="AI based legal assistant" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className={styles.section}>
                <div className={styles.sectionWrapper}>
                    <div className={styles.heading}>Language Translation</div>
                    <textarea
                        className={styles.result_box}
                        placeholder="Translated text here..."
                        required
                        type="text"
                        readOnly
                        disabled
                    // value={inputText}
                    // onChange={handleInputChange}
                    />
                    <select className={styles.select2} name="" id=""></select>
                    <button className={styles.submitbtn}>TRANSLATE</button>
                    <div className={styles.subheading1}>Original Text</div>
                    <textarea
                        id="input_box"
                        className={styles.input_box}
                        placeholder="Enter your text..."
                        required
                        type="text"
                    // value={inputText}
                    // onChange={handleInputChange}
                    />
                    <select className={styles.select1} name="" id=""></select>
                    <div className={styles.subheading2}>Translated Text</div>
                    {/* <div className={styles.result_box}>{simplifiedText}</div> */}
                </div>
            </section>
            {/* <script src={translation} defer></script>
            <script src={countries} defer></script> */}
        </>
    );
}


export default langsimpli;
