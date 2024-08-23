import { 
    DiJsBadge, 
    DiReact, 
    DiHtml5, 
    DiCss3 
} from "react-icons/di";
import { SiTypescript } from "react-icons/si";

import Image from "next/image";

import styles from "../../../styles/Content.module.css";
import Link from "next/link";

export const InitialContent = () => {
  return (
    <>
      <h1 className={styles.title}>
        ¡Hola! Soy Juan David
        <br></br>
        Software Developer
      </h1>

      <p className={styles.description}>
        Desarrollador de software con conocimiento y experiencia en tecnologías web
        JavaScript, TypeScript, Angular y React, como también tecnologías para desarrollo backend
        de las cuales se destacan Python, FastAPI, Flask, Node.js, Express.js, Firebase, PostgreSQL, 
        MongoDB y Docker.
      </p>

    <div className={styles.wrapperButtons}>
      <button className={styles.btn}>
        <Link href="https://www.linkedin.com/in/juan-david-saldarriaga-ospina-268224197/" target="_blank">
          Linkedin 
          <span>→</span>
        </Link>
      </button>

      <button className={styles.btn}>
        <Link href="https://github.com/juandaospina" target="_blank">
          GitHub 
          <span>→</span>
        </Link>
      </button>
    </div>

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
