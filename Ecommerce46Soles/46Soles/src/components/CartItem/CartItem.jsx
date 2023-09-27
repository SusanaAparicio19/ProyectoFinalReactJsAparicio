import classes from './CartItem.module.css'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const CartItem = ({ id, objeto, nombre, imagen, precio, quantity}) => {

  const { removeItem } = useContext(CartContext);
      
    return (
        <>
        <section>
          <div className={classes.productContent}>
              <img className={classes.cartImg} src={imagen}/>
              <h3>{objeto} "{nombre}"</h3>
              <p className={classes.productPrice}>Precio: ${precio} por u.</p>
              <p className={classes.productQuantity}>Cant. {quantity} </p>
              <button onClick={() => removeItem(id)} className={classes.remove}>Eliminar</button>
          </div>
        </section>
        </>
    )
}
export default CartItem
