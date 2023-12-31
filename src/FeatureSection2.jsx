import ProductCard from "./ProductCard";
import { BASE_API_URL } from "./constants";
import { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
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
  }, []);

  const filteredProducts = products.filter((item) => {
    return item.category.name === "Laptop";
  });

  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Laptops</h3>
          <p className="text-gray-600 mt-2">Buy Laptops online at best prices</p>
        </div>
        <Link to={`/products?categoryId=652d19dba4afd40e643721a3`} className="mt-4 lg:mt-0 text-accent hover:text-accentDark underline block lg:inline-block lg:ml-4">
          See More
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-8">
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1565995487495-e2a23f3af2ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlJTIwYW5kJTIwbGFwdG9wfGVufDB8fDB8fHww&w=1000&q=80"
            alt=""
          />
        </div>
        {filteredProducts.slice(0, 4).map(product => (
          <ProductCard
            key={product._id}
            _id={product._id}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection2;