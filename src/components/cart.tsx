import { useId } from "react";
import { CartIcon,ClearCartIcon,AddToCartIcon } from "./icons";
import './cart.css'
export function Cart(){
const cartId=useId()
    return(
        <>
        <label className="cart-button" htmlFor={cartId}>
            <CartIcon/>
        </label>

        <input type="checkbox" id={cartId} hidden />

        <aside className="cart">
            <ul>
                <li>
                    <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="chaqueta" />
                    <div>
                    <strong> Chaqueta - $1000</strong>
                    </div>
                    <footer>
                        <small>
                            Qty: 1
                        </small>
                        <button>+</button>
                    </footer>
                </li>
            </ul>
            <button>
                <ClearCartIcon/>
            </button>
        </aside>
        </>
    )
}