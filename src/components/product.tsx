import { useCart } from "../hooks/useCart";
import { AddToCartIcon } from "./icons";
import './product.css'

export function Products({products}){
    const {addCart}=useCart()
    
    return(
        <main className="products">
            <ul>
                {
                    products.map(product=>(
                        <li key={product.id}>
                            <img 
                            src={product.image}
                            alt={product.title}/>
                            <div>
                                <strong>{product.title}</strong>
                                
                            </div>

                            <div>
                            <strong>$ {product.price}</strong>
                            </div>

                            <div>
                                <button onClick={()=> addCart(product)}>
                                    <AddToCartIcon/>
                                </button>
                            </div>
                             </li>
                    ))
                }
                
            </ul>
        </main>
    )
}