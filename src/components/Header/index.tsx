import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import styles from "../../../styles/Header.module.css";
import { NavbarMobile } from "../NavbarMobile";

export const Header = () => {
    const [activateMenu, setActivateMenu] = useState(false);

    const onActivateMenu = () => setActivateMenu(!activateMenu);

    return (
        <>
            <header className={styles.header}>
                <nav className={styles.navigation}>
                    <ul>
                        <li>
                            Portfolio
                        </li>
                        <li>
                            <a href="#about-me">Acerca de mí</a>
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
                    <div>
                        <FiMenu onClick={onActivateMenu}/>
                    </div>

                </nav>
            </header>
            { activateMenu && <NavbarMobile />}
        </>
    )
}