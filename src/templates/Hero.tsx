import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gradient-to-r from-cyan-300 to-slate-100  h-screen md:bg-header-pattern bg-cover repeat-no    ">
    
    <Section yPadding="py-6 mx-8 ">
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
<div className='flex h-full  justify-between '  >


    <Section yPadding="mx-8 self-center    ">
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
        <img className=' md:flex hidden' src='/assets/images/hero-one.svg'/>
        </div>

  </Background>
);

export { Hero };
