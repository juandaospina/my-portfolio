import { Button } from "../Button";
import Image from "next/image";

import styles from "../../../styles/Projects.module.css";

const tecnologies_chat = ["React", "JavaScript", "Firebase", "redux", "MobileFirst"];
const tecnologies_pokedex = ["React", "JavaScript", "Firebase", "redux", "MobileFirst"];


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
            src="/gifchat.gif"
            alt="Gif chat"
            width={335}
            height={700}
            style={{
              position: "relative",
              marginTop: "18px",
            }}
          />
          <Image
            src="/iphone-mockup.png"
            alt="Mockup phone"
            width={360}
            height={740}
            style={{
              position: "absolute",
            }}
          />
        </div>

        <div>
          {/* <div className={styles.container_tecnologies}>
            {tecnologies_chat.map((item, index) => (
                <span 
                  key={index}
                  className={styles.tecnologies}
                >
                  {item}
                </span>
            ))}
          </div> */}
          <span>React #Redux #Firebase #Firestore #Sass #MobileFirst</span>
          <h2>Chat grupal</h2>
          <p>
            Proyecto web que permite iniciar una conversación en un chat grupal, 
            a la vez que habilita la creación de cuenta, login de correo y contraseña,
            autenticación con Google y visualización de datos del perfil del usuario.
          </p>
          <div>
            <Button
              background="#24292f"
              text="Demo"
              url="https://groupchat-app.vercel.app/"
            />
            <Button
              background="#FFF"
              textColor="#000"
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
            alt="Gif pokedex app"
            width={335}
            height={700}
            style={{
              position: "relative",
              marginTop: "18px",
            }}
          />
          <Image
            src="/iphone-mockup.png"
            alt="Mockup phone"
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
            Aplicación movil que muestra una lista de pokemones haciendo
            uso de la api PokeApi, así mismo, conocer algunas características de
            estos a través de datos brindados por el servicio.
          </p>
          <div>
            <Button
              background="#FFF"
              textColor="#000"
              text="Código"
              url="https://github.com/juandaospina/pokedex-app"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
