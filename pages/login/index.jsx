import React from "react";
import styles from "@/styles/components/login_and_signup_page/Signup.module.scss";
import Head from "next/head";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
// const auth = useAuth()
//<button onClick = {(e) => auth.signinwithGoogle()}>SingIN</button>
function SignUp() {
    return (
        <>
            <Head>
                <title>Legal.ai</title>
                <meta name="description" content="AI based legal assistant" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className={styles.signup}>
                <div className={styles.signup_container}>
                    <div className={styles.signup_card_wrapper}>
                        <div>
                            <span className={styles.span_heading}>Login</span>
                        </div>
                        {/* <div className={styles.signup_ele_head}>Name</div> */}
                        {/* <div className={styles.nameFeild}>

              <input
                className={styles.input_box}
                placeholder="Enter first name..."
                required
                type="text"
              />
              <input
                className={styles.input_box}
                placeholder="Enter last name..."
                required
                type="text"
              />
            </div> */}
                        <div className={styles.signup_ele_head}>Email</div>
                        <input
                            className={styles.input_box}
                            placeholder="Enter email..."
                            required
                            type="email"
                        />
                        {/* <div className={styles.signup_ele_head}>User Name</div>
            <input
              className={styles.input_box}
              placeholder="Enter user name..."
              required
            /> */}
                        <div className={styles.signup_ele_head}>Password</div>
                        <input
                            className={styles.input_box}
                            placeholder="Enter password.."
                            required
                        />
                        <button className={styles.submit_button}>Submit</button>
                        <div className={styles.signup_text}>
                            Don't have an account?
                            <span className={styles.signup_link}>
                                <a href="/signup/"> Sign up</a>
                            </span>
                        </div>
                        <div className={styles.additional_options}>
                            Sign up with  <button className={styles.google_button}>google</button>
                        </div>
                    </div>
                    <div className={styles.signupImage}>
                        <Image src={logo} alt="logo" layout="responsive" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignUp;
