import { useState } from "react";

import { FiMenu } from "react-icons/fi";

import { NavbarMobile } from "../NavbarMobile";
import styles from "../../../styles/Header.module.css";
import { Button } from "../Button";

export const Header = () => {
  const [activateMenu, setActivateMenu] = useState(false);

  const onActivateMenu = () => setActivateMenu(!activateMenu);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <ul>
            <li>Portfolio</li>
            <li>
              <a href="#about-me">Acerca de mí</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#knowledges">Conocimientos</a>
            </li>
            <li>
              <a href="">Certificaciones</a>
            </li>
          </ul>
          <div className={styles.contact}>
            <Button 
              background="#000"
              text="Contacto"
              textColor="#FFF"
              url="mailto:juan.ospinal@outlook.com"
            />
          </div>
          <div className={styles.menuMobile}>
            <FiMenu onClick={onActivateMenu} />
          </div>
        </nav>
      </header>
      {activateMenu && <NavbarMobile />}
    </>
  );
};
