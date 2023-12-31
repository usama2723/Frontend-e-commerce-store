import useQuery from './useQuery';
import { BASE_API_URL } from "../constants";
import { useEffect, useState } from 'react';
import axios from "axios";
import ProductsCard2 from './ProductsCard2';

const Products = () => {
    const query = useQuery();
    const category = query.get("categoryId") || "";
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_API_URL}/products`).then(res => {
            console.log(res);
            setProducts(res.data);
        });
    }, []);

    const filteredProducts = products.filter((item) => {
        return item.category._id === category;
    });

    return (
        <div className="container py-16">
            <div className="lg:flex justify-between items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filteredProducts.map(product => (
                        <ProductsCard2
                            key={product._id}
                            _id={product._id}
                            name={product.name}
                            imageUrl={product.imageUrl}
                            price={product.price}
                            description={product.description}
                            countInStock={product.countInStock}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;