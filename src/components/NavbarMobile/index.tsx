import styles from "../../../styles/NavbarMobile.module.css";

export const NavbarMobile = () => {
  return (
    <>
      <div className={styles.menuMobileContainer}>
        <div className={styles.navigationMobile}>
          <nav className={styles.nav}>
            <ul>
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
          </nav>
        </div>
      </div>
    </>
  );
};
