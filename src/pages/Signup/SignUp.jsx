import { useNavigate } from "react-router-dom"
import styles from "./SignUp.module.css"
import React, { useState } from 'react'

export const SignUp = ({setUser}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

   const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    
    const users = JSON.parse(localStorage.getItem("users")) || []

    const user = users.some((e)=>{
      return e.email === email
    })
    
    if(user){
      return alert("Email already exists")
    }
    
   
    
    const newUser = {name, email, password}
    const updatedUser =[...users, newUser]
    localStorage.setItem("users", JSON.stringify(updatedUser))
    localStorage.setItem("currentUser", JSON.stringify(newUser))
    setUser(newUser)
    navigate("/")
  }
 

  return (
    <>
    <div className= {styles.outerDiv}>  

             <form onSubmit={handleSubmit} className={styles.container}>
             <h2 className={styles.h2}>Signup</h2>
             <label htmlFor="name" name = "name">Name</label>
             <input className={styles.input} type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)} />
                          <label htmlFor="email" className= {styles.nameLabel} name = "email">Email</label>
             <input className={styles.input} type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                          <label htmlFor="password" name = "password">Password</label>
             <input className={styles.input} type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} />
             <div className={styles.btnWrapper}>
             <button className={styles.button}>Signup</button>
             </div>
             </form>
        </div>

    </>
  )
}
