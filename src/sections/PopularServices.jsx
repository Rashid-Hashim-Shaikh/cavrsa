import { services } from "../constants";
import { PopularServiceCard } from "../components";

const PopularServices = () => {
  return (
    <section id='services' className='max-container max-sm:mt-12 '>
      <div className='flex flex-col justify-start gap-5 items-center'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'> Services </span> 
        </h2>
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
