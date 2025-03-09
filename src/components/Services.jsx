import React from 'react'

const Services = () => {
    return (
        <section>
            <div className='flex items-center gap-2 mb-10'>
                <hr className='w-25 border-2' />
                <h2>Our Services</h2>
            </div>
            <div className='flex gap-10'>
                <SectionLayout image="./Lighting design icon.png" title="Lighting Design" desc="Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere" />
                <SectionLayout image="./Lighting design icon.png" title="Lighting Design" desc="Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere" />
                <SectionLayout image="./Lighting design icon.png" title="Lighting Design" desc="Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere" />
            </div>
        </section>
    )
}

export default Services


const SectionLayout = (props) => {
    return (
        <div className='lg:flex gap-5'>
            <div>
                <img src={props.image} alt="" className='w-15 lg:w-30'/>
            </div>
            <div className='flex flex-col gap-5'>
                <h3 className=''>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}