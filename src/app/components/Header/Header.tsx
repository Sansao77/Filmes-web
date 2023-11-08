"use client";

/* import "./header.css"; */
import Image from "next/image";
import banner from "../../../../public/banner.jpg";
import Menu from "../Menu/Menu";
import { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";

import styles from "./header.module.css";

// Só poder existir um default por arquivo tsx
export default function Header() {
  const [estaAberto, mostrarMenu] = useState(false);

  return (
    <header className={styles.header}>
      <h1 id="titulo" className={styles.title}>
        <AiFillPlayCircle />
        <span>CineLista</span>
      </h1>

      <button
        type="button"
        className={styles.botaoMenu}
        onClick={() => {
          mostrarMenu(!estaAberto);
        }}
      >
        <h3>Menu</h3>
      </button>
      {estaAberto && <Menu active={mostrarMenu} />}
    </header>
  );
}

export function Introducao() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Filmes favoritos</h2>
      <div className={styles.img_container}>
        <Image
          src={banner}
          alt="imagem de filmes"
          className={styles.banner_img}
        />
      </div>

      <div className={styles.descricao}>
        <span>
          O universo do cinema está cheio de produções badaladas entre o público
          e a crítica. Basta ver, por exemplo, obras de super-heróis dos
          quadrinhos, como Batman (DC, 2022), ou continuações de franquias
          bilionárias, como 007: Sem Tempo Para Morrer (2021). Com números
          astronômicos de bilheteria, audiência e salas em exibição e
          repercussão na imprensa, fica difícil para alguns cinéfilos ficarem
          por dentro de produções mais discretas, porém não menos relevantes.
        </span>
      </div>
    </div>
  );
}
