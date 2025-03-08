import React, { useState } from 'react';
import { AlignJustify } from 'lucide-react';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const toggleHandle = () => {
    if (!toggle) {
      setToggle(true);
      console.log("Visible");
    } else {
      setToggle(false);
      console.log("Invisible");
    }
  };

  return (
    <nav className="sm:flex items-center justify-between">
      <div className='py-5 flex items-center justify-between'>
        <div className="logo">
          <img src="./Logo.png" alt="Logo" className='w-25' />
        </div>

        <div>
          <AlignJustify className='sm:hidden' onClick={toggleHandle} />
        </div>
      </div>
      <div className={`sm:flex text-[15px] font-semibold ${toggle ? 'flex' : 'hidden'}`}>
        <ul className='flex mx-2 sm:items-center flex-col sm:flex-row gap-3 sm:gap-5'>
          <li>Home</li>
          <li>Service</li>
          <li>Contact</li>
          <li>Support</li>
          <button>Sign Up</button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;