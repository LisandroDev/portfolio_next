import Image from "next/image";
import jsLogo from "../../../assets/Javascript.svg";

export const ProjectCard = () => {
  return (
    <div className="flex flex-row gap-x-4 shadow-[2px_2px_0px_0px_rgba(109,40,217)]">
      <Image src={jsLogo} height="120" width="120" alt="jslogo" />
      <div className="max-w-sm">
        {" "}
        <h1 className="text-3xl">Neithaclothes</h1>{" "}
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          vulputate semper justo, et viverra neque lobortis semper. Quisque at
          nulla augue. Cras eget massa sem. Donec sagittis nunc sit amet posuere
          pretium. Nullam sagittis, mauris quis scelerisque feugiat, arcu quam
          laoreet diam, quis porttitor lacus diam non ligula. Donec ut feugiat
          ex. Ut ornare mattis lacinia. Etiam venenatis venenatis nulla in
          porttitor. Pellentesque condimentum molestie elit, eu malesuada leo
          pulvinar nec.
        </p>
      </div>
    </div>
  );
};
