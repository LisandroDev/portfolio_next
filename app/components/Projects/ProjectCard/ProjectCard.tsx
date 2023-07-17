import Image, { StaticImageData } from "next/image";
import { FiGithub, FiLink } from "react-icons/fi";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  stack: Array<string>;
  description: string;
  title: string;
  image: StaticImageData;
  code: string;
  liveDemo: string;
}

export const ProjectCard = ({stack,image,description,title,code,liveDemo}: ProjectCardProps) => {
  return (
    <div
      className={`flex text-black flex-col items-center ${styles.shadowBox} md:flex-row max-w-4xl h-auto p-6 gap-x-4 p-2 rounded-2xl bg-[#fff] `}
    >
      <div className={`self-center max-w-md ${styles.shadowBox} rounded-3xl`}>
        <Image src={image} className="rounded-3xl h-full" alt="jslogo" />
      </div>

      <div className="mt-6 max-w-sm flex flex-col gap-8">
        {" "}
        <h1 className="text-2xl text-center ">{title}</h1>{" "}
        <p className="text-md text-center text-[#767676] ">
          {description}
        </p>
        <div className="self-center flex-wrap flex flex-row gap-4 ">
          {stack.map(e => <p key={e} className={`${styles.stackBox} `}>{e}</p>)}
        </div>
        <div className="z-10 self-center flex flex-row gap-4">
          <a target="_blank" href={code}>
            <p className="flex gap-1 transition-all hover:text-blue-600">
              Code <FiGithub size={'20px'} />
            </p>{" "}
          </a>
          <a target="_blank" href={liveDemo}>
            <p className="flex gap-1 transition-all hover:text-blue-600">
              Live Demo <FiLink size={'20px'} />
            </p>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
