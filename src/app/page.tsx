import Footer from "./components/Footer";
import Header from "./components/Header";
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
      <Footer />
    </>
  );
}
