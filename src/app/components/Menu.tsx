/*import { useState } from 'react';
import {filmes} from '../dadosFilmes';
import './menu.css'


export default function Menu () {
  const [estaAberto, setEstaAberto] = useState(false);
  const filmesLista = filmes.map((filme,indice) =>{
    const texto = `#${filme.titulo}`;
    return (
      <a key= {indice} href={texto}>
        {filme.titulo};
      </a>
    );
  });

  return(
      <aside>
        {filmesLista}
      </aside>
    );
}
 */