import React from "react";
import styles from "@/styles/components/login_and_signup_page/Signup.module.scss";
import Head from "next/head";
// const auth = useAuth()
//<button onClick = {(e) => auth.signinwithGoogle()}>SingIN</button>
function SignUp() {
  return (
    <>
      <Head>
        <title>Sign Up-VIT Conference </title>
        <meta name="description" content="Conference on Linear Algebra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.login}>
        <div className={styles.login_container}>
          <div className={styles.signup_card_wrapper}>
            <div>
              <span className={styles.span_heading}>Sign Up</span>
            </div>
            <div>Name</div>
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
            <div>Email</div>
            <input
              className={styles.input_box}
              placeholder="Enter email..."
              required
              type="email"
            />
            <div>User Name</div>
            <input
              className={styles.input_box}
              placeholder="Enter user name..."
              required
            />
            <div>Password</div>
            <input
              className={styles.input_box}
              placeholder="Enter password.."
              required
            />
            <button className={styles.green_button}>Submit</button>
            <div className={styles.signup_text}>
              Already have an account?
              <span className={styles.signup_link}>
                {" "}
                <a href="/login/"> Login</a>
              </span>
            </div>
            <div className={styles.additional_options}>
              Sign up with<button>google</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
