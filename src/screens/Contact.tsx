
import ContactMain from '@/components/ContactMain';
import { Footer } from '@/templates/Footer';
import { Header } from '@/templates/Header';

const Contact = () => (
  <div className="text-gray-600 antialiased">
    {/* <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero /> */}
   
    <Header/>
    <ContactMain/>

    <Footer />
  </div>
);

export { Contact };
