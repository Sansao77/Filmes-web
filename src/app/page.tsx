"use client";
import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import { Introducao } from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Introducao />
        <MovieList />
      </main>
      <Footer />
    </>
  );
}
