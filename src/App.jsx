import './App.css';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext/CartProvider';
import { Cart } from './components/Cart/Cart';
import { ProductFormContainer } from "./components/AdminComponents/ProductFormContainer/ProductFormContainer";
import { MainLayout } from "./layout/MainLaypout";
import { AdminLayout } from "./layout/AdminLayout";
import { RutaProtegida } from ".//components/RutaProtegida/RutaProtegida";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>

          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<ItemListContainer titulo={"Bienvenido a su tienda"} />} />
              <Route path="/category/:category" element={<ItemListContainer />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<Cart />} />
            </Route>
            
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Login />} />
              <Route
                path="alta-productos" element={
                  <RutaProtegida>
                    <ProductFormContainer />
                  </RutaProtegida>} />

            </Route>
            {/* <Route path="/admin" element={<ProductFormContainer />} /> */}
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>

    </>
  );
};

export default App
