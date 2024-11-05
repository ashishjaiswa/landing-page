import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Ashoka Consultancy Services"
    description="We offer a wide range of services to meet your needs, from engineering drawings to mobile app development. Our team of experts is dedicated to providing innovative solutions and exceptional service."
  >
    <VerticalFeatureRow
      title="Engineering Drawing"
      description="High-quality engineering drawings."
      image="/assets/images/svg1.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="AutoCAD Design"
      description="Expert AutoCAD design services for all your needs."
      image="/assets/images/svg2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Web Development"
      description="Cutting-edge web development for modern businesses."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
