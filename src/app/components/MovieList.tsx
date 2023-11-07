import Image, { StaticImageData } from "next/image";
import {Conteudo} from './styles'
import { ReactNode } from "react";
import { filmes } from "../dadosFilmes";
import "./movieList.css";

export default function MovieList() {
  return (
    <ul>
      {filmes.map(({ titulo, imagemFilme, descricao }, indice) => (
        <Movie key= {indice} titulo={titulo} imagemFilme={imagemFilme}>
          {descricao.map((paragrafo) => (
            <p key={paragrafo}>{paragrafo}</p>
          ))}
        </Movie>
      ))}
    </ul>
  );
}

interface MovieProps {
  titulo: string;
  children: ReactNode;
  imagemFilme: string | StaticImageData;
}

function Movie({ titulo, imagemFilme, children }: MovieProps) {
  return (
    <Conteudo className="filme">
      <h2 id={titulo}>{titulo}</h2>
      <Image src={imagemFilme} alt=""/>
      {children}
    </Conteudo>
  );
}
