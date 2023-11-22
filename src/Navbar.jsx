
import { BsSearch } from "react-icons/bs"
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="container hidden lg:block">
      <div className="flex justify-between items-center pt-4">
        <div className='w-[7%] object-cover rounded-lg'>
          <img
            src='https://img.myloview.com/stickers/three-letter-with-cube-shape-logo-concept-400-160053808.jpg' alt='' />
        </div>

        <div className="relative w-full max-w-[500px]">
          <input className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full" type="text" placeholder="Search Product..." />
          <BsSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-500"
            size={20}
          />
        </div>
        <div className="flex gap-4  h-[35px] w-[90px]">
          <div className="bg-gray-200 hover:bg-gray-400 icon_wrapper   ">
          
            <Link to="/signup"><AiOutlineUser /></Link>

          </div>
          <div className="bg-gray-200 hover:bg-gray-400  icon_wrapper ">
           <Link to={"/addtocart"}><AiOutlineShoppingCart /> </Link> 
            <span className="bg-red-700 text-white w-5 h-5 rounded-full absolute top-8  text-center text-sm pb-3">0</span>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
