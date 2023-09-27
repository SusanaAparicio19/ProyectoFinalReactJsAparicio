import classes from './ItemCount.module.css'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className={classes.Counter}>
            <div className={classes.Controls}>
                <button className={classes.ButtonDec} onClick={decrement}>-</button>
                <h4 className={classes.Number}>{quantity}</h4>
                <button className={classes.ButtonInc} onClick={increment}>+</button>
            </div>
            <div>
                <button className={classes.ButtonAgregar} onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito    
                </button>
            </div>
        </div>
    )
}

export default ItemCount