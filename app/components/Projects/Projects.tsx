import { ProjectCard } from "./ProjectCard/ProjectCard";
import neithaImg from "../../assets/test.png";
import budgetAppImg from "../../assets/projectsimages/budgetapp.png";
import whereisAppImg from "../../assets/projectsimages/whereis.jpeg"
import urlShortenerImg from '@/app/assets/UrlShortener.png'
import messengerLogin from '@/app/assets/projectsimages/messenger_login.png'

const neithaclothesDescription = `Neithaclothes is an online platform for buying products. It provides
a user-friendly interface for browsing, purchasing, and shipping
items.`;

const messengerAppDescription = ` Connect effortlessly using our user-friendly messaging platform powered by websockets.`

const URLShortenerDescription = `Simplify and optimize your links with our powerful tool. Transform long URLs into concise, memorable ones for easy sharing and improved online experience. Users can rack link performance .`;

const budgetAppDescription = `Budget app was created as part for Alkemy Challenge,that required participants to build a budget app that could separate income and expenses, using a SQL database.`;

const whereisAppDescription = `"Where's Waldo" style game, players must find three hidden characters: a turtle, a bee reading a book, and a flying squirrel, they can track their scores and compare them with others on the app's scoreboard`

export const Projects = () => {
  return (
    <div className="container-md m-5 gap-5 flex flex-col">
        <ProjectCard
        image={urlShortenerImg}
        title="URL Shortener"
        stack={["React", "PostgreSQL", "Next.JS","TailwindCSS", "DaisyUI", "Prisma"]}
        description={URLShortenerDescription}
        code="https://github.com/LisandroDev/url_shortener"
        liveDemo="https://urlshort-psi.vercel.app/"
      />
      <ProjectCard
        image={messengerLogin}
        title="Messenger App"
        stack={["React", "PostgreSQL", "Next.JS","TailwindCSS", "Prisma", "Express", "Web Sockets"]}
        description={messengerAppDescription}
        code="https://github.com/LisandroDev/messenger"
        liveDemo="https://messengerapp-27vj.onrender.com/"
      />
      <ProjectCard
        image={neithaImg}
        title="Neithaclothes"
        stack={["React", "PostgreSQL", "Express.JS","TailwindCSS"]}
        description={neithaclothesDescription}
        code="https://github.com/LisandroDev/ecommerce"
        liveDemo="https://ecommerce-bzbh.vercel.app/"
      />
      <ProjectCard
        image={budgetAppImg}
        title="Budget App"
        stack={["React", "PostgreSQL", "Express.JS","Bootstrap"]}
        description={budgetAppDescription}
        code="https://github.com/LisandroDev/budget_app"
        liveDemo="https://budgetapp-5q0m.onrender.com/"
      />
            <ProjectCard
        image={whereisAppImg}
        title="Where is"
        stack={["React", "MongoDB", "Express.JS","TailwindCSS"]}
        description={whereisAppDescription}
        code="https://github.com/LisandroDev/whereis"
        liveDemo="https://whereis.onrender.com"
      />
    </div>
  );
};
