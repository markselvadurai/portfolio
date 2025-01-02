"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import AngularIcon from "@/assets/icons/angular.svg";
import GithubIcon from "@/assets/icons/github.svg";
import PythonIcon from "@/assets/icons/python.svg";
import cSharpIcon from "@/assets/icons/c-sharp.svg";
import FlaskIcon from "@/assets/icons/flask.svg";
import MongooseIcon from "@/assets/icons/Mongoose.js.svg";
import MySqlIcon from "@/assets/icons/mysql.svg";
import NextIcon from "@/assets/icons/Next.js.svg";
import TailwindIcon from "@/assets/icons/Tailwind CSS.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import { StarsBackground } from "@/components/ui/stars-background";
import AvatarIcon from "@/assets/images/AvatarMaker.png";
import Toronto from "@/assets/images/toronto.png";
import BookCover from "@/assets/images/book-cover.png";

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    title: 'TypeScript',
    iconType: TypeScriptIcon,
  },
  {
    title: 'Tailwind CSS',
    iconType: TailwindIcon,
  },
  {
    title: 'Next.js',
    iconType: NextIcon,
  },
  {
    title: 'MySQL',
    iconType: MySqlIcon,
  },
  {
    title: 'Mongoose.js',
    iconType: MongooseIcon,
  },
  {
    title: 'Flask',
    iconType: FlaskIcon,
  },
  {
    title: 'C-Sharp',
    iconType: cSharpIcon,
  },
  {
    title: 'Python',
    iconType: PythonIcon,
  },
  {
    title: 'HTML5',
    iconType: HtmlIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Angular',
    iconType: AngularIcon,
  },
  {
    title: 'GitHub',
    iconType: GithubIcon,
  },
]

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Photography',
    emoji: '📸',
    left: '50%',
    top: '5%',
  },

  {
    title: 'Hiking',
    emoji: '⛰️',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Music',
    emoji: '🎼',
    left: '70%',
    top: '45%',
  },
  {
    title: 'Fitness',
    emoji: '💪',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '45%',
    top: '70%',
  },
]

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28 relative" id="About">
      <StarsBackground className=''/>
      <div className="container">
        <SectionHeader eyebrow="About Me" title="A glimpse into My World" description="Learn more about who I am, what I do, and what inspires me." />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid md:grid-cols-5 gap-8 sm:grid-cols-1 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Reads" description="Explore the books shaping my perspectives." />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={BookCover} alt="Book cover" className=""/>
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <div>
                <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to craft exceptional digital experiences." className="" />
              </div>
              <div className="">
                <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
                <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:15s]" />
              </div>
            </Card>
          </div>
          <div className="grid md:grid-cols-5 gap-8 sm:grid-cols-1 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <div>
                <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realm." className="px-6 py-6" />
              </div>
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby, index) => (
                  <motion.div key={index} drag dragConstraints={constraintRef} className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 items-center absolute "
                    style={{ left: hobby.left, top: hobby.top }}>
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>

                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={Toronto} alt="Map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping-large [animation-duration:2s]">

                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10">

                </div>
                <Image src={AvatarIcon}  alt="Smiling memoji" className="size-15 -translate-y-3" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
