import CategoryCard from "./CategoryCard"

const data = [
    {
        "_id": "651c052f33f3ad3bb8cf55f8",
        "name": "Amazon Alexa",
        "imageUrl": "https://www.edn.com/wp-content/uploads/Amazon_Echo_Dot_fourth_gen.jpg?resize=800%2C549",
        "description": "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
        "price": 50,
        "countInStock": 25,
        "__v": 0
    },
    {
        "_id": "651c052f33f3ad3bb8cf55f9",
        "name": "Audio Technica Headphones",
        "imageUrl": "https://www.soundguys.com/wp-content/uploads/2016/11/Audio-Technica-ATH-M40x1.jpg",
        "description": "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
        "price": 233,
        "countInStock": 4,
        "__v": 0
    },
    {
        "_id": "651c052f33f3ad3bb8cf55fa",
        "name": "JBL FLIP 4",
        "imageUrl": "https://thumbs.dreamstime.com/b/loei-thailand-september-blue-jbl-flip-portable-bluetooth-speaker-isolated-white-background-292513008.jpg",
        "description": "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
        "price": 140,
        "countInStock": 10,
        "__v": 0
    },
    {
        "_id": "65268f3fc86827124873aa81",
        "name": "Samsung Notebook 9 Pro",
        "imageUrl": "data:image/jpeg;base64,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",

        "description": "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
        "price": 1099,
        "countInStock": 10,
        "__v": 0
    },
    {
        "_id": "65268f67c86827124873aa83",
        "name": "iPadOS",
        "imageUrl": "https://www.apple.com/newsroom/images/tile-images/apple_ipados_today-view_060319.jpg.landing-big_2x.jpg",
        "description": "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
        "price": 1099,
        "countInStock": 10,
        "__v": 0
    },
    {
        "_id": "65268fffc86827124873aa85",
        "name": "Apple Vision Pro",
        "imageUrl": "https://png.pngtree.com/png-clipart/20230613/ourmid/pngtree-apple-vision-pro-2-png-image_7134825.png",
        "description": "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
        "price": 1099,
        "countInStock": 10,
        "__v": 0
    },
    {
        "_id": "65269001c86827124873aa87",
        "name": "Galaxy S23 Ultra",
        "imageUrl": "https://www.custommacbd.com/cdn/shop/products/Galaxy-S23-Ultra-Green-Custom-Mac-BD_540x.jpg?v=1675423377",
        "description": "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
        "price": 1099,
        "countInStock": 10,
        "__v": 0
    },
    {
        "_id": "65269002c86827124873aa89",
        "name": "Samsung Galaxy Book 3 Pro",
        "imageUrl": "https://m.media-amazon.com/images/I/71ef1yicMJL.jpg",
        "description": "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
        "price": 1099,
        "countInStock": 10,
        "__v": 0
    },

]


const Category = () => {
  return (
    <div className="container pt-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((el) => (
        <CategoryCard
        key={el._id}
        imageUrl={el.imageUrl}
         name={el.name}
         countInStock={el.countInStock}
         />
      ))}
      </div>
    </div>
  )
}

export default Category
