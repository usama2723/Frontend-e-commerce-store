import { AiOutlineShopping } from "react-icons/ai"
import axios from "axios"


const ProductsCard2 = ({ _id, name, imageUrl, price, description, countInStock }) => {

    function AddToCart() {
        const obj = {
            productId: _id,
            count: 1
        }
    const token =  localStorage.getItem("token")

        axios.post('http://localhost:3000/api/cart', obj, {
            headers: {
                authorization: `Bearer ${token}`
             
            }
            
        }).then(()=>{
            alert('product is added to cart')
        }).catch(()=>{
            alert('First you have to sign up! Before adding items to the cart');
        })

    }

    return (
        <div>

            <div className="border border-gray-200 hover:border-gray-500 hover:scale-105 transition-transform rounded-lg ">
                <img src={imageUrl} alt={name} />
                <div className="space-y-2 p-4">
                   

                    <h3 className="font-medium truncate">{name}</h3>
                    <h3 className=" font-medium text-red-600">{price}</h3>
                    <h3 className=" font-small truncate ">{description}</h3>
                    <h3 className="font-medium">{countInStock}</h3>
                    <div onClick={AddToCart} className="relative right-2 bg-accent hover:bg-accentDark text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center ">
                        < AiOutlineShopping />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ProductsCard2
