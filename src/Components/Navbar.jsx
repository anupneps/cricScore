import React from 'react'
import criclogo from "../Images/cricsLogo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between  bg-slate-500 w-[full] h-[100px] p-1 items-center" >
      <div className="invisible">
        <img className='sm:visible sm:w-[300px] sm:h-[80px] ' src={criclogo} alt="background" />
      </div>

      <div >
        <ul className="inline-flex p-1  ">
          <li >Intl</li>
          <li >IPL</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
