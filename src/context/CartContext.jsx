import { useState, createContext, useContext } from 'react'

const CartContext = createContext({
    cart: [],
    addItem: () => {},
    removeItem: () => {},
    isInCart: () => {},
    clearCart: () => {},
    totalQuantity: 0,
    total: 0
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)
  
    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)) {
        setCart(prev => [...prev, productToAdd])
      } else {
        console.log('el producto ya esta agregado')
      }
    }
  
    const isInCart = (id) => {
      return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }

    const totalQuantity = getTotalQuantity()

    const clearCart = () => {
        setCart([])
    }

    const getTotal = () => {
        let total = 0

        cart.forEach(prod => {
            total += prod.price * prod.quantity
        })

        return total
    }

    const total = getTotal()

    return (
        <CartContext.Provider value={{ cart, addItem, clearCart, removeItem, isInCart, totalQuantity, total }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}