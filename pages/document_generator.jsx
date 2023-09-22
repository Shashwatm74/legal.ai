import React, { useState } from "react";
import styles from "@/styles/components/services/LangSimpli.module.scss";
import Head from "next/head";

function docgen() {
  const [inputText, setInputText] = useState("");
  const [simplifiedText, setSimplifiedText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const generateText = async () => {
    try {
      const response = await fetch("http://localhost:5001/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `input_text=${encodeURIComponent(inputText)}`, // Send input text to the Flask app
      });

      if (response.ok) {
        const data = await response.json();
        setSimplifiedText(data.text); // Set the generated text in state
      } else {
        console.error("Failed to generate text");
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
          <div className={styles.heading}>Document Generation</div>

          <div className={styles.subheading1}>Original Text</div>
          <input
            className={styles.input_box}
            placeholder="Enter your text..."
            required
            type="text"
            value={inputText}
            onChange={handleInputChange}
          />
          <div className={styles.subheading2}>Generated Document</div>

          <div className={styles.result_box}>{simplifiedText}</div>

          <button className={styles.submitbtn} onClick={generateText}>
            GENERATE
          </button>
        </div>
      </section>
    </>
  );
}

export default docgen;
