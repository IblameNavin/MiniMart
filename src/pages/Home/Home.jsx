import React, { useEffect } from 'react'
import { ProductCards } from '../../data/products'
import styles from "./Home.module.css"
import { useNavigate } from 'react-router-dom'

export const Home = () => {

   const navigate = useNavigate()

   // Refreshing home wont erase the data
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if(currentUser) return navigate("/")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 
  
  return (
    <>
    
    <div className= {styles.outerDiv} >
            {ProductCards.map((product)=>
        <div className= {styles.card} key = {product.id}>  
             <>
            <div className= {styles.imgWrapper}>
                <img src= {product.image} alt="" />
            </div>
            <div className= {styles.categoryWrapper}>
                <span className= {styles.category}>{product.category}</span>
            </div>
            <div className= {styles.productPrice}>
               <span className={styles.name}>{product.name}</span>
            <span className = {styles.price}>{product.price}</span>
            </div>
             </>
        </div>
            )}
    </div>
    </>
  )
}
