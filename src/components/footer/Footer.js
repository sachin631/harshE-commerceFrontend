import React from 'react'

const Footer = () => {
  return (
    <>
    <section className=' mt-auto'>
        <div className='grid md:grid-cols-4 grid-cols-1 space-x-6 mt-2 bg-slate-900 text-white'>
              <div className='flex justify-center items-center flex-col gap-4 p-4'>
                <h1 className='font-extrabold cursor-pointer active:text-blue-500'>Get To Know Us</h1>
                <h2 className='cursor-pointer active:text-blue-500'>About Us</h2>
                <h2 className='cursor-pointer active:text-blue-500'>Careers</h2>
                <h2 className='cursor-pointer active:text-blue-500'>Press Releases</h2>
                <h2 className='cursor-pointer active:text-blue-500'>Shivcoder</h2>
              </div>
              <div className='flex justify-start items-center flex-col gap-4 p-4'>
                <h1 className='font-extrabold cursor-pointer active:text-blue-500'>Connects With Us</h1>
                <h2 className='cursor-pointer active:text-blue-500'>Facebook</h2>
                <h2 className='cursor-pointer active:text-blue-500'>Twitter</h2>
                <h2 className='cursor-pointer active:text-blue-500'>Instagram</h2>
              </div>
              <div className='flex justify-start items-center flex-col gap-4 p-4'>
              <h1 className='font-extrabold cursor-pointer active:text-blue-500'>Make Money With Us</h1>
                <h2 className='cursor-pointer active:text-blue-500'>Facebook</h2>
                <h2 className='cursor-pointer active:text-blue-500'>Twitter</h2>
                <h2 className='cursor-pointer active:text-blue-500'>Instagram</h2>
              </div>
              <div className='flex justify-start items-center flex-col gap-4 p-4'>
                <h1 className='font-extrabold cursor-pointer active:text-blue-500'>Make Money With Us</h1>
                <h2 className='cursor-pointer active:text-blue-500'>About Us</h2>
                <h2 className='cursor-pointer active:text-blue-500'>Careers</h2>
                <h2 className='cursor-pointer active:text-blue-500'>Press Releases</h2>
              </div>
        </div>
    </section>
    </>
  )
}

export default Footer