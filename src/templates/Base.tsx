// import {Testimonials} from '@/components/Testimonials';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Header } from './Header';
// import { Banner } from './Banner';
// import { Banner } from './Banner';
// import { Footer } from './Footer';
import { Hero } from './Hero';
import { Sponsors } from './Sponsors';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <div className='flex w-full  justify-center  '  >


    </div>
    <Hero />
    <VerticalFeatures />
    <Sponsors />
    {/* <Testimonials/> */}
    <Banner />
    <Footer />
  </div>
);

export { Base };
