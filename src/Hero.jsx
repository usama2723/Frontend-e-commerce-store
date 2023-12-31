import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Hero = () => {
 
  return (
    <div className='container pt-5 relative'>
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className='relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]'>
          <div className='absolute max-w-[470px] sm:ml-16 ml-8 top-[80%] -translate-y-[50%] sm:space-y-4 '>
            <Link to={`/products?categoryId=6543517e1e6fdb526ca678f3`}>

              <div className='bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer'>Shop Now<BsArrowRight />
              </div>
            </Link>

          </div>
          <img
            className='w-full h-full object-cover rounded-lg'
            src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80' alt='' />

        </div>
        <div className="relative">
          <img
            className='w-full h-full object-cover rounded-lg'
            src='https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80' alt='' />

        </div>
        <div className="relative">
          <img
            className='w-full h-full object-cover rounded-lg'
            src='https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' alt='' />

        </div>
      </div>



    </div>
  )
}

export default Hero
