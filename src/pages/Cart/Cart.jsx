import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";

export const Cart = ({ user }) => {
  // Grab cart from localStorage based on user email
  const cartKey = `cart_${user.email}`;
  const storedCart = JSON.parse(localStorage.getItem(cartKey)) || [];

  // Set state so UI can react to changes
  const [cartItems, setCartItems] = useState(storedCart);

  // Optional: keep cartItems in sync if localStorage changes elsewhere
  useEffect(() => {
    const updatedCart = JSON.parse(localStorage.getItem(cartKey)) || [];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCartItems(updatedCart);
  }, [cartKey]);

  // Placeholder JSX — we’ll fill this later with mapping over cartItems
  return (
    <div className={styles.outerDiv}>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div className={styles.card} key={item.id}>
            <div className={styles.imgWrapper}>
              <img src={item.image} alt={item.name} />
            </div>
            <div className={styles.categoryWrapper}>
              <span className={styles.category}>{item.category}</span>
            </div>
            <div className={styles.productPrice}>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.price}>{item.price}$</span>
            </div>
            <div className={styles.cartWrapper}>
              <span>Quantity: {item.quantity}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
