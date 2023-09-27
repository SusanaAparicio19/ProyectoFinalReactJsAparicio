import classes from './CartWidget.module.css'
import cart from './assetsCartWidget/cart4.svg'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

function CartWidget() {

    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className={classes.buttonCartWidget} style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
            <img className={classes.imgCart} src={cart} alt='cart-widget' />
            {totalQuantity}

        </Link>
    )
}

export default CartWidget 
        
