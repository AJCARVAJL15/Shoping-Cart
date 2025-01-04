import { Products } from "./components/product"
import { Filters } from "./components/filters"
import { createContext, useContext, useEffect, useState } from "react"
import { FiltersContext } from "./context/filters"
import {useFilters} from '../src/hooks/useFilters'
import { Cart } from "./components/cart"
import { CartProvider } from "./context/cart"
import { useCart } from "./hooks/useCart"


function App() {

  const [data,setData]=useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products)=>{
        setData(products)
      })
  }, []);

  const {filterProducts,setFilters}=useFilters()
  const filteredProducts=filterProducts(data)
 
  

  return (
    <CartProvider>
    <div>
    <h1>Shopping Cart</h1>
    <Cart/>
    <Filters 
   
    />
  <Products products={filteredProducts}/>
  </div>
    </CartProvider>
  )
}

export default App
