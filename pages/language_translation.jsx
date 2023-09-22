import React, { useState } from "react";
import styles from "@/styles/components/services/langtrans.module.scss";
import Head from "next/head";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
// import translation from "@/pages/translation.js";
// import countries from "@/pages/countries.js";
import { useEffect } from "react";
const countries = {
    "am-ET": "Amharic",
    "ar-SA": "Arabic",
    "be-BY": "Bielarus",
    "bem-ZM": "Bemba",
    "bi-VU": "Bislama",
    "bjs-BB": "Bajan",
    "bn-IN": "Bengali",
    "bo-CN": "Tibetan",
    "br-FR": "Breton",
    "bs-BA": "Bosnian",
    "ca-ES": "Catalan",
    "cop-EG": "Coptic",
    "cs-CZ": "Czech",
    "cy-GB": "Welsh",
    "da-DK": "Danish",
    "dz-BT": "Dzongkha",
    "de-DE": "German",
    "dv-MV": "Maldivian",
    "el-GR": "Greek",
    "en-GB": "English",
    "es-ES": "Spanish",
    "et-EE": "Estonian",
    "eu-ES": "Basque",
    "fa-IR": "Persian",
    "fi-FI": "Finnish",
    "fn-FNG": "Fanagalo",
    "fo-FO": "Faroese",
    "fr-FR": "French",
    "gl-ES": "Galician",
    "gu-IN": "Gujarati",
    "ha-NE": "Hausa",
    "he-IL": "Hebrew",
    "hi-IN": "Hindi",
    "hr-HR": "Croatian",
    "hu-HU": "Hungarian",
    "id-ID": "Indonesian",
    "is-IS": "Icelandic",
    "it-IT": "Italian",
    "ja-JP": "Japanese",
    "kk-KZ": "Kazakh",
    "km-KM": "Khmer",
    "kn-IN": "Kannada",
    "ko-KR": "Korean",
    "ku-TR": "Kurdish",
    "ky-KG": "Kyrgyz",
    "la-VA": "Latin",
    "lo-LA": "Lao",
    "lv-LV": "Latvian",
    "men-SL": "Mende",
    "mg-MG": "Malagasy",
    "mi-NZ": "Maori",
    "ms-MY": "Malay",
    "mt-MT": "Maltese",
    "my-MM": "Burmese",
    "ne-NP": "Nepali",
    "niu-NU": "Niuean",
    "nl-NL": "Dutch",
    "no-NO": "Norwegian",
    "ny-MW": "Nyanja",
    "ur-PK": "Pakistani",
    "pau-PW": "Palauan",
    "pa-IN": "Panjabi",
    "ps-PK": "Pashto",
    "pis-SB": "Pijin",
    "pl-PL": "Polish",
    "pt-PT": "Portuguese",
    "rn-BI": "Kirundi",
    "ro-RO": "Romanian",
    "ru-RU": "Russian",
    "sg-CF": "Sango",
    "si-LK": "Sinhala",
    "sk-SK": "Slovak",
    "sm-WS": "Samoan",
    "sn-ZW": "Shona",
    "so-SO": "Somali",
    "sq-AL": "Albanian",
    "sr-RS": "Serbian",
    "sv-SE": "Swedish",
    "sw-SZ": "Swahili",
    "ta-LK": "Tamil",
    "te-IN": "Telugu",
    "tet-TL": "Tetum",
    "tg-TJ": "Tajik",
    "th-TH": "Thai",
    "ti-TI": "Tigrinya",
    "tk-TM": "Turkmen",
    "tl-PH": "Tagalog",
    "tn-BW": "Tswana",
    "to-TO": "Tongan",
    "tr-TR": "Turkish",
    "uk-UA": "Ukrainian",
    "uz-UZ": "Uzbek",
    "vi-VN": "Vietnamese",
    "wo-SN": "Wolof",
    "xh-ZA": "Xhosa",
    "yi-YD": "Yiddish",
    "zu-ZA": "Zulu"
}

function langsimpli() {
    if (typeof window === 'object') {
        const fromText = document?.querySelector(".input_box"),
            toText = document?.querySelector(".result_box"),
            selectTag = document?.querySelectorAll("select"),
            translateBtn = document?.querySelector(".submitbtn");

        useEffect(() => {
            // Logic to populate the select options here
            const selectTag = document?.querySelectorAll("select");
            selectTag.forEach(tag => {
                console.log(tag);
            });
            selectTag?.forEach((tag, id) => {
                for (let country_code in countries) {
                    let selected = id == 0 ? country_code == "en-GB" ? "selected" : "" : country_code == "hi-IN" ? "selected" : "";
                    let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
                    tag?.insertAdjacentHTML("beforeend", option);
                }
            });
        }, []);
        translateBtn?.addEventListener("click", () => {
            let text = fromText.value.trim(),
                translateFrom = selectTag[1].value,
                translateTo = selectTag[0].value;
            console.log(text);
            if (!text) return;
            toText?.setAttribute("placeholder", "Translating...");
            let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
            fetch(apiUrl).then(res => res.json()).then(data => {
                toText.value = data.responseData.translatedText;
                data.matches.forEach(data => {
                    if (data.id === 0) {
                        toText.value = data.translation;
                    }
                });
                toText?.setAttribute("placeholder", "Translation");
            });
        });
    }

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
            {/* <script src={translation} defer></script> */}
            {/* <script src={countries} defer></script> */}
        </>
    );
}


export default langsimpli;
