import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import styles from "./movie.module.css";

interface MovieProps {
  titulo: string;
  children: ReactNode;
  imagemFilme: StaticImageData;
}

export default function Movie({ titulo, imagemFilme, children }: MovieProps) {
  return (
    <li className={styles.filme}>
      <h2 id={titulo}>{titulo}</h2>
      <div className={styles.img_container}>
        <Image src={imagemFilme} alt="" />
      </div>
      {children}
    </li>
  );
}
