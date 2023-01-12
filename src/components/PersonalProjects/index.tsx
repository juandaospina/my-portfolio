import { Button } from "../Button";
import Image from "next/image";

import styles from "../../../styles/Projects.module.css";

export const PersonalProjects = () => {
  return (
    <section id="projects" className={styles.grid}>
      <h1 className={styles.title}>Proyectos</h1>

      <p className={styles.description}>
        He desarrollado proyectos Frontend haciendo uso de tecnologías web, 
        frameworks y librerías para la mejora de flujos de trabajo, como también,
        herramientas que facilitan la implementación y el control en los ambientes de
        desarrollo.
      </p>
      <div className={styles.card}>
        <div>
          <Image
            src="/gif-chat.gif"
            alt="photo Juan David"
            width={335}
            height={700}
            style={{
              position: "relative",
              marginTop: "18px",
            }}
          />
          <Image
            src="/iphone-mockup.png"
            alt="photo Juan David"
            width={360}
            height={740}
            style={{
              position: "absolute",
            }}
          />
        </div>
        <div>
          <span>#React #JavaScript #Firebase #Firestore #Sass</span>
          <h2>Chat grupal</h2>
          <p>
            Proyecto web que permite iniciar un chat grupal, a la vez que hace
            uso de api de autenticación de Google para el control de sesiones
            del usuario; haciendo uso de React JS, Firestore database y Firebase
            authentication
          </p>
          <div>
            <Button
              classBtn="btn-primary"
              text="Demo"
              url="https://groupchat-app.vercel.app/"
            />
            <Button
              classBtn="btn-outline-primary"
              text="Código"
              url="https://bitbucket.org/juand_ospina/proyecto-final-sena/"
            />
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div>
          <Image
            src="/pokedex.gif"
            alt="photo Juan David"
            // width={340}
            // height={710}
            width={335}
            height={700}
            style={{
              position: "relative",
              marginTop: "18px",
            }}
          />
          <Image
            src="/iphone-mockup.png"
            alt="photo Juan David"
            width={360}
            height={740}
            style={{
              position: "absolute",
            }}
          />
        </div>
        <div>
          <span>#ReactNative #JavaScript #PokeApi</span>
          <h2>Pokedex App</h2>
          <p>
            Aplicación movil que permite traer una lista de pokemones haciendo
            uso de la api PokeApi, así mismo, conocer algunas características de
            estos a través de datos brindados por el servicio.
          </p>
          <div>
            <Button
              classBtn="btn-outline-primary"
              text="Código"
              url="https://github.com/juandaospina/pokedex-app"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
