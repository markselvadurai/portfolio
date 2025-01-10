import AvatarImage from "@/assets/images/AvatarMaker.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from '@/assets/icons/sparkle.svg';

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-30">
        <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={800} rotation={-72} isSpin={true} spinDuration='60s'>
          <StarIcon className='size-28 text-emerald-300' isSpin={true} spinDuration='60s'/>
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} isSpin={true} spinDuration='20s'>
          <StarIcon className='size-12 text-emerald-300' />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} isSpin={true} spinDuration='30s'>
          <StarIcon className='size-8 text-emerald-300' />
        </HeroOrbit>

        <HeroOrbit size={430} rotation={-14} isSpin={true} spinDuration='15s'>
          <SparkleIcon className='size-8 text-emerald-300/20' />
        </HeroOrbit>

      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={AvatarImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative"><div className="bg-green-500 size-2.5 rounded-full animate-ping-large absolute"></div></div>
            
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">


          <h1 className="md:text-5xl font-serif text-3xl text-center mt-8 tracking-wide">Building Exceptional User Experiences</h1>
          <p className="md:text-lg text-center mt-4 text-white/60">
          I am a software engineer focused on crafting outstanding user experiences. I’m driven by the passion to design products that seamlessly blend beauty with functionality.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: 'smooth' })}>
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span className="">🫡</span>
            <span className="font-semibold">Lets Connect</span>
          </button>
        </div>
      </div>
    </div>
  )
};
