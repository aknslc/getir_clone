import React, { useState } from 'react';
import ReactFlagsSelect from "react-flags-select";


export default function HeroSection() {

  const [selected, setSelected] = useState("TR");
  const phones = {
    US: "+1",
    DE: "+74",
    TR: "+90",
    IT: "+11",
    IN: "+47"
  }

  return (
    <>


      <div className='relative bg-hero-pattern h-[500px] bg-cover bg-no-repeat '>

        <div className='flex justify-between container mx-auto items-center absolute top-28 w-full'>

          <div>
            <img className=' hidden sm:block' src='https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg' alt='logo' />
            <h1 className='text-white font-bold text-3xl mt-7 hidden sm:block'>Dakikalar içinde <br /> kapınızda</h1>
          </div>

          <div className='w-full sm:w-[400px] bg-gray-50 rounded-lg p-6 grid gap-y-2'>
            <h4 className='font-semibold text-center text-purple-700 mb-4'>Giriş yap veya kayıt ol</h4>
            <div className='flex gap-x-2'>
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={code => setSelected(code)}
                selected={selected}
                className="flag-select"
              />
              <label className='flex-1 relative block'>
                
                <input required className='h-12 px-4 border-2 w-full rounded text-sm transition-colors hover:border-purple-800 focus:border-purple-800 outline-none peer pt-3' />
                <span className='absolute top-0 left-0 px-4 h-full text-sm text-gray-500 flex items-center transition-all peer-focus:h-6 peer-focus:text-purple-800 peer-focus:text-xs peer-valid:h-6 peer-valid:text-purple-800 peer-valid:text-xs'>Telefon Numarasi</span>
              </label>
            </div>

            <button className='bg-yellow-400 text-sm font-semibold text-purple-700 h-12 w-full text-center rounded transition-colors hover:bg-purple-700 hover:text-white'>Telefon numarasi ile devam et</button>




          </div>
        </div>
      </div>


    </>
  )
}
