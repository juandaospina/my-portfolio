import Image from "next/image";

import { BsLinkedin } from "react-icons/bs";

import styles from "../../../styles/AboutMe.module.css";

export const AboutMe = () => {
  return (
    <section id="about-me" className={styles.aboutMe}>
      <h1 className={styles.title_text}>Acerca de mí</h1>

      <p className={styles.description_text}>
        Tecnólogo en sistemas con experiencia en diseño, desarrollo, pruebas y
        mantenimiento de software. Con dominio de lenguajes de programación 
        para el desarrollo de sistemas del lado del cliente y servidor. Me gusta escribir 
        código de calidad que permita seguir el lineamiento de los objetivos, como también 
        las mejores prácticas de rendimiento y calidad de código. Creativo y con buenas habilidades 
        comunicativas.
      </p>

      <div className={styles.cardAboutMe}>
        <Image
          src="/photo.png"
          alt="photo Juan David"
          width={100}
          height={100}
          style={{
            borderRadius: "50%",
            boxShadow: "0 2px 8px rgb(0 0 0 / 20%)",
          }}
        />
        <div>
          <h2>Juan David</h2>
          <h2>Saldarriaga Ospina</h2>
          <p>Software Developer</p>
          <div className={styles.cardSocial}>
            <a href="https://www.linkedin.com/in/juan-david-saldarriaga-ospina-268224197/">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
