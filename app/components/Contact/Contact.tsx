import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RiFilePaperLine } from "react-icons/ri";
import { IoShareSocialSharp } from "react-icons/io5"
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <div className="justify-evenly m-8 gap-5 flex flex-col md:flex-row flex-wrap text-black">
      <div className="flex flex-col gap-y-8">
        <h1 className="text-3xl"><p className="flex gap-4"> Socials <IoShareSocialSharp /></p></h1>
        <ul className="flex flex-col shrink gap-8">
          <li className={`p-2 text-sm max-w-xs rounded-3xl transition-all ease-in-out duration-300 hover:text-blue-600 ${styles.shadowBox}`}>
            <a target="_blank" href="https://github.com/LisandroDev"><p className="flex items-center gap-4"><BsGithub size={"40px"} /> LisandroDev</p></a>

          </li>{" "}
          <li className={`p-2 rounded-3xl max-w-xs  text-sm transition-all ease-in-out duration-300 hover:text-blue-600 ${styles.shadowBox}`}>
          <a target="_blank" href="https://www.linkedin.com/in/lisandrorubianes/"><p className="flex items-center gap-4"><BsLinkedin size={"40px"} /> Lisandro Rubianes</p></a>
          </li>
          <li className={`p-2 rounded-3xl text-sm max-w-xs  transition-all ease-in-out duration-300 hover:text-blue-600 ${styles.shadowBox}`}>
          <a target="_blank" href="mailto:lisandrorubi@gmail.com"><p className="flex items-center gap-4"><MdEmail size={"40px"} /> lisandrorubi@gmail.com</p></a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-y-8">
        <h1 className="text-3xl"><p className="flex gap-4">Resumes <RiFilePaperLine /></p></h1>
        <ul className="flex flex-col gap-8">
        <li className={`p-2 rounded-3xl text-sm max-w-xs  transition-all ease-in-out duration-300 hover:text-blue-600 ${styles.shadowBox}`}>
          <a target="_blank" href="https://docs.google.com/document/d/16g0gw2kKwHoQHMgVzNd2gwFZOaOXX7gt"><p className="flex items-center gap-4"><span className="text-xl">🇪🇸</span> Spanish Resume </p></a>
          </li> <li className={`p-2 rounded-3xl text-sm max-w-xs  transition-all ease-in-out duration-300 hover:text-blue-600 ${styles.shadowBox}`}>
          <a target="_blank" href="https://docs.google.com/document/d/1E5n_kuxtpJuGKv0_1Wk4nunKBCYA81hC"><p className="flex items-center gap-4"><span className="text-xl">🇺🇸</span> English Resume</p></a>
          </li>
        </ul>
      </div>
    </div>
  );
};
