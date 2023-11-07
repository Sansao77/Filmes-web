"use client";

import Header from "./components/Header";
import Menu from './components/Menu'
import { Introducao } from "./components/Header";
import MovieList from "./components/MovieList";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Introducao />
        <MovieList />
      </main>
    </>
  );
}
