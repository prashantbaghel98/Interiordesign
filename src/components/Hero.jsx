import React from 'react'

const Hero = () => {
  return (
    <section className='my-5'>
      <div className='flex-wrap flex md:grid lg:grid grid-cols-3 gap-5'>
        <div className='col-span-2'>
          <h1>Interior Design</h1>
          <p>Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and cutting-edge
            modern Innovation, Allowing you to transform your living spaces into the epitome of luxury and sophistication</p>
        </div>

        <div className='col-span-1'>
          <img src="./Image 1.png" alt="" />
        </div>
      </div>

      <div className='  sm:flex gap-5 my-15 '>
        <div className='grid content-between'>
          <button className=' w-fit mx-auto sm:mx-0'>Start Project</button>
          <div className='flex md:gap-5'>
            <div>
              <h2>400+</h2>
              <p>Project Complete</p>
            </div>

            <div>
              <h2>400+</h2>
              <p>Project Complete</p>
            </div>

            <div>
              <h2>400+</h2>
              <p>Project Complete</p>
            </div>
          </div>
        </div>

        <div className='relative flex my-20 sm:my-0 sm:h-60 lg:h-102 sm:w-[70%]'>
          <img src="./Image 2.png" alt="" className='z-20 p-10 sm:p-0 w-fit absolute sm:bottom-0 sm:right-0 ' />
          <img src="./Rectangle 60.png" alt="" className='sm:w-35 sm:-left-15 sm:absolute 2xl:left-40 xl:-left-20 xl:-top-10 lg:left-60 lg:-top-15' />
          <img src="./Arrow down.png" alt="" className='w-20 -bottom-13 sm:top-40 lg:top-64 lg:w-fit z-20 absolute right-2 sm:right-0 sm:bottom-0 ' />
        </div>

      </div>


    </section>
  )
}

export default Hero
