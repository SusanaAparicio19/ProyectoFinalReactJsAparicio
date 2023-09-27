import classes from './ContactForm.module.css'
import { useState } from "react"


const ContactForm = ({ createOrder }) => {

    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')

    const [validate, setValidate] = useState(false)

    return (
        <>
        <h2 className="animate__animated animate__fadeInTopLeft">Checkout</h2>
			<div className={classes.contenedorContacto}>
                <form className="animate__animated animate__fadeInTopLeft form" onSubmit={() => createOrder({ nombre, telefono, email, validate})}>
  					<label>Nombre:</label>
					<input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Escribe Tu Nombre y Apellido" maxLength="50" size="60"/>
					<label>Telefono :</label>
					<input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Escribe Tu Telefono" maxLength="50" size="60"/>
					<label>Email :</label>
					<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Escribe Tu Email" maxLength="50" size="60"/>
                    <label>Repite Tu Email :</label>
					<input type="email" onChange={(e) => {setValidate(e.target.value === email);}} placeholder="Escribe Nuevamente Tu Email" maxLength="50" size="60"/>
                    <br/>
				    <button className={classes.buttonForm}>Generar Orden</button>
                </form> 
			</div>
        </>
    )
}

export default ContactForm

