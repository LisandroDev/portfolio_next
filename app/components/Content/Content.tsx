import styles from "./Content.module.css";
import { Projects } from "../Projects/Projects";

export const Content = () => {
  return (
    <div
      id="content"
      className={
        "h-screen flex flex-col items-center gap-x-12 text-white " +
        styles.gradient
      }
    >
      <div className="pt-6">
        <h1 className="text-xl">Projects</h1>
        <Projects />
      </div>
    </div>
  );
};
