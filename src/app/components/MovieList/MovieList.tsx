import { filmes } from "../../dadosFilmes";
import styles from "./movieList.module.css";
import MovieItem from "../MovieItem/MovieItem";

export default function MovieList() {
  const movieList = filmes.map(({ titulo, imagemFilme, descricao, id }) => (
    <MovieItem
      key={id}
      titulo={titulo}
      imagemFilme={imagemFilme}
      descricao={descricao}
    />
  ));

  return <ul className={styles.movieList_container}>{movieList}</ul>;
}
