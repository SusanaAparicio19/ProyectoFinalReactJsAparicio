import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Navbar from './components/Navbar/NavBar';
import classes from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';


function App() {
 
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div className={classes.ContainerGeneral}>
            <div className={classes.ContainerArriba}>
              <div className={classes.Arriba}>
                <Navbar/>
              </div>      
            </div>
            <div className={classes.ContainerMedio}>
              <div className={classes.Texto}>
                <Routes> 
                  <Route path= '/' element={<ItemListContainer greeting = "46 Soles Te da la Bienvenida!!!"/> }/>
                  <Route path= '/category/:categoryId' element={<ItemListContainer greeting = "Productos Por Lineas"/> }/>
                  <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                  <Route path='/cart' element={<Cart/>}/>
                  <Route path='/checkout' element={<Checkout/>}/>
                  <Route path='*' element={<h1>404 NOT FUND</h1>}/>
                </Routes>   
              </div>
            </div>
          </div>
          <footer>
            <div className={classes.AbajoRow}>
            <div className={classes.redes}>
              <h6 className={classes.textCenter}>Copyrigth - Todos los derechos reservados</h6>
              <p className={classes.textCenter}>Seguime en las redes</p>
              <ul>
                <li><a href="https://instagram.com">Instagram</a></li>
                <li><a href="https://facebook.com">Facebook</a></li>
                <li><a href="https://twitter.com">Twitter</a></li>
              </ul>
            </div>
            </div>
          </footer>
		  </CartProvider>
      </BrowserRouter>
    </>
) 

}

export default App

