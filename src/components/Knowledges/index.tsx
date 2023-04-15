import Image from "next/image";
import styles from "../../../styles/Knowledges.module.css";

import HtmlImage from "./../../../public/assets/html.png";
import CssImage from "./../../../public/assets/css.png";
import SassImage from "./../../../public/assets/sass.png";
import JavascriptImage from "./../../../public/assets/javascript.png";
import TypescriptImage from "./../../../public/assets/typescript.png";
import ReactImage from "./../../../public/assets/react.png";
import AngularImage from "./../../../public/assets/angular.png";
import ReduxImage from "./../../../public/assets/redux.png";
import ReactQueryImage from "./../../../public/assets/react-query.png";
import NextImage from "./../../../public/assets/nextjs.png";
import NodeImage from "./../../../public/assets/node.png";
import ExpressImage from "./../../../public/assets/express.png";
import GitImage from "./../../../public/assets/git.png";

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
          <Image src={AngularImage} alt="angular image" width={50} height={50} />
          <span>Angular</span>
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
