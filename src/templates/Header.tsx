import Link from 'next/link';

import { Section } from '../layout/Section';
import { Logo } from './Logo';
import { NavbarTwoColumns } from '@/navigation/NavbarTwoColumns';

const Header = () => (
    <div className=' bg-black bg-top flex w-full justify-center '>
        <Section yPadding="   w-full  " mx='mx-2'>
            <NavbarTwoColumns logo={<Logo xl />}>
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
);

export { Header };
