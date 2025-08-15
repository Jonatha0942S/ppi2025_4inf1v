import "./styles/theme.css";
import "./styles/global.css";
import { ProductList } from "./components/ProductList";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router";
import { Cart } from "./components/Cart";
import { CartProvider } from "./service/CartContext";
import Login  from "./components/Login";
import Cadastro from "./components/Cadastro";
import GerenciarProdutos from "./components/GerenciarProdutos";

export default function App() {

  return (
    <>
    <Login />
    <Cadastro />
    <GerenciarProdutos />
    {/* <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/produtos" element={<TelaProdutos />} />
      </Routes>
    </CartProvider> */}
    </>
  );
}