import React from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/userSlice';
import { auth } from '@/firebase';
import Head from 'next/head';
import styles from '@/styles/components/login_and_signup_page/Login.module.scss';

function Login() {
    const dispatch = useDispatch();

    const signInWithGoogle = async () => {
        var provider = new this.auth.GoogleAuthProvider();
        this.auth_.signInWithPopup(provider);
        try {
            const result = await auth().signInWithPopup(provider);
            dispatch(setUser(result.user));
        } catch (error) {
            console.error('Google Sign-In Error:', error);
        }
    };
    const handleSubmit = async event => {
        event.preventDefault();

        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;

        try {
            // Implement your authentication logic here (e.g., send data to a server)
            console.log('Submitting:', username, password);
        } catch (error) {
            console.error('Form Submission Error:', error);
        }
    };
    return (
        <>
            <Head>
                <title>Login-VIT Conference </title>
                <meta name="description" content="Conference on Linear Algebra" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section data-scroll-section className={styles.login}>
                <div className={styles.login_container}>
                    <div className={styles.login_card_wrapper}>
                        <div><span className={styles.span_heading}>Login</span></div>
                        <form onSubmit={handleSubmit}>
                            <div>User Name</div>
                            <input className={styles.input_box} type="text" placeholder='Enter user name...' required />
                            <div>Password</div>
                            <input className={styles.input_box} type="password" placeholder='Enter password..' required />
                            <button className={styles.green_button} type="submit">Submit</button>
                        </form>
                        <div>
                            <button onClick={signInWithGoogle}>Sign in with Google</button>
                        </div>
                        <div className={styles.signup_text}>
                            Don't have an account? <span className={styles.signup_link}><a href='/signup/'>Sign up</a></span>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Login