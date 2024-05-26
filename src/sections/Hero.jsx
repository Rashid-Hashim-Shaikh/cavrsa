import { Button } from "../components";
import  heroImage from "../assets/images/hero-image.svg"
import { arrowRight } from "../assets/icons";

const Hero = () => {

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            Vishal R Singh 
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>&</span> Associates
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
        Invest your time and efforts on running your business. Leave the accounting to us.
        </p>

        <Button onClick={() => window.location.href = '#contact-us'} label='Book an Appointment' iconURL={arrowRight} />
        
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={heroImage}
          alt='hero-image'
          width={500}
          height={400}
          className='object-contain relative z-10'
        />
      </div>
    </section>
  );
};

export default Hero;
