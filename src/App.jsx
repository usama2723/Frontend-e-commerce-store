
import Home from './pages/Home';
import Products from './pages/Products';
import {
  BrowserRouter,
  Route,
  Routes,

} from "react-router-dom";
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Layout from './Layout';
import AddToCart from './pages/AddToCart';

const App = () => {

  return (
    <div>
      <BrowserRouter>

        <Layout>

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/addtocart' element={<AddToCart />} />


          </Routes>
        </Layout>

      </BrowserRouter>
    </div>
  )
}
export default App
