import React, { useState } from "react";
import styles from "@/styles/components/services/LangSimpli.module.scss";
import Head from "next/head";
import logo from "@/assets/images/logo.png";
import Image from "next/image";


function langsimpli() {
    const [inputText, setInputText] = useState("");
    const [simplifiedText, setSimplifiedText] = useState("");

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };
    const summarizeText = async () => {
        try {
            const response = await fetch("/summarize", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `input_text=${encodeURIComponent(inputText)}`,
            });


            if (response.ok) {
                const data = await response.json();
                setSimplifiedText(data.Summary);
            } else {
                console.error("Failed to summarize text");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <>
            <Head>
                <title>Legal.ai</title>
                <meta name="description" content="AI based legal assistant" />
                <link rel="icon" href="/favicon.ico" />
            </Head>



            <section className={styles.section}>
                <div className={styles.sectionWrapper}>
                    <div className={styles.heading}>Language Simplification</div>
                    <div className={styles.result_box}>
                        See your simplified text here...
                    </div>
                    <button className={styles.submitbtn}>SUBMIT</button>

                    <div className={styles.subheading1}>Original Text</div>
                    <input
                        className={styles.input_box}
                        placeholder="Enter your text..."
                        required
                        type="text"
                        value={inputText}
                        onChange={handleInputChange}
                    />
                    <div className={styles.subheading2}>Simplified Text</div>
                    <div className={styles.result_box}>{simplifiedText}</div>
                </div>
            </section>
        </>
    );
}

export default langsimpli;
