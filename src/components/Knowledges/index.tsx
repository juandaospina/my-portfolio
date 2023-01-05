import Image from "next/image";
import styles from "../../../styles/Knowledges.module.css";

import HtmlImage from "./../../../public/html.png";
import CssImage from "./../../../public/css.png";
import SassImage from "./../../../public/sass.png";
import JavascriptImage from "./../../../public/javascript.png";
import TypescriptImage from "./../../../public/typescript.png";
import ReactImage from "./../../../public/react.png";
import ReduxImage from "./../../../public/redux.png";
import ReactQueryImage from "./../../../public/react-query.png";
import NextImage from "./../../../public/nextjs.png";
import NodeImage from "./../../../public/node.png";
import ExpressImage from "./../../../public/express.png";
import GitImage from "./../../../public/git.png";

export const Knowledges = () => {
  return (
    <section id="knowledges" className={styles.knowledges}>
      <h1 className={styles.title}>Conocimientos</h1>

      <div className={styles.container_skills}>
        <div className={styles.card_skills}>
          <Image src={HtmlImage} alt="html image" width={50} height={50} />
          <span>HTML5</span>
        </div>

        <div className={styles.card_skills}>
          <Image src={CssImage} alt="css image" width={50} height={50} />
          <span>CSS3</span>
        </div>

        <div className={styles.card_skills}>
          <Image src={SassImage} alt="sass image" width={50} height={50} />
          <span>Sass</span>
        </div>

        <div className={styles.card_skills}>
          <Image src={JavascriptImage} alt="javascript image" width={50} height={50} />
          <span>JavaScript</span>
        </div>

        <div className={styles.card_skills}>
          <Image src={TypescriptImage} alt="typescript image" width={50} height={50} />
          <span>TypeScript</span>
        </div>

        <div className={styles.card_skills}>
          <Image src={ReactImage} alt="react image" width={50} height={50} />
          <span>React JS</span>
        </div>

        <div className={styles.card_skills}>
          <Image src={ReduxImage} alt="redux image" width={50} height={50} />
          <span>Redux</span>
        </div>

        <div className={styles.card_skills}>
          <Image src={ReactQueryImage} alt="reactquery image" width={50} height={50} />
          <span>React Query</span>
        </div>

        <div className={styles.card_skills}>
          <Image src={NextImage} alt="nextjs image" width={50} height={50} />
          <span>Next JS</span>
        </div>

        <div className={styles.card_skills}>
          <Image src={NodeImage} alt="nodejs image" width={50} height={50} />
          <span>Node JS</span>
        </div>

        <div className={styles.card_skills}>
          <Image src={ExpressImage} alt="Express image" width={50} height={50}/>
          <span>Express JS</span>
        </div>

        <div className={styles.card_skills}>
          <Image src={GitImage} alt="git image" width={50} height={50} />
          <span>Git</span>
        </div>
      </div>
    </section>
  );
};
