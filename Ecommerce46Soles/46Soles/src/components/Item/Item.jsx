import classes from './Item.module.css'
import { useNavigate } from 'react-router-dom'

const Item = ({ id, category, objeto, nombre, imagen, precio}) => {
    const navigate = useNavigate()
    
	return (
		<section style={{display:"grid", width:"100", heigth:"100", spaceBeetwen:"100", backgroundColor: "#F1E0F9", borderRadius:"10"}}>
            <div className={classes.card}>
                <img className={classes.cardImgTop} src={imagen} alt={nombre}/>
                <div className={classes.cardBody}>
                    <h4 className={classes.cardTitle}>{objeto} {nombre}</h4>
                    <h6 className={classes.cardTitle2}>{category}</h6>
                    <p className={classes.cardText}>$ {precio}</p>
                    <button className={classes.buttonDetalle} onClick={() => navigate(`/item/${id}`)}> Ver detalle </button>
                </div>
            </div>
        </section>
    )
}    

export default Item

