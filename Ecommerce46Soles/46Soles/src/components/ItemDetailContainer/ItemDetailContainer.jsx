import { useState, useEffect } from 'react'
import ItemDetail  from '../ItemDetail/ItemDetail'
import { Vortex } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebase/firebaseConfig'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
	const [product, setProduct]  = useState (null)
	const [loading, setLoading] = useState(true)

	const { itemId } = useParams()

	useEffect(()  => {
		setLoading(true)

		const productRef = doc(db, 'products', itemId)

		getDoc(productRef)
			.then(documentSnapshot => {
				const fields = documentSnapshot.data()
				const productsAdapted = {id: documentSnapshot.id, ...fields}
				setProduct(productsAdapted)
			})
			.catch(error => {
				console.error(error)
			})
			.finally(() => {
				setLoading(false)
			})

	}, [itemId])

	if(loading) {
        return (
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
        )
    }
	
	return (
		<div className= 'ItemDetailContainer'>
			<ItemDetail {...product}/>
		</div>
	)
}

export default ItemDetailContainer