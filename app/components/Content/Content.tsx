import styles from "./Content.module.css";
import { Projects } from "../Projects/Projects";

export const Content = () => {
  return (
    <div
      id="content"
      className={
        "h-auto flex flex-col items-center gap-x-12 text-white " +
        styles.gradient
      }
    >
      <div className="pt-6">
        <h1 className="text-3xl underline text-black m-2">Projects</h1>
        <Projects />
      </div>
    </div>
  );
};
