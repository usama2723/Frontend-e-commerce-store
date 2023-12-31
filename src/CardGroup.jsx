import { useEffect, useState } from "react"
import CardGroupCategory from "./CardGroupCategory"
import axios from "axios"



const CardGroup = () => {

  const [cardGroupCategory, setCardGroupCategory] = useState([]);

  useEffect(() => {

    axios.get('', {
      headers: {
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
        {cardGroupCategory.map((el) => {
          let imageUrl = ''

          if (el.name === "Electronics") {
            imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOztYd2qSbJjXT9CE-WJxjYlqRrMsG2H8N41dRIoV_Sxoi5Gvv7PISbwnjldAdTvwst4w&usqp=CAU'
          }

          if (el.name === "Laptop") {
            imageUrl = 'https://static.priceoye.pk/images/home/laptops.svg'
          }
          if (el.name === "Mobile") {
            imageUrl = 'https://static.priceoye.pk/images/home/mobiles.svg'
          }
          if (el.name === "Tablets") {
            imageUrl = 'https://static.priceoye.pk/images/home/tablets.svg'
          }
          if (el.name === "Cameras") {
            imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiewhDpKtTgfZm8-5XIkoKbFoBOgL73oXxQ&usqp=CAU'
          }
          if (el.name === "PlayStations") {
            imageUrl = 'https://logowik.com/content/uploads/images/playstation-now4865.logowik.com.webp'
          }
          if (el.name === "BlueTooth Speakers") {
            imageUrl = 'https://static.priceoye.pk/images/home/bluetooth-speakers.svg'
          }
          return (
            <CardGroupCategory
              key={el._id}
              imageUrl={imageUrl}
              name={el.name}
              _id={el._id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default CardGroup
