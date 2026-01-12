import styles from "./SignUp.module.css"
import React from 'react'

export const SignUp = () => {
  return (
    <>
    <div className= {styles.outerDiv}>  
        <div className={styles.container}>
             <h2 className={styles.h2}>Signup</h2>
             <input className={styles.input} type="name" label = "name" placeholder="Enter your name" />
             <input className={styles.input} type="email" label = "email" placeholder="Enter your email" />
             <input className={styles.input} type="password" label = "password" placeholder="Enter your password" />
             <div className={styles.btnWrapper}>
             <button className={styles.button}>Signup</button>
             </div>
        </div>
    </div>
    </>
  )
}
