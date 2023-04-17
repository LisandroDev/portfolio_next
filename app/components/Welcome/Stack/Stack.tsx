import Image from "next/image";
import jsLogo from '../../../assets/Javascript.svg'
import tsLogo from '../../../assets/typescript.svg'
import nodeLogo from '../../../assets/nodejs.svg'
import pythonLogo from '../../../assets/python.svg'
import reactLogo from '../../../assets/react.svg'
import postgreLogo from '../../../assets/postgresql.svg'
import tailwindLogo from '../../../assets/tailwindcss.svg'
import bootstrapLogo from '../../../assets/bootstrap.svg'
import mongoLogo from '../../../assets/mongodb.svg'
import nextLogo from '../../../assets/next.svg'


export const Stack = () => {
  return (
    <div className="flex flex-col transition-all self-center md:flex-row justify-center align-center gap-x-5 mt-12">
      <p className="text-normal md:text-xl font-bold text-center ">
        Tech Stack <span className="hidden md:inline ml-5 ">|</span>
      </p>
      <ul className="grid grid-cols-2 gap-4 md:flex md:gap-x-4 md:flex-row">
        <li>
            <Image
              src={jsLogo}
              width="42"
              height="42"
              alt="JavaScript Logo"
            />
        </li>
        <li><Image
              src={tsLogo}
              width="42"
              height="42"
              alt="tsLogo"
            /></li>
        <li><Image
              src={nodeLogo}
              width="42"
              height="42"
              alt="nodeLogo"
            /></li>
        <li><Image
              src={postgreLogo}
              width="42"
              height="42"
              alt="postgreLogo"
            /></li>
        <li><Image
              src={reactLogo}
              width="42"
              height="42"
              alt="reactLogo"
            /></li>
                    <li><Image
              src={nextLogo}
              width="42"
              height="42"
              alt="tailwindLogo"
            /></li>
        <li><Image
              src={mongoLogo}
              width="42"
              height="42"
              alt="mongoLogo"
            /></li>
                <li><Image
              src={tailwindLogo}
              width="42"
              height="42"
              alt="tailwindLogo"
            /></li>
                <li><Image
              src={bootstrapLogo}
              width="42"
              height="42"
              alt="bootstrapLogo"
            /></li>
        <li><Image
              src={pythonLogo}
              width="42"
              height="42"
              alt="reactLogo"
            /></li>

      </ul>
    </div>
  );
};
