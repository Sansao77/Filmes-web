"use client"

import "./header.css";
import './menu.css'
import Image from "next/image";
import filmes from "../../../public/filmes.jpg";
import { useState } from 'react';
import {filmes as movies} from '../dadosFilmes';

// 1º valor: largura, 2º valor: altura;
export const tamanhoPadrao = [800, 480];

// Só poder existir um default por arquivo tsx
export default function Header() {
  const [estaAberto, setEstaAberto] = useState(false);
  return (
    <header>
      <h1 id="titulo">Lista de Filmes</h1>

      <button type="button" className="botaoMenu" onClick={() =>{setEstaAberto(!estaAberto)}}>
        <h3>Menu</h3>
      </button>
    </header>
  );
}

export function Menu({estaAberto}:{estaAberto:boolean}){
  const filmesLista = movies.map((filme,indice) =>{
    const texto = `#${filme.titulo}`;
    return (
      <a key= {indice} href={texto}>
        {filme.titulo};
      </a>
    );
  });

  return(
      <aside className={estaAberto?"":"invisivel"}>
        {filmesLista}
      </aside>
    );
}

/*
function mostrarMenu(){
  const visibilidadeMenu = document.querySelector("aside") satisfies HTMLElement|null;
  if(visibilidadeMenu?.classList?.contains("invisivel")){
    visibilidadeMenu.classList.remove("invisivel");
  }
  else visibilidadeMenu?.classList.add("invisivel");
  return undefined
}
*/

export function Introducao() {
  return (
    <div>
      <h2>Filmes favoritos</h2>
      <Image
        src={filmes}
        alt="imagem de filmes"
        width={tamanhoPadrao[0]}
        height={tamanhoPadrao[1]}
      />
      <div>
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
