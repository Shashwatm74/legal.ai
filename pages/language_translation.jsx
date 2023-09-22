import React, { useState, useEffect } from "react";
import styles from "@/styles/components/services/langtrans.module.scss";
import Head from "next/head";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
// import translation from "@/pages/translation.js";
// import countries from "@/pages/countries.js";


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
    const [fromText, setFromText] = useState("");
    const [translatedText, setTranslatedText] = useState("");
    const [selectedFromLanguage, setSelectedFromLanguage] = useState("hi-IN");
    const [selectedToLanguage, setSelectedToLanguage] = useState("en-GB");

    useEffect(() => {
        // Populate select options when the component mounts
        const selectTags = document.querySelectorAll("select");
        selectTags.forEach((tag, id) => {
            for (let country_code in countries) {
                let selected =
                    id === 1
                        ? country_code === selectedFromLanguage
                            ? "selected"
                            : ""
                        : country_code === selectedToLanguage
                            ? "selected"
                            : "";
                let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
                tag.insertAdjacentHTML("beforeend", option);
            }
        });
    }, []);

    const handleTranslate = () => {
        let text = fromText.trim();
        let translateFrom = selectedFromLanguage;
        let translateTo = selectedToLanguage;

        if (!text) return;

        setTranslatedText("Translating...");

        let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;

        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                if (data.responseData) {
                    setTranslatedText(data.responseData.translatedText);
                } else {
                    setTranslatedText("Translation not available");
                }
            });
    };

    return (
        <>
            <Head>
                <title>Language Translation</title>
                <meta name="description" content="Language translation tool" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className={styles.section}>
                <div className={styles.sectionWrapper}>
                    <div className={styles.heading}>Language Translation</div>
                    <textarea
                        className={styles.result_box}
                        placeholder="Translated text here..."
                        value={translatedText}
                        readOnly
                    />
                    <select
                        className={styles.select2}
                        name="toLanguage"
                        value={selectedToLanguage}
                        onChange={(e) => setSelectedToLanguage(e.target.value)}
                    ></select>
                    <button className={styles.submitbtn} onClick={handleTranslate}>
                        TRANSLATE
                    </button>
                    <div className={styles.subheading1}>Original Text</div>
                    <textarea
                        id="input_box"
                        className={styles.input_box}
                        placeholder="Enter your text..."
                        value={fromText}
                        onChange={(e) => setFromText(e.target.value)}
                    />
                    <select
                        className={styles.select1}
                        name="fromLanguage"
                        value={selectedFromLanguage}
                        onChange={(e) => setSelectedFromLanguage(e.target.value)}
                    ></select>
                    <div className={styles.subheading2}>Translated Text</div>
                </div>
            </section>
        </>
    );
}

export default langsimpli;
