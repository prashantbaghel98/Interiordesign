import React from 'react'
import { Mail } from 'lucide-react';

const Subscribe = () => {
    return (
        <section className='flex flex-col items-center gap-10'>
            <div className='text-center'>
            <h2 className='mb-5 sm:mb-10' >Subscribe to Our Newsletter<br/> for Design Insights</h2>
            <p>Be the first to discover trends, inspirations, and special offers as we bring the world of design directly to your inbox</p>
            </div>
            <div className='bg-white flex p-2 rounded' >
                <div className='flex items-center gap-5'>
                    <Mail  className='w-5'/>
                    <input type="email" name="" id="" placeholder='Enter Email Here' />
                </div>
                <button className='btn'>Click Here</button>
            </div>
        </section>
    )
}

export default Subscribe
