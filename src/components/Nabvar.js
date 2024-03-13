import React from 'react'

import styles from './styles.module.scss'

const Nabvar = () => {
    return (
        <>
            <nav className={styles.navbar}>
                <a className={styles.brand} href="/">LOGO</a>

                <div className={styles.menu}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Blogs</li>
                        <li>API</li>
                    </ul>
                </div>

                <div className={styles.sidebtns}>
                    <a href='#' className={styles.signinBtn}>Sign In</a>
                    <button className={styles.signupBtn}>Sign Up</button>
                </div>
            </nav>
        </>
    )
}

export default Nabvar
