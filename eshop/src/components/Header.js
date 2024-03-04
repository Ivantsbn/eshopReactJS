import React, {useState} from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import Order from './Order';

export default function Header(props) {
let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
              <li>My profile</li>
              <li>About us</li>
              <li>Contacts</li>
            </ul>
            <FaCartArrowDown onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
            
            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.map(el => (
                  <Order key={el.id} item={el} />
                ))}
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
