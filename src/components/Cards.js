import React from 'react'

export default function Cards() {
  return (
    <div className='container mx-auto'>
      <div className='cards flex flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-between items-center my-10'>

        <div className='card rounded-lg h-80 shadow-md p-10 grid gap-y-4 w-full'>
          <div>
            <img className='mx-auto' src='https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg' alt='img' />
          </div>
          <h2 className='text-center text-blue-400 text-semibold'>Her siparişinize bir kampanya</h2>
          <p className='text-center text-sm text-gray-500'>Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.</p>
        </div>

        <div className='card rounded-lg h-80 shadow-md p-10 grid gap-y-4 w-full'>
          <div>
            <img className='mx-auto' src='https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg' alt='img' />
          </div>
          <h2 className='text-center text-blue-400 text-semibold'>Dakikalar içinde kapınızda</h2>
          <p className='text-center text-sm text-gray-500'>Getir’le siparişiniz dakikalar içinde kapınıza gelir.</p>
        </div>

        <div className='card rounded-lg h-80 shadow-md p-10 grid gap-y-4 w-full'>
          <div>
            <img className='mx-auto' src='https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg' alt='img' />
          </div>
          <h2 className='text-center text-blue-400 text-semibold'>Binlerce çeşit mutluluk</h2>
          <p className='text-center text-sm text-gray-500'>Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.</p>
        </div>

      </div>
    </div>
  )
}
