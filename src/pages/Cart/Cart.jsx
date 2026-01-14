import {useContext, useState} from 'react'
import styles from "./Cart.module.css"
import { AppContext } from '../../context/AppContext'

export const Cart = ({user}) => {

  if(!user) return null

  const { searchInput } = useContext(AppContext)

  
  const cartkey = `cart_${user.email}`
  const cart = JSON.parse(localStorage.getItem(cartkey))
  
  const [cartItems, setCartItems] = useState(cart || [])
  



  const filteredCartItems = cartItems.filter((item)=>{
    return item.name.toLowerCase().includes(searchInput.toLowerCase())
  })

  const handleRemoveItem = (id)=>{
    const updatedCart = cartItems.filter((item)=> item.id !== id )
    setCartItems(updatedCart)
    localStorage.setItem(cartkey, JSON.stringify(updatedCart))
  }

  const handleAddItem = (id)=>{
    const updatedCart = cartItems.map((item)=>
    item.id === id ? {...item, quantity : item.quantity + 1} : item
    )
    setCartItems(updatedCart)
    localStorage.setItem(cartkey, JSON.stringify(updatedCart))
  }

  const handleDecreaseItem = (id)=>{
    const updatedCart = cartItems.map((item)=>
    item.id === id ? {...item, quantity : item.quantity - 1} : item
    )
    setCartItems(updatedCart)
    localStorage.setItem(cartkey, JSON.stringify(updatedCart))
  }

  return (
    <>
     <div className= {styles.outerDiv} >
                {cartItems.length === 0 ? 
                <p>Cart Is Empty</p>
                :
                filteredCartItems.map((product)=>
                  <div className= {styles.card} key = {product.id}>  
                <div className= {styles.imgWrapper}>
                    <img src= {product.image} alt="" />
                </div>
                <div className= {styles.categoryWrapper}>
                    <span className= {styles.category}>{product.category}</span>
                </div>
                <div className= {styles.productPrice}>
                   <span className={styles.name}>{product.name}</span>
                <span className = {styles.price}>{product.price}$</span>
                <span>Quantity: {product.quantity}</span>
                </div>

                <div className={styles.btnWrapper}>
                  <button className={styles.decrease} onClick={()=>product.quantity > 1 && handleDecreaseItem(product.id)}>-</button>
                  <button className={styles.remove} onClick={()=>handleRemoveItem(product.id)}>x</button>
                  <button className={styles.add} onClick={()=>handleAddItem(product.id)}>+</button>
                </div>
               
            </div>
              )
                }
           
                
        </div>
    </>
  )
}
