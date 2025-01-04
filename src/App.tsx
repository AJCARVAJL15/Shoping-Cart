import { Products } from "./components/product"
import { Filters } from "./components/filters"
import { createContext, useContext, useEffect, useState } from "react"
import { FiltersContext } from "./context/filters"


function useFilter(){
  // const [filters,setFilters]=useState({
  //   category:'all',
  //   minPrice:0
  // })

  const {filters,setFilters}=useContext(FiltersContext)


  const filterProducts =(products)=>{
    return products.filter(product=>
      product.price>= filters.minPrice &&
      (
        filters.category=='all' || 
        product.category == filters.category
      )
    )
  }



  return {filterProducts,setFilters}
}


function App() {

  const [data,setData]=useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products)=>{
        setData(products)
      })
  }, []);

  const {filterProducts,setFilters}=useFilter()
  const filteredProducts=filterProducts(data)

            
  return (
    <>
    <div>
    <h1>Shopping Cart</h1>
    <Filters 
    onChange={setFilters}
    />
  <Products products={filteredProducts}/>
  </div>
    </>
  )
}

export default App
