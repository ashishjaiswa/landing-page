import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gradient-to-r from-cyan-300 to-slate-100  ">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          {/* <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            
          </Link> */}
        </li>
        <li>
          {/* <Link href="/">Sign in</Link> */}
        </li>
      </NavbarTwoColumns>
    </Section>
<div className="   ">

    <Section yPadding="pt-10 pb-32">
      <HeroOneButton
        title={
          <>
            {'Innovative Solutions for Your Business\n'}
          </>
        }
        description="The easiest way to build your dream."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>Download Your Free Theme</Button>
          </Link>
        }
        />
    </Section>
        </div>
  </Background>
);

export { Hero };
