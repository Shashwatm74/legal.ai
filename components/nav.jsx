'use client';
import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/components/Nav.module.scss';
// import logo from '@/components/images/logo.png';
import navtoggle from '@/components/navtoggle.js';
import Image from 'next/image';
import pfp from '@/assets/images/defaultPfp.png';
import menuImage from '@/assets/images/menu.png';



const Nav = () => {
    return (
        <>

            <header className={styles.header}>
                <div className={styles.secondaryNavContainer}>


                    <Link className={styles.logoLink} href="/" replace >
                        <p className={styles.logo}>Legal.ai</p>
                    </Link>


                    <nav className={styles.nav2} id='SecondaryNav' data-visible="false">
                        <ul >
                            <a className={styles.a} href="/" replace onClick={() => { document.getElementById("SecondaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle2").setAttribute("data-visible", "false"); }} >
                                <li className={styles.listElement}>
                                    Home
                                </li>
                            </a>
                            <a className={styles.a} href="/#about" replace onClick={() => { document.getElementById("SecondaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle2").setAttribute("data-visible", "false"); }} >
                                <li className={styles.listElement}>
                                    About
                                </li>
                            </a>
                            <a className={styles.a} href="/#speakers" replace onClick={() => { document.getElementById("SecondaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle2").setAttribute("data-visible", "false"); }} >
                                <li className={styles.listElement}>
                                    Speakers
                                </li>
                            </a>
                            <a className={styles.a} href="/#schedule" replace onClick={() => { document.getElementById("SecondaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle2").setAttribute("data-visible", "false"); }} >
                                <li className={styles.listElement}>
                                    Schedule
                                </li>
                            </a>
                            <Link className={styles.a} href="/home/registrations" replace onClick={() => { document.getElementById("SecondaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle2").setAttribute("data-visible", "false"); }} >
                                <li className={styles.listElement}>
                                    Registration
                                </li>
                            </Link>
                            <a className={styles.a} href="/#contact" replace onClick={() => { document.getElementById("SecondaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle2").setAttribute("data-visible", "false"); }} >
                                <li className={styles.listElement}>
                                    Contact
                                </li>
                            </a>
                        </ul>

                    </nav>
                </div>

                <nav className={styles.nav} id='PrimaryNav' data-visible="false">
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
                </nav>
                <button className={styles.navToggle2} id='NavToggle2' data-visible="false">
                    <div className={styles.menu}>
                        <Image id='menu' alt="menu" className={styles.menuImage} src={menuImage} />
                    </div>
                </button>

                <button className={styles.navToggle} id='NavToggle' data-visible="false">
                    <div className={styles.profilePic}>
                        <Image id='pfp' alt="profile picture" className={styles.pfp} src={pfp} />
                    </div>
                </button>


            </header >
            <script src={navtoggle} defer></script>
        </>
    )
}

export default Nav