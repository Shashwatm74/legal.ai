/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";
import styles from "@/styles/components/aboutpage/About.module.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import aboutimg1 from "@/assets/images/aboutimg1.jpeg";
import aboutimg2 from "@/assets/images/aboutimg2.jpeg";
import aboutimg3 from "@/assets/images/aboutimg3.jpeg";
import aboutimg4 from "@/assets/images/aboutimg4.jpeg";
gsap.registerPlugin(ScrollTrigger);

function About() {
  // const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);


  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      {
        autoAlpha: 0,
        y: 10,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        ease: "power2.inOut",
        y: 0,
        scrollTrigger: {
          // markers: true, //can be used to debug
          trigger: headingRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      contRef.current,
      {
        autoAlpha: 0,
        y: 10,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        ease: "power2.inOut",
        y: 0,
        scrollTrigger: {
          // markers: true, //can be used to debug
          trigger: contRef.current,
          start: "top center+=95",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      card1Ref.current,
      {
        autoAlpha: 0,
        y: 10,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        delay: 0,
        ease: "power2.inOut",
        y: 0,
        scrollTrigger: {
          // markers: true, //can be used to debug
          trigger: card1Ref.current,
          start: "top center+=90",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      card2Ref.current,
      {
        autoAlpha: 0,
        y: 10,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        delay: 0,
        ease: "power2.inOut",
        y: 0,
        scrollTrigger: {
          // markers: true, //can be used to debug
          trigger: card2Ref.current,
          start: "top center+=90",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      card3Ref.current,
      {
        autoAlpha: 0,
        y: 10,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        delay: 0,
        ease: "power2.inOut",
        y: 0,
        scrollTrigger: {
          // markers: true, //can be used to debug
          trigger: card3Ref.current,
          start: "top center+=90",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      card4Ref.current,
      {
        autoAlpha: 0,
        y: 10,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        delay: 0,
        ease: "power2.inOut",
        y: 0,
        scrollTrigger: {
          // markers: true, //can be used to debug
          trigger: card4Ref.current,
          start: "top center+=90",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      card5Ref.current,
      {
        autoAlpha: 0,
        y: 10,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        delay: 0,
        ease: "power2.inOut",
        y: 0,
        scrollTrigger: {
          // markers: true, //can be used to debug
          trigger: card5Ref.current,
          start: "top center+=90",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);



  return (
    <>
      <section data-scroll-section className={styles.about} id="about">
        <div className={styles.sectionWrapper}>
          <div ref={headingRef} className={styles.heading}>

            What do we do?

          </div>
          <div ref={contRef} className={styles.content}>

            Legal documentation can be a complicated and time-consuming process, especially for individuals and small businesses who may not have access to legal resources. In addition, the language and jargon used in legal documents can be difficult for non-lawyers to understand, which can lead to errors and misunderstandings.

            We provide AI-powered solution that can simplify legal documentation for individuals and small businesses in India, by automatically drafting legal documents in plain language and using easy-to-understand terms.

          </div>
          {/* /////////////////////////////////////////// */}
          <Link ref={card1Ref} className={styles.linkcard1} href="/document_generator" replace>
            <div className={styles.card1} style={{ opacity: 1, visibility: "visible" }}>
              Document Generator
            </div>
            <Image className={styles.aboutimg} src={aboutimg1} alt="aboutimg1" height={1000} />
          </Link>

          {/* /////////////////////////////////////////// */}
          <Link ref={card2Ref} className={styles.linkcard2} href="/language_simplification" replace>
            <div className={styles.card2} style={{ opacity: 1, visibility: "visible" }}>
              Language Simplification
            </div>
            <Image className={styles.aboutimg} src={aboutimg2} alt="aboutimg1" height={1000} />
          </Link>
          {/* /////////////////////////////////////////// */}
          <Link ref={card3Ref} className={styles.linkcard3} href="/language_translation" replace>
            <div className={styles.card3} style={{ opacity: 1, visibility: "visible" }}>
              Language Translation
            </div>
            <Image className={styles.aboutimg} src={aboutimg3} alt="aboutimg1" height={1000} />
          </Link>

          {/* /////////////////////////////////////////// */}
          <Link ref={card4Ref} className={styles.linkcard4} href="/legal_advice" replace>
            <div className={styles.card4} style={{ opacity: 1, visibility: "visible" }}>
              Legal Advice
            </div>
            <Image className={styles.aboutimg} src={aboutimg4} alt="aboutimg1" height={1000} />
          </Link>
          {/* /////////////////////////////////////////// */}

          {/* <Link className={styles.card5} href="/document_review" replace>
            <div ref={card5Ref} className={styles.card5}>
              Document Review
            </div>
          </Link>
          /////////////////////////////////////////// */}

        </div>

      </section>
    </>
  );
}

export default About;
