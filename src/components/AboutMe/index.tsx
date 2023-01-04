import { BsLinkedin, BsTwitter, BsDiscord } from "react-icons/bs";
import Image from "next/image";

import styles from "../../../styles/AboutMe.module.css";

export const AboutMe = () => {
  return (
    <section id="about-me" className={styles.aboutMe}>
      <h1 className={styles.title_text}>Acerca de mí</h1>

      <p className={styles.description_text}>
        Soy tecnólogo en sistemas, orientado hacia el cumplimiento de resultados
        y con excelentes habilidades comunicativas. Creativo, enfocado en la
        resolución de problemas y en el buen relacionamiento interpersonal.
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
          <p>Frontend Developer</p>
          <div className={styles.cardSocial}>
            <a href="https://www.linkedin.com/in/juan-david-saldarriaga-ospina-268224197/">
              <BsLinkedin />
            </a>
            <a>
              <BsDiscord />
            </a>
            <a href="https://twitter.com/Juandaosp">
              <BsTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
