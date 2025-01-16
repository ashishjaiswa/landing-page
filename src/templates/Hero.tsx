import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (

  <Background color=" from-cyan-300 to-slate-100  h-screen bg-header-pattern  bg-cover repeat-no    ">
    <div className='flex w-full  justify-center  '  >

      <Section yPadding="  w-full  " mx='mx-2'>
        <NavbarTwoColumns logo={<Logo />}>
          <li>
            <Link href="/service">
              Service
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="contact">
              Contact
            </Link>
          </li>

        </NavbarTwoColumns>
      </Section>
    </div>
    <div className='flex h-full md:pt-0 pt-10 gap-5 '  >


      <Section yPadding=" md:self-center  flex w-full  gap-5 md:flex-row flex-col  " mx=''>
        
        
        <img 
            src="/assets/gif/ASHOKA.gif"
            alt="Animated GIF" 
            className='w-full sm:w-4/5 md:w-full self-center rounded-xl overflow-hidden'
        // Optional styling
      />
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
