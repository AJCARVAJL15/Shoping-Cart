import { createContext,useContext, useState } from "react";

export const CartContext= createContext()

export function CartProvider({children}){
    const [cart,setCart]=useState([])

    const addCart = (product)=>{
        console.log(product)
        const productInCartIndex =cart.findIndex(item => item.id == product.id)
        if(productInCartIndex>=0){
            const newCart=structuredClone(cart)
            newCart[productInCartIndex].quantity+=1
            return setCart(newCart)
        }
        setCart(prevState=>([
            ...prevState,
            {
                ...product,
                quantity:1
            }
        ]))
    }

   

    const clearCart=()=>{
        setCart([])
    }

    return(
        <CartContext.Provider value={{
            addCart,
            clearCart,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )



}