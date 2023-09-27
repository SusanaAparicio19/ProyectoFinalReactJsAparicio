const products = [
	{
        id: '1',
        category: "Linea Susan",
        objeto: "Maceta",
        nombre: "Face",
        descripcion: "Macetas con rostros pintados a mano",
        imagen: "../src/img/susanfoto/face.jpg",
        stock: 10,
        cantidad: 1,
        precio: 1000,
    },
    {
        id: '2',
        category: "Linea Susan",
        objeto: "Maceta",
        nombre: "Lady",
        descripcion: "Macetas hecha con forma de cuerpo",
        imagen: "../src/img/susanfoto/lady.jpg",
        stock: 12,
        cantidad: 1,
        precio: 1500,
    },
    {
        id: '3',
        category: "Linea Susan",
        objeto: "Maceta",
        nombre: "Black&White",
        descripcion: "Macetas con diseños abstractos",
        imagen: "../src/img/susanfoto/white&black.jpg",
        stock: 8,
        cantidad: 1,
        precio: 2000,
    },
    {
        id: '4',
        category: "Linea Angie",
        objeto: "Colgante",
        nombre: "Arcoiris",
        descripcion: "Adorno de alambre en forma de Arcoiris decorado con piedras transparentes",
        imagen: "../src/img/angiefoto/arcoiris.jpg",
        stock: 15,
        cantidad: 1,
        precio: 1100,
    },
    {
        id: '5',
        category: "Linea Angie",
        objeto: "Colgante",
        nombre: "Arbol",
        descripcion: "Adorno de alambre en forma de Arbol decorado con piedras transparentes",
        imagen: "../src/img/angiefoto/arbol.jpg",
        stock: 18,
        cantidad: 1,
        precio: 1200,
    },
    {
        id: '6',
        category: "Linea Angie",
        objeto: "Colgante",
        nombre: "Mariposa",
        descripcion: "Adorno de alambre en forma de Mariposa decorado con piedras transparentes",
        imagen: "../src/img/angiefoto/mariposa.jpg",
        stock: 14,
        cantidad: 1,
        precio: 1300,
    },
    {
        id: '7',
        category: "Linea Irene",
        objeto: "Cuadro",
        nombre: "Triptico Arbol",
        descripcion: "Cuadro Triptico con figura Arbol en un Atardecer",
        imagen: "../src/img/irenefoto/triparbol.jpg",
        stock: 5,
        cantidad: 1,
        precio: 5000,
    },
    {
        id: '8',
        category: "Linea Irene",
        objeto: "Cuadro",
        nombre: "Abstracto",
        descripcion: "Cuadro Abstracto de varios colores",
        imagen: "../src/img/irenefoto/abstracto.jpg",
        stock: 10,
        cantidad: 1,
        precio: 6000,
    },
]


export const getProducts = () => {
	return new Promise ((resolve) => {
		setTimeout(() => {
			resolve(products)
		}, 600)
	})
}

export const getProductById = (productId) => {
	return new Promise ((resolve) => {
		setTimeout(() => {
			resolve(products.find(prod => prod.id === productId))
		}, 500)
	})
}

export const getProductByCategory= (categoryId) => {
	return new Promise ((resolve) => {
		setTimeout(() => {
			resolve(products.filter(prod => prod.category === categoryId))
		}, 500)
	})
}