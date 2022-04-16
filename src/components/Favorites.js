import React from 'react'
import products from '../api/products.json'
import { BsPlusSquare } from 'react-icons/bs'

export default function Favorites() {
  return (
    <div className='py-6 container mx-auto'>
      <h2 className='font-bold text-sm mb-4 text-gray-700'>Favoriler</h2>

      <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8'>
        {products.map((product => {

          return (

            <div className='favori-item bg-[#FFFFFF] p-2 border-y-2 border-r-2 border-gray-50 cursor-pointer' key={product.id}>
              <div className='flex flex-col items-center relative'>
                
                <div className='product-icon absolute top-0 right-0'>
                  <BsPlusSquare size={27} className="text-blue-300 "/>
                </div>
                
                <img className='my-4' src={product.image} alt="category_image" />
                <p className='mt-2 text-sm font-semibold text-blue-500'>₺{product.price}</p>
                <h4 className='text-sm text-gray-700 text-center mb-4'>{product.title}</h4>
                <p className='text-xs text-gray-500 '>{product.alt}</p>
              </div>
            </div>


          )
        }))}

      </div>
    </div>
  )
}
