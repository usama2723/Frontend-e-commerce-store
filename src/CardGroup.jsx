import { useEffect, useState } from "react"
import CardGroupCategory from "./CardGroupCategory"
import axios from "axios"


const CardGroup = () => {

    const [cardGroupCategory, setCardGroupCategory] = useState([]);

    useEffect(() => {

        axios.get('', {
            headers:{
                authorization: 'Bearer tokenVaue'
            }
        })

        axios.get(`http://localhost:3000/api/categories`).then((response) => {
            setCardGroupCategory(response.data);

        })

    }, [])

    return (
        <div className="container pt-8">
            <div className="grid sm:grid-cols-2 md:grid-cols-7 lg:grid-cols-7 gap-4">
                {cardGroupCategory.map((el) => (
                    <CardGroupCategory
                        key={el._id}
                        imageUrl={el.imageUrl}
                        name={el.name}
                        _id={el._id}
                    />
                ))}
            </div>
        </div>
    )
}

export default CardGroup
