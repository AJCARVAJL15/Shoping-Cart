import { useState } from "react";
import { useFilters } from "../hooks/useFilters.ts";

export function Filters(){
 
    const {filters,setFilters}=useFilters()


    const onChangeFilter=(event)=>{
        setFilters(prevFilters => ({
      ...prevFilters, // Mantiene el valor anterior de 'minPrice'
      minPrice:  event.target.value // Nueva categoría que deseas establecer
    }));
  }

  const onChangeCategory=(event)=>{
    setFilters(prevFilters => ({
      ...prevFilters, // Mantiene el valor anterior de 'minPrice'
      category:  event.target.value // Nueva categoría que deseas establecer
    }));
  }
    return( 
    <main>
        <div>
        <input type="range" min="0" max="5000" onChange={onChangeFilter}/>
        <span>{filters.minPrice}</span>
        </div>
        <div>
            <select name="categorys" id="categorys" value={filters.category} onChange={onChangeCategory}>
            <option value="all">---Selecciona una categoria---</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's clothing</option>
            </select>
            <p>{filters.category}</p>
        </div>

       
    </main>
)
}