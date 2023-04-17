import { ProjectCard } from "./ProjectCard/ProjectCard";
import neithaImg from "../../assets/test.png";
import budgetAppImg from "../../assets/projectsimages/budgetapp.png";
import whereisAppImg from "../../assets/projectsimages/whereis.jpeg"

const neithaclothesDescription = `Neithaclothes is an online platform for buying products. It provides
a user-friendly interface for browsing, purchasing, and shipping
items.`;

const budgetAppDescription = `Budget app was created as part for Alkemy Challenge,that required participants to build a budget app that could separate income and expenses, using a SQL database.`;

const whereisAppDescription = `"Where's Waldo" style game, players must find three hidden characters: a turtle, a bee reading a book, and a flying squirrel, they can track their scores and compare them with others on the app's scoreboard`

export const Projects = () => {
  return (
    <div className="container-md m-5 gap-5 flex flex-wrap">
      <ProjectCard
        image={neithaImg}
        title="Neithaclothes"
        stack={["React", "PostgreSQL", "Express.JS","TailwindCSS"]}
        description={neithaclothesDescription}
        code="https://github.com/LisandroDev/ecommerce"
        liveDemo="https://neithaclothes-ecommerce.onrender.com/"
      />
      <ProjectCard
        image={budgetAppImg}
        title="Budget App"
        stack={["React", "PostgreSQL", "Express.JS","Bootstrap"]}
        description={budgetAppDescription}
        code="https://github.com/LisandroDev/ecommerce"
        liveDemo="https://neithaclothes-ecommerce.onrender.com/"
      />
            <ProjectCard
        image={whereisAppImg}
        title="Where is"
        stack={["React", "MongoDB", "Express.JS","Vanilla CSS"]}
        description={whereisAppDescription}
        code="https://github.com/LisandroDev/whereis"
        liveDemo="https://whereis.onrender.com"
      />
    </div>
  );
};
