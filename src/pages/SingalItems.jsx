import useQuery from "./useQuery";
import { BASE_API_URL } from "../constants";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiFillStar, AiOutlineStar, AiOutlineShopping } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingalProducts = (props) => {
  const query = useQuery();
  const productId = query.get("productId") || "";
  const [product, setProduct] = useState();

  console.log({ productId });

  useEffect(() => {
    if (productId) {
      axios.get(`${BASE_API_URL}/products/${productId}`).then((res) => {
        console.log(res);
        setProduct(res.data);
      });
    }
  }, []);

  function AddToCart() {
    const obj = {
      productId,
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
        toast.error("Error");
      });
  }

  return (
    <div className="container py-6 bg-gray-200 flex justify-center items-center">
      {!product ? null : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-5 py-10 my-5  shadow-md rounded-lg bg-white max-w-screen-sm">
          <div className="md:col-span-1 lg:col-span-2">
            <img
              className="w-[340px]  object-cover"
              src={product.imageUrl}
              alt={product.name}
            />
          </div>
          <div className="md:col-span-1 lg:col-span-1 space-y-2">
            <div className="text-yellow-400 pb-3 flex gap-[2px] text-[25px]">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p className="text-2xl">
              <b>Name:</b> {product.name}
            </p>
            <h3 className="text-xl text-red-600">
              <b className="text-black">Price: </b>
              {product.price}rs
            </h3>
            <p className="text-1xl text-black-600">
              <b>Description: </b>
              {product.description}
            </p>
            <div className="md:col-span-1 lg:col-span-1 space-y-2 flex flex-col ">
              <div
                onClick={AddToCart}
                className="bg-accent hover:bg-accentDark text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer"
              >
                <AiOutlineShopping />
              </div>
              <span className="text-green-600 font-medium">Add To Cart</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingalProducts;
