import { AiFillStar, AiOutlineStar, AiOutlineShopping } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ _id, imageUrl, name, price }) => {
  const AddToCart = () => {
    const obj = {
      productId: _id,
      count: 1,
    };
    const token = localStorage.getItem("token");
    axios
      .post("http://localhost:3000/api/cart", obj, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Product is added to cart");
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative">
      <Link to={`/singalitems?productId=${_id}`}>
        <img className="rounded-t-lg p-4 " src={imageUrl} alt={name} />{" "}
      </Link>
      <div className="space-y-2 relative p-4">
        <div className="text-yellow-400 flex gap-[2px] text-[20px]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>

        <h3 className="font-medium truncate">{name}</h3>
        <h3 className="text-2x1 font-medium text-red-600">Rs: {price}</h3>

        <div
          onClick={AddToCart}
          className="absolute -top-4 right-2 bg-accent hover:bg-accentDark text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer"
        >
          <AiOutlineShopping />
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
