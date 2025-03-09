import { Section } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white flex flex-col sm:flex-row gap-10 justify-between pt-30 p-15 -mt-32'>
      <div className='flex items-start flex-col gap-5'>
        <img src="./Logo.png" alt="" className='invert' />
        <p>VivaDecor your premier destination <br></br>for luxury and modern interior design</p>

        <div className='flex gap-3'>
          <img src="./Facebook.png" alt="" />
          <img src="./X.png" alt="" />
          <img src="./Instagram.png" alt="" />
          <img src="./Linkdin.png" alt="" />
        </div>
      </div>


      <div className='flex flex-col gap-5'>
        <h3>Our Services</h3>
        <ul className='list none'>
          <li>Interior design</li>
          <li>Outdoor design</li>
          <li>Lightning design</li>
          <li>Office design</li>
        </ul>
      </div>


      <div className='flex flex-col gap-5'>
        <h3>Our Services</h3>
        <ul className='list none'>
          <li>Reviews</li>
          <li>Careers</li>
          <li>Pricing</li>
          <li>Press inquires</li>
        </ul>
      </div>


      <div className='flex flex-col gap-5'>
        <h3>Our Services</h3>
        <ul className='list none'>
          <li>info@vivadecor.com</li>
          <li>Design Avenue Cityville, CA 90210 United States</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
