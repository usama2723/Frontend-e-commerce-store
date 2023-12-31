
import { BsSearch } from "react-icons/bs"
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from "react-router-dom"
import { BASE_API_URL } from "./constants"
import { useEffect, useState } from 'react';
import axios from "axios"

const Navbar = ({ props }) => {

  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(true);

  useEffect(() => {
    axios.get(`${BASE_API_URL}/products`).then(res => {
      console.log(res);
      setProducts(res.data);

    });
  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setShowSuggestions(true);
  }

  const handleAddToCart = () => {

    setCartCount(count => count + 1);
    setSearch(products.name);
    setShowSuggestions(false);


  };

  const filteredProducts = !search ? [] : products.filter(f => f.name.toLowerCase().includes(search.toLowerCase()))

  console.log({ filteredProducts })

  return (

    <div className="container hidden lg:block">
      <div className="flex justify-between items-center pt-4">


        <div className='w-[7%] object-cover rounded-lg'>
          <Link to={'/'}>
            <img
              src='https://img.myloview.com/stickers/three-letter-with-cube-shape-logo-concept-400-160053808.jpg' alt='' /></Link>
        </div>

        <div className="relative w-full max-w-[500px]">
          <div className="flex items-center">
            <input
              className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
              type="text"
              placeholder="Search Product..."
              value={search}
              onChange={handleSearch}
            />
            <BsSearch className="transition -translate-x-10 text-gray-500" size={20} />
          </div>
          {showSuggestions && filteredProducts.length > 0 && (
            //  <Link to={`/singalitems?productId=${_id}`}>
            <div className="absolute top-full text-gray-500 bg-gray-50 shadow-md z-10 ml-5 rounded-b-lg w-[90%] h-auto">
              {filteredProducts.map((d, i) => (
                <div key={i} onClick={() => handleAddToCart(d)} className="cursor-pointer py-2 px-4 hover:bg-gray-200 transition duration-200">
                  {d.name}
                </div>
              ))}
            </div>
            // </Link>
          )}
        </div>

        <div className="flex gap-4  h-[35px] w-[90px]">
          <div className="bg-gray-200 hover:bg-gray-400 icon_wrapper   ">

            <Link to="/signup"><AiOutlineUser /></Link>

          </div>
          <div className="bg-gray-200 hover:bg-gray-400  icon_wrapper ">
            <Link to={"/addtocart"}><AiOutlineShoppingCart />
              {cartCount > 0 && (
                <span className="bg-red-700 text-white w-5 h-5 rounded-full absolute top-8 text-center text-sm pb-3">
                  {cartCount}
                </span>
              )} </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
