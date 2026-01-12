import React from 'react'
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
    <div className = {styles.outerDiv} >
        <div>
            <h2 className = {styles.h2} >MiniMart</h2>
        </div>
        <div>
            <ul className = {styles.ul}>
                <li><Link className = {styles.a}  to = "/" >Home</Link></li>
                <li><Link className = {styles.a}  to = "/cart">Cart</Link></li>
                <li><Link className = {styles.a}  to = "/login">Login</Link></li>
                <li><Link className = {styles.a}  to = "/signup">Signup</Link></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar