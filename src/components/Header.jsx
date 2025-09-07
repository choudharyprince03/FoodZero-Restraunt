import React from 'react';

const Header = () => {
  return (
    <div className='relative'>
      <img src="/assets/Aboutimg.png" className="w-full" alt="" />
      <div className='absolute top-[300px] right-[220px] transform -translate-y-1/2 text-right'>
        <h1 className='text-white text-7xl font-bold'>Who We Are</h1>
        <p className="mt-4 text-white text-xl leading-relaxed max-w-lg">
          The most important thing for us is to give you a comfortable dining experience.
        </p>
      </div>
    </div>
  );
};

export default Header;
