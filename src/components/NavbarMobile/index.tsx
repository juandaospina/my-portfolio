import styles from "../../../styles/NavbarMobile.module.css";

export const NavbarMobile = () => {
    return(
        <>
            <div className={styles.menuMobileContainer}>
                <div className={styles.navigationMobile}>
                    <nav className={styles.nav}>
                        <ul>
                            <li>
                                <a href="">Acerca de mí</a>
                            </li>

                            <li>
                                <a href="">Conocimientos</a>
                            </li>

                            <li>
                                <a href="">Proyectos</a>
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
}