import React from 'react'

export default function MobileApp() {
  return (

    <div className='container mx-auto'>
      <div className='bg-mobile-app-pattern bg-purple-700 relative h-80 flex justify-center flex-col p-10 gap-y-4 rounded-lg'>
        <h2 className='text-white text-3xl font-semibold'>Getir'i indirin!</h2>
        <p className='text-white font-semibold'>İstediğiniz ürünleri dakikalar içinde kapınıza <br/> getirelim.</p>
        <div className='links flex'>
          <a className=''>
            <img src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg' alt='' />
          </a>
          <a className='block mx-3'>
            <img src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg' alt='' />
          </a>
          <a className=''>
            <img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg' alt='' />
          </a>

        </div>

        <div className='image absolute bottom-0 right-0 hidden sm:block'>
          <img src='https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png' alt='' />
        </div>

      </div>

    </div>

  )
}
