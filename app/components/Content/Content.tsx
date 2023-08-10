import styles from "./Content.module.css";
import { Projects } from "../Projects/Projects";
import { Contact } from "../Contact/Contact";

export const Content = () => {
  return (
    <div
      className={
        "min-h-screen flex flex-col items-center gap-x-12 text-white " +
        styles.gradient
      }
    >
      <div id="projects" className="pt-6">
        <h1 className="text-3xl  ml-2 text-center  font-bold text-black">Projects</h1>
        <Projects />
      </div>
      <div id="contact" className="min-h-[50vh] w-full  mt-6">
        <Contact />
      </div>
    </div>
  );
};
