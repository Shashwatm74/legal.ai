'use client';
import React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/nav.module.scss';
import navtoggle from '@/components/navtoggle.js';
import Image from 'next/image';
import menuImage from '@/assets/images/menu.png';
import pfp from '@/assets/images/defaultPfp.png';


const Nav = () => {
    return (
        <>

            <header className={styles.header} id="header">
                <div className={styles.secondaryNavContainer}>


                    <Link className={styles.logoLink} href="/" replace >
                        <p className={styles.logo} id="navLogo">Legal.ai</p>
                    </Link>


                    <nav className={styles.nav2} id='SecondaryNav' data-visible="false">
                        <ul >
                            {/* this part of the navbar activates before the user logs in the website  */}
                            <Link className={styles.a} href="/signup" replace onClick={() => { document.getElementById("SecondaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle2")?.setAttribute("data-visible", "false"); }} >
                                <li id="listele1" className={styles.listElement}>
                                    Sign up
                                </li>
                            </Link>
                            <Link className={styles.a} href="/login" replace onClick={() => { document.getElementById("SecondaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle2")?.setAttribute("data-visible", "false"); }} >
                                <li id="listele2" className={styles.listElement}>
                                    Login
                                </li>
                            </Link>
                            {/* this part of the navbar activates when the user logs in the website  */}
                            <Link className={styles.a} href="/document_generator" replace login="false" onClick={() => { document.getElementById("SecondaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle2")?.setAttribute("data-visible", "false"); }} >
                                <li id="listele3" className={styles.listElementonlogin}>
                                    Generate
                                </li>
                            </Link>
                            <Link className={styles.a} href="/language_simplification" replace login="false" onClick={() => { document.getElementById("SecondaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle2")?.setAttribute("data-visible", "false"); }} >
                                <li id="listele4" className={styles.listElementonlogin}>
                                    Simplify
                                </li>
                            </Link>
                            <Link className={styles.a} href="/language_translation" replace login="false" onClick={() => { document.getElementById("SecondaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle2")?.setAttribute("data-visible", "false"); }} >
                                <li id="listele5" className={styles.listElementonlogin}>
                                    Translate
                                </li>
                            </Link>
                            <Link className={styles.a} href="/legal_advice" replace login="false" onClick={() => { document.getElementById("SecondaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle2")?.setAttribute("data-visible", "false"); }} >
                                <li id="listele6" className={styles.listElementonlogin}>
                                    Advice
                                </li>
                            </Link>
                        </ul>

                    </nav>
                </div>

                {/* <nav className={styles.nav} id='PrimaryNav' data-visible="false">
                    <ul>
                        <Link className={styles.a} href="/login" replace onClick={() => { document.getElementById("PrimaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle").setAttribute("data-visible", "false"); }}>
                            <li className={styles.listElement}>
                                Login
                            </li>
                        </Link>
                        <Link className={styles.a} href="/dashboard/administrator" replace onClick={() => { document.getElementById("PrimaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle").setAttribute("data-visible", "false"); }}>
                            <li className={styles.listElement}>
                                Dash
                            </li>
                        </Link>

                    </ul>
                </nav> */}
                {/* <button className={styles.navToggle2} id='NavToggle2' data-visible="false">
                    <div className={styles.menu}>
                        <Image id='menu' alt="menu" className={styles.menuImage} src={menuImage} />
                    </div>
                </button> */}

                {/* <button className={styles.navToggle} id='NavToggle' data-visible="false" login='false'>
                    <div className={styles.profilePic}>
                        <Image id='pfp' alt="profile picture" className={styles.pfp} src={pfp} />
                    </div>
                </button> */}


            </header >
            <script src={navtoggle} defer></script>
        </>
    )
}

export default Nav