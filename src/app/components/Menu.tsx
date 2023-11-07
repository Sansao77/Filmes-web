import { SetStateAction, Dispatch} from 'react';
import {Container, ListaItem} from './styles';
import {filmes} from '../dadosFilmes';
import './menu.css'


export default function Menu ({active}:{active: Dispatch<SetStateAction<boolean>>}) {

  const fecharMenu = () =>{
    active(false);
  }
  const filmesLista = filmes.map((filme,indice) =>{
    const texto = `#${filme.titulo}`;
    return (
      <ListaItem key= {indice} href={texto}>
        {filme.titulo};
      </ListaItem>
    );
  });

  return(
      <Container>
        {filmesLista}
      </Container>
    );
}
