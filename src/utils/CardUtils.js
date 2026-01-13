const addToCart = (product, user) =>{
    if(!user) return

    const cartKey = `cart_${user.email}`
    const cart = JSON.parse(localStorage.getItem(cartKey)) || []

    const cartExists = cart.find((item)=>
     item.id === product.id
    )


    let updatedCart
    if(cartExists){
      updatedCart = cart.map((item)=>
     item.id === product.id ? {...item, quantity : item.quantity + 1 } : item
    )
    }
    else{
        updatedCart = [...cart,{...product, quantity : 1}]
    }
    localStorage.setItem(cartKey, JSON.stringify(updatedCart))
}

// Grab all the carts from localStorage
// Check if the cart id matches with product id
// if matches then increase/decrease its quantity
// If not matches add it to cart with quantity = 1
// Save updatedCart