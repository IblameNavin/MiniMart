import styles from "./Login.module.css"
import React from 'react'

export const Login = () => {
  return (
    <>
    <div className= {styles.outerDiv}>  
        <div className={styles.container}>
             <h2 className={styles.h2}>Login</h2>
             <input className={styles.input} type="email" label = "email" placeholder="Enter your email" />
             <input className={styles.input} type="password" label = "password" placeholder="Enter your password" />
             <div className={styles.btnWrapper}>
             <button className={styles.button}>Login</button>
             </div>
        </div>
    </div>
    </>
  )
}
