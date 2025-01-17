// import {Testimonials} from '@/components/Testimonials';

// import { Banner } from './Banner';
// import { Banner } from './Banner';
// import { Footer } from './Footer';
import { VerticalFeatures } from '@/templates/VerticalFeatures';
import { Footer } from '@/templates/Footer';
import { Header } from '@/templates/Header';
// import { VerticalFeatures } from './VerticalFeatures';

const Service = () => (
  <div className="text-gray-600 antialiased">
    {/* <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero /> */}
    {/* <Sponsors /> */}
    <Header/>
    <VerticalFeatures />
    {/* <Testimonials/> */}
    {/* <Banner /> */}
    <Footer />
  </div>
);

export { Service };
