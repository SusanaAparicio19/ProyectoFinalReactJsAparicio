import classes from './Cart.module.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'


const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>Aun No Has Agregado Productos Al Carrito!!</h1>
                <Link to='/' className={classes.Option}>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h4>Total a pagar : ${total}</h4>
            <button onClick={() => clearCart()} className={classes.vaciar}>Vaciar El Carro</button>
            <Link to='/checkout' className={classes.Option}>Checkout</Link>
        </div>
    )
}

export default Cart