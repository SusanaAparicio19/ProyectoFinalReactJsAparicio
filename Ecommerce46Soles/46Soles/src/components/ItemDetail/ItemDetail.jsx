import classes from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const ItemDetail = ({id, category, objeto, nombre, descripcion, imagen, stock, precio}) => {   const [quantityAdded, setQuantityAdded] = useState(0)
    
    const { addItem } = useCart()

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio, imagen, objeto,
        }

        addItem(item, quantity)
    }
    
	return (
		<>
            <section style={{backgroundColor: "#F1E0F9", borderRadius:"10"}}>
                <div className={classes.card}>
                    <img className={classes.cardImgTop} src={imagen} alt={nombre}/>
                    <div className={classes.cardBody}>
                        <h4 className={classes.cardTitle}>{objeto} {nombre}</h4>
                        <h6 className={classes.cardTitle2}>{category}</h6>
                        <p className={classes.cardDescripcion}> {descripcion}</p>
                        <p className={classes.cardText}>$ {precio}</p>
                        <h6 className={classes.cardText2}>stock: {stock}</h6>
                        <footer className='cardMasMenos'>
                            {
                                quantityAdded > 0 ? (
                                    <Link to='/cart' className={classes.option}>Terminar Compra</Link>
                                ) : (
                                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                                )
                            }
                        </footer>
                    </div>
                </div>
            </section>
            
        </>
    )
}    

export default ItemDetail