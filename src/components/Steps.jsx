import React from 'react'

const Steps = () => {
    return (
        <section className='sm:flex justify-between' id='about'>
            <div className='sm:w-[70%]'>
            <div>
                    <h2>Designing Your Dream in Three Simple Steps</h2>
                </div>

                <div className='flex flex-col me-5 gap-5 my-10'>
                    <StepsLayout image="./Group 25.png" title="Start Project" desc = "Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience" />

                    <StepsLayout image="./Group 26.png" title="Start Project" desc = "Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience" />

                    <StepsLayout image="./Group 27.png" title="Start Project" desc = "Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience " visible="hidden" />
                </div>

            </div>

            <div><img src="./Mask group (1).png" alt="" className='sm:w-[100%] h-full' /></div>
        </section>
    )
}

export default Steps


const StepsLayout = (props) => {
    return (
        <>
                <div className='grid grid-cols-5 sm:grid-cols-6 '>
                    <div className='col-span-1 md:col-span-2  lg:col-span-1 '>
                        <img src={props.image} alt="" className='w-10' />
                        <div className={`mx-5 my-2 h-16 w-0 border-1 ${props.visible}`}></div>
                    </div>

                    <div className='col-span-4'>
                        <h4 className='font-semibold'>{props.title}</h4>
                        <p>{props.desc}</p>
                    </div>
                </div>
        </>
    )
}