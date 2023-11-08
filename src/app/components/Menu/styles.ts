import styled from 'styled-components'

export const Container = styled.aside`
    background-color: #171923;
    position: fixed;
    scroll-behavior: auto;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 29rem;
    left: ${props => props ? '0' : '-100%'};
    overflow-y: scroll;
    animation: mostrarMenu .4s;
    /animation: esconderMenu .4s;/

    @keyframes mostrarMenu {
        from {
            opacity: 0;
            width: 0;
        }
        to {
            opacity: 1;
            width: 300px;
        }
    }
;`

export const Conteudo = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1A202C; 
    font-size: 20px;
    color: white;
    padding: 2rem;
    cursor: pointer;
    border-radius: 10px;
    margin: 0 15px 20px;

> svg {
        margin: 0 20px;
    }

    &:hover {
        background-color: black;
    }
;`

export const ListaItem = styled.a`
    display: flex;
    align-items: center;
    background-color: #1A202C; 
    font-size: 20px;
    color: white;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
    margin: 0 15px 20px;

    &:hover {
        background-color: black;
    }
;`

export const ListaBotao = styled.button`
    display: flex;
    align-self: end;
    background-color: #1A202C;
    width: min-content;
    font-size: 15px;
    color: white;
    padding: 15px;
    cursor: pointer;
    border-radius: 10px;
    margin: 0 15px 20px;

    &:hover {
        background-color: black;
    }
`