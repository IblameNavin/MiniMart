import React from 'react'
import { ProductCards } from '../../data/products'
import styles from "./Home.module.css"
import { addToCart } from "../../utils/CardUtils"

export const Home = ({user}) => {



  
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
            <span className = {styles.price}>{product.price}$</span>
            </div>
            <div className={styles.cartWrapper}>
            <button className={styles.cartBtn} onClick={()=>addToCart(product, user)}>Add to Cart</button>
            </div>
             </>
        </div>
            )}
    </div>
    </>
  )
}
