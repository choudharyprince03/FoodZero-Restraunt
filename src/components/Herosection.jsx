import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-[#232F00] text-white pt-24 w-full overflow-x-hidden">
      
      <div className="max-w-full px-4 ml-15 sm:px-20">

        {/* Text Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="mt-16 z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight">
              Healthy Eating
            </h1>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight">
              is important
            </h1>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight">
              part of lifestyle
            </h1>

            <p className="mt-6 text-lg max-w-md">
              Explore the finest dining experience with us!
            </p>
          </div>
        </div>

        {/* Images Section */}
        <div className="hidden md:flex -mt-[252px] pl-[500px] flex-col items-center">

          <div>
            <img
              src="/assets/Image.png"
              alt="Steak Dish"
              className="w-[750px] h-[500px] object-cover shadow-lg"
            />
          </div>

          <div className="flex mr-90 -mt-15 mb-20 justify-end w-full">
            <div className="flex space-x-4">
              <img src="/assets/spices1.png" alt="Spice 1" className="w-36 h-36 rounded-full" />
              <img src="/assets/spices2.png" alt="Spice 2" className="w-36 h-36 rounded-full" />
              <img src="/assets/spices3.png" alt="Spice 3" className="w-36 h-36 rounded-full" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="hidden md:flex space-x-100">

          <div>
            <img
              src="/assets/seafood.png"
              alt="Seafood Soup"
              className="w-100 h-70 object-cover"
            />
            <p className='pt-4 text-4xl font-bold'>Start to plan</p>
            <p className='text-4xl font-bold'>your diet today</p>
            <p className='pt-4 text-sm'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className='w-65 mr-8 mb-25'>
            <p className='text-sm pb-1'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <img
              src="/assets/pepper.png"
              alt="Pepper Grinders"
              className="w-65 h-100 object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
