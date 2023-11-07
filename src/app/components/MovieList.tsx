import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { filmes } from "../dadosFilmes";
import "./movieList.css";

export default function MovieList() {
  const movieList = filmes.map(
    ({ titulo, imagemFilme, descricao }, idMovie) => (
      <Movie key={idMovie} titulo={titulo} imagemFilme={imagemFilme}>
        {descricao.map((paragrafo, idP) => (
          <p key={idP}>{paragrafo}</p>
        ))}
      </Movie>
    )
  );

  return <ul>{movieList}</ul>;
}

interface MovieProps {
  titulo: string;
  children: ReactNode;
  imagemFilme: StaticImageData;
}

function Movie({ titulo, imagemFilme, children }: MovieProps) {
  return (
    <li className="filme">
      <h2 id={titulo}>{titulo}</h2>
      <Image src={imagemFilme} alt="" />
      {children}
    </li>
  );
}
