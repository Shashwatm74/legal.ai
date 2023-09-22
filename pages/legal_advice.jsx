import React from "react";
import styles from "@/styles/components/services/LangSimpli.module.scss";
import Head from "next/head";
import logo from "@/assets/images/logo.png";
import Image from "next/image";

function legaladvice() {
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

          <div className={styles.subheading1}>Original Text</div>
          <input
            className={styles.input_box}
            placeholder="Enter your text..."
            required
            type="text"
          />
          <div className={styles.subheading2}>Simplified Text</div>

          <div className={styles.result_box}>
            See your simplified text here...
          </div>
        </div>
      </section>
    </>
  );
}

export default legaladvice;
