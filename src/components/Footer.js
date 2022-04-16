import React from 'react'

export default function Footer() {
  return (
    <>
      <div className='container mx-auto grid grid-cols-2 sm:grid-cols-5 gap-x-14 py-4 mt-4'>
        <div className='grid gap-y-3'>
          <h3 className='text-blue-400 text-semibold text-lg'>Getir'i indirin!</h3>
          <p>
            <img src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg' alt='asd' />
          </p>
          <p>
            <img src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg' alt='asd' />
          </p>
          <p>
            <img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg' alt='asd' />
          </p>
        </div>

        <div className='grid grid-y-1'>
          <h3 className='text-blue-400 text-semibold text-lg'>Getir'i keşfedin</h3>
          <p className='text-sm text-gray-500'>Hakkımızda</p>
          <p className='text-sm text-gray-500'>Kariyer</p>
          <p className='text-sm text-gray-500'>Teknoloji Kariyerleri</p>
          <p className='text-sm text-gray-500'>İletişim</p>
          <p className='text-sm text-gray-500'>COVID-19 Duyuru</p>
          <p className='text-sm text-gray-500'>Sosyal Sorumluluk Projeleri</p>
        </div>

        <div className='hidden sm:block'>
          <h3 className='text-blue-400 text-semibold text-lg'>Yardıma mı ihtiyacınız var?</h3>
          <p className='text-sm text-gray-500'>Sıkça Sorulan Sorular</p>
          <p className='text-sm text-gray-500'>Kişisel Verilerin Korunması</p>
          <p className='text-sm text-gray-500'>Gizlilik Politikası</p>
          <p className='text-sm text-gray-500'>Kullanım Koşulları</p>
          <p className='text-sm text-gray-500'>Çerez Politikası</p>
        </div>

        <div className='hidden sm:block'>
          <h3 className='text-blue-400 text-semibold text-lg'>İş Ortağımız Olun</h3>
          <p className='text-sm text-gray-500'>Bayimiz Olun</p>
          <p className='text-sm text-gray-500'>Deponuzu Kiralayın</p>
          <p className='text-sm text-gray-500'>GetirYemek Restoranı Olun</p>
          <p className='text-sm text-gray-500'>GetirÇarşı İşletmesi Olun</p>
        </div>

        <div className='hidden sm:block'>
          <img className='w-20' src='https://getir.com/_next/static/images/etbis-33c159729adc8b4e2b946310f038d2f4.png' />
        </div>

        
      </div>
      <div className='mx-[159px] mb-14'>
        <hr className='mt-5'/>
      </div>


    </>
  )
}
