import classes from './NavBar.module.css'
import CartWidget from "../CartWidget/CartWidget"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <nav className={classes.NavBar}>
            <img className={classes.imgheader} src="../src/img/marca.png" onClick={() =>navigate('/')}/>
            <section>
                <button className={classes.button} onClick={() =>navigate('/category/Linea%20Susan')}> Linea Susan </button>
                <button className={classes.button} onClick={() =>navigate('/category/Linea%20Angie')}> Linea Angie </button>
                <button className={classes.button} onClick={() =>navigate('/category/Linea%20Irene')}> Linea Irene </button>
            </section>
            <CartWidget/>
        </nav>
    )
}
export default Navbar