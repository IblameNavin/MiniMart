import { useNavigate } from "react-router-dom"
import styles from "./Login.module.css"
import {useState} from 'react'

export const Login = ({setUser}) => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()

    const users = JSON.parse(localStorage.getItem("users")) || []
    const user = users.find((e)=>
     e.email === email
    )

    if(!user){
      return alert("Email doesnt exist")
    }

    if(user.password !== password){
      return alert("Password did not match")
    }

    localStorage.setItem("currentUser", JSON.stringify(user))
    setUser(user)
    navigate("/")
  }
  return (
    <>
    <div className= {styles.outerDiv}>  
        {/* <div className={styles.container}> */}
          <form onSubmit={handleSubmit} className={styles.container}>
             <h2 className={styles.h2}>Login</h2>
             <label htmlFor="email" name = "email">Email</label>
             <input className={styles.input} type="email" label = "email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
             <label htmlFor="password" name = "password">Password</label>
             <input className={styles.input} type="password" label = "password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} />
             <div className={styles.btnWrapper}>
             <button className={styles.button}>Login</button>
             </div>
          </form>
        </div>
    {/* </div> */}
    </>
  )
}
