import CategoryCard from "./ProductCard3"
import { BASE_API_URL } from "./constants"
import { useEffect, useState, } from 'react';
import axios from "axios"

const SingalProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_API_URL}/products`).then(res => {
            console.log(res);
            setProducts(res.data);

        });
    }, [])


    return (
        <div className="container pt-16">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.slice(0, 8).map((el) => (
                    <CategoryCard
                        key={el._id}
                        _id={el._id}
                        imageUrl={el.imageUrl}
                        name={el.name}
                        countInStock={el.countInStock}
                    />
                ))}
            </div>
        </div>
    )
}

export default SingalProducts