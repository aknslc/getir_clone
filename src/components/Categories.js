import React from 'react';
import categories from '../api/categories.json';

export default function Categories() {

  return (
    <>
      <div className='bg-white py-6 container mx-auto'>
        <h2 className='font-bold text-sm mb-4 text-gray-700'>Kategoriler</h2>

        <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 '>
          {categories.map((category => {

            return (

              <div className='category-item transition-colors hover:bg-purple-50 p-3 cursor-pointer ' key={category.id}>
                <div className='flex flex-col items-center'>
                  <img className='w-12 mb-2' src={category.image} alt="category_image" />
                  <h4 className='text-sm text-gray-700 font-semibold'>{category.title}</h4>
                </div>
              </div>

            )
          }))}

        </div>
      </div>
    </>
  )
}
