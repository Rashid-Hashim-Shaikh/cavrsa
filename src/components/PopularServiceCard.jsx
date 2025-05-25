import React from "react";

const PopularServiceCard = ({imgURL, title, description, id }) => {
  return (
    <div className={`flex ${id % 2 === 0 ? "flex-row": "flex-row-reverse"} gap-3 w-full max-sm:w-full max-sm:flex-col items-center `}>
      <img src={imgURL} alt={title} className='w-[100%] h-[300px] max-w-[564px] border-2 aspect-square rounded-lg shadow-lg max-sm:h-auto' />
      <div className='p-4 flex-1'>
      <h3 className='mt-2 text-2xl leading-normal text-coral-red font-semibold font-palanquin'>
        {title}
      </h3>
      <p className='mt-2 font-montserrat text-lg sm:text-2xl leading-normal'>
        {description}
      </p>
      </div>
    </div>
  );
};

export default PopularServiceCard;
