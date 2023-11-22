import ProductCard from "./ProductCard"
import { BASE_API_URL } from "./constants"
import { useEffect, useState, } from 'react';
import axios from "axios"
import{Link} from "react-router-dom"
import useQuery from "./pages/useQuery";

const FeatureSection2 = () => {
  const query = useQuery();
  const category = query.get("categories") || "";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_API_URL}/products`).then(res => {
      console.log(res);
      setProducts(res.data);

    });
  }, [])

  const filteredProducts = products.filter((item) => {
    return item.category.name === "Laptop"
});


  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Laptops</h3>
          <p className="text-gray-600 mt-2">Buy Laptops online at best prices</p>
        </div>
        
      
        <Link  to={`/products?categories=652d19dba4afd40e643721a3`} className="space-x-4 mt-8 lg:mt-0 text-accent hover:text-accentDark underline" >See More</Link>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://c4.wallpaperflare.com/wallpaper/621/567/611/camera-knolling-night-playstation-wallpaper-preview.jpg"
            alt="" />
        </div>
        {filteredProducts.slice(0,4).map(product =>
          <ProductCard
            key={product._id}
            _id={product._id}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
          />)}
      </div>
    </div>
  )
}
export default FeatureSection2
