import Image, { StaticImageData } from "next/image";
import styles from "./movieItem.module.css";

interface MovieProps {
  titulo: string;
  descricao: Array<string>;
  imagemFilme: StaticImageData;
}

export default function MovieItem({
  titulo,
  imagemFilme,
  descricao,
}: MovieProps) {
  return (
    <li className={styles.filme}>
      <h2 id={titulo}>{titulo}</h2>
      <div className={styles.img_container}>
        <Image src={imagemFilme} alt={titulo} />
      </div>
      {descricao.map((p) => (
        <p key={crypto.randomUUID()}>{p}</p>
      ))}
    </li>
  );
}
