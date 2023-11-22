import { Link } from "react-router-dom"

const CardGroupCategory = ({ imageUrl, name, _id }) => {
  return (
    <div className="border border-gray-200 hover:border-gray-400  hover:scale-130 transition-transform rounded-lg">
      <div className="flex items-center">
        {/* <img className=" h-[70px] w-[100px] rounded-lg" src={imageUrl} alt=""/> */}

        <Link to={`/products?categories=${_id}`}>
          <button className=" h-[50px] w-[35px] ml-10 text-black text-sm uppercase tracking-widest rounded-full">{name}</button>
        </Link>

      </div>
    </div>
  )
}

export default CardGroupCategory
