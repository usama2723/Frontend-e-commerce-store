
import ProductCard from "./ProductCard"
import { BASE_API_URL } from "./constants"
import { useEffect, useState, } from 'react';
import axios from "axios"
import { Link } from "react-router-dom"
import useQuery from "./pages/useQuery";

const FeatureSection = () => {
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
    return item.category.name === "Mobile"
  });


  return (
    <>
      <div className=" container pt-16">
        <div className="lg:flex justify-between items-center">
          <div>
            <h3 className="font-medium text-2xl">MobilePhones</h3>
            <p className="text-gray-600 mt-2">Buy MobilePhones online at best prices</p>
          </div>
          <Link to={`/products?categoryId=652fc2fc2626702dd45f91e8`} className="space-x-4 mt-8 lg:mt-0 text-accent hover:text-accentDark underline" >See More</Link>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
          <div>
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1605636808063-ba999ff935eb?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8NzM2NjY4MjR8fGVufDB8fHx8fA%3D%3D"
              alt="" />
          </div>
          {filteredProducts.slice(0, 4).map(product =>
            <ProductCard
              key={product._id}
              _id={product._id}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
            />)}

        </div>
      </div>


    </>
  )
}


export default FeatureSection
