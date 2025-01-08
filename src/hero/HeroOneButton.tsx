import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-left flex flex-col justify-between  ">
    <h1 className="whitespace-pre-line text-6xl font-bold leading-hero text-white">
      {props.title}
    </h1>
    <div>
    <h3 className='whitespace-pre-line text-4xl font-bold leading-hero text-white'><span className=' text-yellow-400'>YOU SEE</span> the world the way <span className='text-yellow-400'>WE BUILD</span></h3>
    <h4 className=" text-white text-2xl">{props.description}</h4>

    </div>

  </header>
);

export { HeroOneButton };
