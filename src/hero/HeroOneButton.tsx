import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center flex flex-col justify-between  ">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
      {props.title}
    </h1>
    <div>
    <h3 className='whitespace-pre-line text-3xl font-bold leading-hero text-gray-900'><span className='text-primary-500'>YOU SEE</span> the world the way <span className='text-primary-500'>WE BUILD</span></h3>
    <h4 className="  text-2xl">{props.description}</h4>

    </div>

  </header>
);

export { HeroOneButton };
