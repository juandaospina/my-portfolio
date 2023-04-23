import Image from "next/image";
import styles from "../../../styles/Knowledges.module.css";

import { KNOWLEDGES } from "../../constants";

export const Knowledges = () => {
  return (
    <section id="knowledges" className={styles.knowledges}>
      <h1 className={styles.title}>Conocimientos</h1>

      <div className={styles.container_skills}>
        {Object.entries(KNOWLEDGES).map(([key, { img, alt }]) => (
          <div key={key} className={styles.card_skills}>
            <Image src={img} alt={alt} width={50} height={50} />
            <span>{key}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
