import axios from "axios"
import { useEffect, useState } from "react"
import { MdDelete } from "react-icons/md";

const AddToCart = () => {

  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    const token = localStorage.getItem("token")
    axios.get('http://localhost:3000/api/cart', {

      headers: {
        authorization: `Bearer ${token}`
      }
    }
    ).then(res => {
      console.log(res);
      setCartItems(res.data.carts);

    });
  }, [])

  return (

    <div class=" container pt-10 pb-2 bg-gray-200">
      <h1 class="text-4xl font-bold pb-5">Shopping Cart</h1>
      <h3>You Have Items in Shopping Cart</h3>

      {cartItems.map(item => (

        <div className="grid px-10 py-10 my-5 shadow-md rounded-lg bg-white">

          <div>
            <img className="h-[130px] " src={item.productId.imageUrl} />

            <div>
              <div className="text-[35px] text-red-900 hover:text-red-400 float-right py-6 ">
                < MdDelete />
              </div>

              <h3 className="text-center font-medium text-black-600 py-6">Quantity: {item.count}</h3>

            </div>
            <h3 className=" font-medium">{item.productId.name}</h3>
            <div className="space-y-2">
              <h3 className=" font-medium text-red-600">{item.productId.price}</h3>
              <h3 className=" text-1xl font-bold text-black-600">Total Price: {item.productId.price}</h3>
            </div>

          </div>
        </div>

      ))}

    </div>


  )
}

export default AddToCart
