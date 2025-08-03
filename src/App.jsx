import "./styles/theme.css";
import "./styles/global.css";
import { ProductList } from "./components/ProductList";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router";
import { Cart } from "./components/Cart";
import { CartProvider } from "./service/CartContext";

export default function App() {

  return (
    <>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </>
  );
}

// import "./styles/theme.css";
// import "./styles/global.css";
// import { ProductList } from "./components/ProductList";
// import { Header } from "./components/Header";
// import { useState } from "react";
// import { Route, Routes } from "react-router";
// import { Cart } from "./components/Cart";

// export default function App() {
  
//   const [cart, setCart] = useState([]);

//   function addToCart(product) {
//     setCart((prevCart) => [...prevCart, product]);
//   }

//   return (
//     //React Fragment
//     <>
//       <Header cart={cart} />
//       <Routes>
//         <Route path="/" element={<ProductList addToCart={addToCart} />} />
//         <Route path="/cart" element={
//           <Cart cart={cart} setCart={setCart} clearCart={clearCart} />
//         } />
//       </Routes>
//     </>
//   );
// }