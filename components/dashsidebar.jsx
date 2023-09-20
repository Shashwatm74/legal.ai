import React from "react";
import styles from "@/styles/components/DashboardSideBar/dashboardSidebar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
const user = "Admin";


export default function Sidebar() {
    const router = useRouter();
    const currentRoute = router.pathname;
    return (
        <>
            <aside >
                <h1 className={styles.sidebargreeting}>
                    Hello {user}
                </h1>
                <div className={styles.sidebar}>

                    <Link className={`${styles.link} ${((currentRoute === '/dashboard/administrator') || (currentRoute === '/dashboard/profile')) ? styles.active : styles.nonActive}`} href="/dashboard/administrator" replace>
                        <script defer src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                        <lord-icon
                            src="https://cdn.lordicon.com/osuxyevn.json"
                            trigger="hover"
                            colors="primary:#121331"
                            state="hover-3">
                            <div className={styles.icon}>
                                Home
                            </div >
                        </lord-icon>

                    </Link>
                    <Link className={`${styles.link} ${currentRoute === '/dashboard/administrator/announcements' ? styles.active : styles.nonActive}`} href="/dashboard/administrator/announcements/">
                        <script defer src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                        <lord-icon
                            src="https://cdn.lordicon.com/psnhyobz.json"
                            trigger="hover"
                            colors="primary:#121331"
                        // style={{ height: '5px', width: '5px', margin: 0 }}
                        >

                            <div className={styles.icon}>
                                Announcements
                            </div>
                        </lord-icon>
                    </Link>
                    <Link className={`${styles.link} ${currentRoute === '/dashboard/administrator/submissions' ? styles.active : styles.nonActive}`} href="/dashboard/administrator/submissions/">
                        <script defer src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                        <lord-icon
                            src="https://cdn.lordicon.com/iiixgoqp.json"
                            trigger="hover"
                            colors="primary:#121331"
                        >

                            <div className={styles.icon}>
                                Submissions
                            </div>
                        </lord-icon>
                    </Link>
                    <Link className={`${styles.link} ${currentRoute === '/dashboard/administrator/results' ? styles.active : styles.nonActive}`} href="/dashboard/administrator/results/">
                        <script defer src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                        <lord-icon
                            src="https://cdn.lordicon.com/vufjamqa.json"
                            trigger="hover"
                            colors="primary:#121331"
                        >

                            <div className={styles.icon}>
                                Results
                            </div>
                        </lord-icon>
                    </Link>
                    <Link className={`${styles.link} ${currentRoute === '/dashboard/administrator/privacyPolicy' ? styles.active : styles.nonActive}`} href="/dashboard/administrator/privacyPolicy/">
                        <script defer src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                        <lord-icon
                            src="https://cdn.lordicon.com/dnmvmpfk.json"
                            trigger="hover"
                            colors="primary:#121331"
                        >

                            <div className={styles.icon}>
                                Privacy Policy
                            </div>
                        </lord-icon>
                    </Link>
                    {/* <Link className={`${styles.link} ${currentRoute === '/dashboard/profile' ? styles.active : styles.nonActive}`} href="/dashboard/profile">Profile</Link> */}
                </div>
            </aside >

        </>
    )
}