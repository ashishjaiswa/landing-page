// import {Testimonials} from '@/components/Testimonials';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
// import { Banner } from './Banner';
// import { Banner } from './Banner';
// import { Footer } from './Footer';
import { Hero } from '../templates/Hero';
import { VerticalFeatures } from '@/templates/VerticalFeatures';
// import { VerticalFeatures } from './VerticalFeatures';

const Service = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    {/* <Sponsors /> */}
    <VerticalFeatures />
    {/* <Testimonials/> */}
    {/* <Banner /> */}
    {/* <Footer /> */}
  </div>
);

export { Service };
