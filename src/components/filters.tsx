import { useState } from "react";

export function Filters({onChange}){
 
    const [minPrice,setMinPrice]=useState(0)
    const onChangeFilter=(event)=>{
        setMinPrice(event.target.value)
    onChange(prevFilters => ({
      ...prevFilters, // Mantiene el valor anterior de 'minPrice'
      minPrice:  event.target.value // Nueva categoría que deseas establecer
    }));
  }

  const onChangeCategory=(event)=>{
    onChange(prevFilters => ({
      ...prevFilters, // Mantiene el valor anterior de 'minPrice'
      category:  event.target.value // Nueva categoría que deseas establecer
    }));
  }
    return( 
    <main>
        <div>
        <input type="range" min="0" max="5000" onChange={onChangeFilter} value={minPrice}/>
        <span>{minPrice}</span>
        </div>
        <div>
            <select name="categorys" id="categorys" value={onChange.category} onChange={onChangeCategory}>
            <option value="all">---Selecciona una categoria---</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's clothing</option>
            </select>
            <p>{onChange.category}</p>
        </div>

       
    </main>
)
}