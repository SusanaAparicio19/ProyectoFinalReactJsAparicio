import { useState, useEffect } from 'react'
import ItemList  from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { Vortex } from 'react-loader-spinner'
import { db } from '../../services/firebase/firebaseConfig'
import { getDocs, collection, query, where} from 'firebase/firestore'

const ItemListContainer = ({ greeting }) => {
	const [products, setProducts]  = useState ([])
	const [loading, setLoading] = useState(true)

	const { categoryId } = useParams()

	useEffect(()  => {
		setLoading(true)

		const productsRef = !categoryId
		 ? collection( db ,'products')
		 : query(collection( db ,'products'), where('category', '==', categoryId))

		getDocs(productsRef)
			.then(QuerySnapshot => {
				const productsAdapted = QuerySnapshot.docs.map(doc =>{
					const fields = doc.data()
					return { id: doc.id, ...fields}
				})
				
				setProducts(productsAdapted)
			})
			.catch(error => {
				console.error(error)
			})
			.finally(() => {
				setLoading(false)
			})


	}, [categoryId])

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
		<div>
			<h1>{categoryId ? `Productos de la ${categoryId}`: greeting}</h1>
			<ItemList products={products}/>
		</div>
	)
}

export default ItemListContainer

