import { useCart } from '../../context/CartContext'
import { collection, query, where, documentId, getDocs, writeBatch, addDoc, Timestamp } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import { useState } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import { Link } from 'react-router-dom'
import classes from './Checkout.module.css'
import { Vortex } from 'react-loader-spinner'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const {cart, total, clearCart} = useCart()
    
    const createOrder = async ({ nombre, telefono, email, validate }) => {
        if (!validate){
            alert('Los Mails No Coinciden...');
        }else if (nombre === ('') || telefono === ('') || email === ('')) {
            alert('Todos Los Campos Son Obligatorios...');
        }else{

            try {
                setLoading(true)
                const objOrder = {
                    buyer: {
                        nombre,
                        telefono,
                        email
                    },
                    items: cart,
                    total: total,
                    date: Timestamp.fromDate(new Date())
                }

                const batch = writeBatch(db)
                const outOfStock = []

                const ids = cart.map(prod => prod.id)
                

                const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

                const { docs } = await getDocs(productsRef)

                docs.forEach(doc => {
                    const fields = doc.data()
                    const stockDb = fields.stock

                    const productAddedToCart = cart.find(prod => prod.id === doc.id)
                    const productQuantity = productAddedToCart?.quantity

                    if (stockDb >= productQuantity) {
                        batch.update(doc.ref, { stock: stockDb - productQuantity})

                    }else {
                        outOfStock.push({ id: doc.id, ...fields})
                    }
                })

                if(outOfStock.length === 0) {
                    const orderRef = collection(db, 'orders')

                    const { id: orderId } = await addDoc(orderRef, objOrder)
                    
                    batch.commit()
                    clearCart()
                    setOrderId(orderId)
                
                }else {
                    return <h2>Hay Productos Sin Stock...</h2>
                }
            } catch (error) {
                return <h2>Oops.. Ocurrio Un Error Al Cargar Los Datos: ' + error.message</h2>
            } finally {
                setLoading(false)
            }
        }
    }

    if(loading) {
        return (
            <>
                <h2>Se Esta Generando Tu Orden...</h2>
                <Vortex className="loader"
                    visible={true}
                    height="150"
                    width="150"
                    text-align="center" 
                    ariaLabel="vortex-loading"
                    wrapperStyle={{}}
                    wrapperClass="vortex-wrapper"
                    colors={['purple', 'green','purple', 'green', 'purple','green']}
                />
            </>
        )
    }

    if(orderId) {
        return (
            <>
                <h1>El Codigo De Tu Orden Es: {orderId}</h1>
                <h2>Muchas Gracias Por Tu Compra!!</h2>
                <h3>Nos Comunicaremos A La Brevedad Contigo</h3>
                
                <Link to='/' className={classes.Option}>Productos</Link>
            </>
        )
    }
           
    return (
        <>
          <ContactForm createOrder={createOrder} />
        </>
     )
}

export default Checkout

