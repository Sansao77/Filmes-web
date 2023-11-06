import "./header.css";
import Image from "next/image";
import filmes from "../../../public/filmes.jpg";

// 1º valor: largura, 2º valor: altura;
export const tamanhoPadrao = [800, 480];

// Só poder existir um default por arquivo tsx
export default function Header() {
  return (
    <header>
      <h1 id="titulo">Lista de Filmes</h1>

      <button type="button" className="botaoMenu">
        <h3>Menu</h3>
      </button>
    </header>
  );
}

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
