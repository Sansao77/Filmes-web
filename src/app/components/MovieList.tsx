import Image, { StaticImageData } from "next/image";
import { Conteudo } from "./styles";
import { ReactNode } from "react";
import { filmes } from "../dadosFilmes";
import styles from "./movieList.module.css";
import Movie from "./Movie";

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

  return <ul className={styles.movieList_container}>{movieList}</ul>;
}
