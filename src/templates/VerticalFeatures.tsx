import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Ashoka Consultancy Services"
    description="We offer a wide range of services to meet your needs, from engineering drawings to mobile app development. Our team of experts is dedicated to providing innovative solutions and exceptional service."
  >
    <VerticalFeatureRow
      title="Engineering Drawing"
      description="We provide precise and detailed technical drawings for various engineering fields, including mechanical, civil, electrical, and structural design. Using advanced CAD software and industry standards, our team creates 2D and 3D drawings, schematics, and blueprints tailored to your project’s needs. Our services include custom designs, 3D modeling, schematic diagrams, and compliance with international standards to ensure accuracy and efficiency. We offer revisions as needed, making sure your designs are up-to-date and ready for production or construction."
      image="/assets/service/drafting_tools.png"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="AutoCAD Design"
      description="Unlock expert AutoCAD design solutions for all your project needs. Whether it's architectural plans, mechanical designs, or electrical schematics, we deliver high-quality, precise, and customized designs. Our team uses the latest AutoCAD technology to create detailed 2D and 3D drawings that are accurate, efficient, and ready for implementation. From concept to completion, we ensure that your design requirements are met with the utmost precision, adhering to industry standards and client specifications."
      image="/assets/service/architectural_drawings.png"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Web and Mobile application Development"
      description="Transform your ideas into fully functional, user-friendly web and mobile applications with our expert development services. Whether you're looking to build a custom website or a mobile app, our team specializes in creating intuitive, scalable, and secure solutions tailored to your business needs. Using the latest technologies, we deliver responsive web designs and feature-rich mobile applications that provide seamless user experiences across all devices. From development to deployment, we ensure your digital solutions are high-performing and aligned with your goals."
      image="/assets/service/web_design.png"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
