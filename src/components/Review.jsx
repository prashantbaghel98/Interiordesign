import React from 'react'

const Review = () => {
    return (
        <section className='lg:flex gap-10 '>
            <div className='lg:w-[40%] '>
                <img src="./Image.png" alt="" className='h-full' />
            </div>

            <div className=' lg:w-[60%]'>
                <h2 className='my-10 text-center lg:text-start sm:my-0'>What Our Customers Say About Us</h2>
                <div className='flex flex-wrap sm:flex-nowrap bg-white m-2  gap-5'>

                    <ReviewLayout desc="Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations.  Thank you for making my home beautiful!" image="./Review.png" name="Sophie Carter" place="New York, USA" className=""/>

                    <ReviewLayout desc="Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations.  Thank you for making my home beautiful!" image="./Review.png" name="Sophie Carter" place="New York, USA" />

                  



                </div>

            </div>
        </section>
    )
}

export default Review


const ReviewLayout = (props) => {
    return (

        <div className='bg-black text-white p-5 flex flex-col gap-10 w-95 '>
            <img src="./mark.png" alt="" className='invert w-16' />
            <p>{props.desc}</p>

            <div className='flex gap-5 items-center'>
                <div><img src={props.image} alt="logo" /></div>
                <div className=''>
                    <h4 className='font-semibold'>{props.name}</h4>
                    <p className=''>{props.place}</p>
                </div>
            </div>
        </div>

    )
}