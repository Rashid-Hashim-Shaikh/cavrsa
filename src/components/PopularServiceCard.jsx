import React from "react";

const PopularServiceCard = ({imgURL, title, description, id }) => {
  return (
    <div className={`flex ${id % 2 === 0 ? "flex-row": "flex-row-reverse"} gap-3 w-full max-sm:w-full max-sm:flex-col items-center`}>
      <img src={imgURL} alt={title} className='w-[564px] h-[282px] border-2 aspect-square' />
      <div>
      <h3 className='mt-2 text-2xl leading-normal text-coral-red font-semibold font-palanquin'>
        {title}
      </h3>
      <p className='mt-2  font-montserrat text-lg sm:text-2xl leading-normal'>
        {description}
      </p>
      </div>
    </div>
  );
};

export default PopularServiceCard;
