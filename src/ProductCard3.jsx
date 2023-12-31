import { Link } from "react-router-dom"
const CategoryCard = ({_id, imageUrl, name, countInStock}) => {
  return (
 
    <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg">
         <Link to={`/singalitems?productId=${_id}`}>
      <div className="flex justify-between items-center p-3">

        <div className="space-y-4">
       
          <h3 className="font-normal text-xl">{name}</h3>
          <p className="text-gray-500">{countInStock}</p>
        </div>
        <img className="w-[120px] h-[100px]  object-cover rounded-lg" src={imageUrl} alt={name}/>
      </div>
      </Link>
    </div>
  
  )
}

export default CategoryCard
