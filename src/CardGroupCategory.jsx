import { Link } from "react-router-dom"


const CardGroupCategory = ({ imageUrl, name, _id }) => {
  return (
    <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg">
      <div className="flex items-center">
        <img className=" h-[50px] w-[45px] ml-6 rounded-lg" src={imageUrl} alt=""/>

        <Link to={`/products?categoryId=${_id}`}>
          <button className=" text-black text-xs uppercase tracking-widest">{name}</button>
        </Link>

      </div>
    </div>
  )
}

export default CardGroupCategory
