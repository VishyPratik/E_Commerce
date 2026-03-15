import Component from "./Component"
import Shops from "./Component/Shops"
import Mens from "./Component/Mens"
import Womens from "./Component/Womens"
import Kids from "./Component/Kids"
import Product from "./Component/Product"
import Login from "./Component/Login"
import Cart from "./Component/Cart"
import Footer from "./Component/Footer"
import Foot from "./Foot"

import { BrowserRouter,Route, Routes } from "react-router-dom"
function App() {
  
  return (
      <>
          <BrowserRouter>
              <Component />
              <Routes>
                  <Route path="/" element={<Shops></Shops>}></Route>
                  <Route path="/men" element={<Mens></Mens>}></Route>
                  <Route path="/women" element={<Womens></Womens>}></Route>
                  <Route path="/kids" element={<Kids></Kids>}></Route>
                  <Route path="/product" element={<Product></Product>}></Route>
                  <Route path="/product/:id" element={<Product></Product>}></Route>
                  <Route path="/login" element={<Login></Login>}></Route>
                  <Route path="/cart" element={<Cart></Cart>}></Route>
              </Routes>
              <Foot />
              <Footer />
             
          </BrowserRouter>
          
          
    </>
  )
}

export default App
