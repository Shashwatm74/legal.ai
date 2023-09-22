/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";
import styles from "@/styles/components/aboutpage/About.module.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import Link from "next/link";
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
          <Link className={styles.card1} href="/document_generator" replace>
            <div ref={card1Ref} className={styles.card1}>
              Document Generator
            </div>
          </Link>

          {/* /////////////////////////////////////////// */}
          <Link className={styles.card2} href="/language_simplification" replace>
            <div ref={card2Ref} className={styles.card2}>
              Language Simplification
            </div>
          </Link>
          {/* /////////////////////////////////////////// */}
          <Link className={styles.card3} href="/document_customization" replace>
            <div ref={card3Ref} className={styles.card3}>
              Language Translation
            </div>
          </Link>

          {/* /////////////////////////////////////////// */}
          <Link className={styles.card4} href="/legal_advice" replace>
            <div ref={card4Ref} className={styles.card4}>
              Legal Advice
            </div>
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
