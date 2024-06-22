
const PopularServiceCard = ({ imgURL, title, description }) => {
  return (
    <div className='flex even:flex-row-reverse gap-3 w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[564px] h-[282px]' />
      <div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {title}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
        {description}
      </p>
      </div>
    </div>
  );
};

export default PopularServiceCard;
