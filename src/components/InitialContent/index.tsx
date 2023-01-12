import { 
    DiJsBadge, 
    DiReact, 
    DiHtml5, 
    DiCss3 
} from "react-icons/di";
import { FaLinkedinIn } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

import Image from "next/image";

import styles from "../../../styles/Content.module.css";

export const InitialContent = () => {
  return (
    <>
      <h1 className={styles.title}>
        ¡Hola! Soy Juan David Ospina
        <br></br>
        Frontend Developer
      </h1>

      <p className={styles.description}>
        Tecnólogo en desarrollo de software, con experiencia en desarrollo
        Frontend usando tecnologías y lenguajes como, HTML5, CSS3, JavaScript,
        TypeScript, React JS, Redux Toolkit, React Hook Form, Next JS entre otras tecnologías
      </p>

      <button className={styles.btn}>
        <FaLinkedinIn />
        <a href="https://www.linkedin.com/in/juan-david-saldarriaga-ospina-268224197/">
          Linkedin
        </a>
      </button>

      <div className={styles.containerImg}>
        <Image
          src="/code.png"
          alt="image code"
          width={1100}
          height={480}
          quality={100}
          priority
          style={{
            borderRadius: "8px",
          }}
        />

        <div>
          <span>
            <DiHtml5 color="#db4925" />
            <DiCss3 color="#0069b2" />
            <DiJsBadge color="#ffdf00" />
          </span>
        </div>

        <div>
          <span>
            <DiReact color="#09cff4" />
            React Js
          </span>
        </div>

        <div>
          <span>
            <SiTypescript color="#2f72be" />
            TypeScript
          </span>
        </div>
      </div>
    </>
  );
};
