import styles from "./footer.module.css";
import { AiFillGithub, AiFillPlayCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.footer_logo}>
          <AiFillPlayCircle />
          <h2>CineLista</h2>
        </div>

        <div className={styles.footer_links}>
          <ul>
            {/* <span>Desenvolvido por:</span> */}
            <li>
              <a href="https://github.com/GabPSant" target="_blank">
                <AiFillGithub />
                Gabriel P.Santos
              </a>
            </li>
            <li>
              <a href="https://github.com/Giselle-Jacinto" target="_blank">
                <AiFillGithub />
                Giselle Jacinto
              </a>
            </li>
            <li>
              <a href="https://github.com/MariCruz31" target="_blank">
                <AiFillGithub />
                Mariene Cruz
              </a>
            </li>
            <li>
              <a href="https://github.com/sthallysson" target="_blank">
                <AiFillGithub />
                Thallysson Silva
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <p>&copy; 2023 CineLista. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
