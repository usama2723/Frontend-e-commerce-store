import { FaMinus, FaPlus } from "react-icons/fa";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToCart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/api/cart", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setCartItems(res.data.carts);
      });
  }, []);

  const updateCartItemQuantity = (_id, newCount) => {
    const token = localStorage.getItem("token");

    axios
      .post(
        `http://localhost:3000/api/cart`,
        {
          productId: _id,
          count: newCount,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          setCartItems((cartItems) => {
            return cartItems.map((item) =>
              item._id === item.productId ? { ...item, count: newCount } : item
            );
          });
          toast.success("updated successfully");
        }
      })
      .catch((err) => {
        toast.error("Error updating quantity");
      });
  };

  const handleIncreaseQuantity = (_id, count) => {
    const newCount = Number(count) + 1;
    updateCartItemQuantity(_id, newCount);
  };

  const handleDecreaseQuantity = (_id, count) => {
    if (count > 1) {
      const newCount = Number(count) - 1;
      updateCartItemQuantity(_id, newCount);
    }
  };

  const Delete = (e, id) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    axios
      .delete(`http://localhost:3000/api/cart/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        const index = cartItems.findIndex((item) => item._id === id);
        if (index !== -1) {
          cartItems.splice(index, 1);
          setCartItems([...cartItems]);
          console.log(cartItems);
          console.log(index);

          toast.warn("Product is deleted");
        }
      })
      .catch(() => {
        console.log("error");
      });
  };

  const ClearCart = (e, id) => {
    const token = localStorage.getItem("token");

    axios
      .get(`http://localhost:3000/api/cart`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setCartItems([]);
          console.log(cartItems);
          toast.success("Cart deleted");

          navigate("/");
        }
      })
      .catch((err) => toast.warn("Error clearing cart"));
  };

  return (
    <div className=" container pt-10 pb-2 bg-gray-200 ">
      <h1 className="text-4xl font-bold pb-5 text-center">Shopping Cart</h1>
      <div className="container">
        <button
          onClick={(e) => ClearCart(e)}
          class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-red active:bg-red-800"
        >
          Clear Cart
        </button>
        {cartItems.length > 0 && (
          <Link to={"/checkout"}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800 float-right">
              Checkout
            </button>
          </Link>
        )}
      </div>
      {cartItems.map((item) => (
        <div className="container p-5 my-5 shadow-md rounded-lg bg-white w-[90%] ">
          <img className="h-[130px] " src={item.productId.imageUrl} />

          <div
            onClick={(e) => Delete(e, item._id)}
            className="text-[35px] text-red-900 hover:text-red-400 float-right "
          >
            <MdDelete />
          </div>
          <div className="flex justify-center my-5">
            <FaPlus
              onClick={() =>
                handleIncreaseQuantity(item.productId._id, item.count)
              }
            />
            <span className="mx-2 text-center -translate-y-2 w-[25px] border-gray border ">
              {item.count}
            </span>
            <FaMinus
              onClick={() =>
                handleDecreaseQuantity(item.productId._id, item.count)
              }
            />
          </div>

          <h3 className="font-medium text-lg">{item.productId.name}</h3>
          <div className="space-y-2">
            <h3 className=" font-medium text-red-600">
              Rs: {item.productId.price}
            </h3>
            <h3 className="font-semibold text-black-600">
              Total Price: {item.productId.price}rs
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddToCart;
