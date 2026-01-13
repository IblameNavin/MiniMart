import React from 'react'
import styles from "./Navbar.module.css"
import { Link, useNavigate } from "react-router-dom"


const Navbar = ({user, setUser}) => {

    const navigate = useNavigate()

    const handleLogout = ()=>{
        localStorage.removeItem("currentUser")
        setUser(null)
        navigate("/login")
    }
  return (
    <>
    <div className = {styles.outerDiv} >
        <div>
            <h2 className = {styles.h2} >MiniMart</h2>
        </div>
        <div>
            <ul className = {styles.ul}>
                {user != null ?
                <>
                <li><Link className = {styles.a}  to = "/" >Home</Link></li>
                <li><Link className = {styles.a}  to = "/cart">Cart</Link></li>
                <h3>Hi, {user.name}</h3>
                <button className={styles.logout} onClick={handleLogout}>Logout</button>
                </>
                :
                <>
                <li><Link className = {styles.a}  to = "/login">Login</Link></li>
                <li><Link className = {styles.a}  to = "/signup">Signup</Link></li>
                </>
            }
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar