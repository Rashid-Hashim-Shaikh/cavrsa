import { services } from "../constants";
import { PopularServiceCard } from "../components";

const PopularServices = () => {
  return (
    <section id='services' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'> Services </span> 
        </h2>
        {/* <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p> */}
      </div>

      <div className='mt-16 flex flex-col sm:gap-6 gap-14'>
        {services.map((service) => (
          <PopularServiceCard key={service.name} {...service} />
        ))}
      </div>
    </section>
  );
};

export default PopularServices;
