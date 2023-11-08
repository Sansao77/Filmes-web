import parasempre from "../../public/para-sempre1.webp";
import nottingHill from "../../public/notting-hill2.jpg";
import cibernetica from "../../public/ciberneticas.webp";
import poisoned from "../../public/poisoned.jpg";
import bastardosInglo from "../../public/bastardos-inglorios.png";
import larajaMec from "../../public/laranja-mecanica.jpg";
import interestelar from "../../public/interestellar.jpg";
import vForVen from "../../public/vforvendetta.jpg";
import { StaticImageData } from "next/image";

type Filmes = {
  titulo: string;
  imagemFilme: StaticImageData;
  descricao: Array<string>;
};

export const filmes: Filmes[] = [
  {
    titulo: "Para todos os garotos: Agora e para sempre",
    imagemFilme: parasempre,
    descricao: [
      "Lara está prestes a começar uma nova fase de sua vida após a formatura. Em meio a duas viagens marcantes, ela vai reavaliar como poderão ficar suas relações familiares, a ligação com os amigos e o vínculo com seu namorado",
    ],
  },
  {
    titulo: "Um Lugar Chamado Notting Hill.",
    imagemFilme: nottingHill,
    descricao: [
      "Will (Hugh Grant), pacato dono de livraria especializada em guias de viagem, recebe a inesperada visita de uma cliente muito especial: a estrela de cinema americana Anna Scott (Julia Roberts). Dois ou três encontros fortuitos mais tarde, Will e Anna iniciam um relacionamento tenro, engraçado e cheio de idas e vindas.",
    ],
  },
  {
    titulo: "CIBERNÉTICAS",
    imagemFilme: cibernetica,
    descricao: [
      "CIBERNÉTICAS apresenta os percursos traçados por mulheres poderosas que fazem hoje – e fizeram no passado – o mundo ficar mais humano e menos desigual por meio da inovação tecnológica. Uma reflexão sobre a presença das mulheres no ecossistema que controla modelos de vida no mundo contemporâneo.",
    ],
  },
  {
    titulo: "Contaminação: A Verdade Sobre o que Comemos",
    imagemFilme: poisoned,
    descricao: [
      "Contaminação: A Verdade Sobre o que Comemos é um documentário que explora os perigos ocultos e as práticas questionáveis na indústria de alimentos. O filme revela informações chocantes sobre a segurança e a qualidade dos alimentos que consumimos diariamente, questionando a transparência e a ética das empresas que produzem e comercializam nossos alimentos.",
      "Através de depoimentos de especialistas, investigações e relatos de consumidores, o documentário lança luz sobre questões como a presença de pesticidas em alimentos, a manipulação genética de cultivos, a criação industrial de animais, o uso de aditivos químicos e muito mais. Além disso, destaca as consequências para a saúde humana e o meio ambiente decorrentes dessas práticas.",
      "Contaminação: A Verdade Sobre o que Comemos busca conscientizar o público sobre a importância de fazer escolhas alimentares informadas, promovendo a discussão sobre como podemos garantir a segurança e a qualidade dos alimentos que consumimos em um mundo cada vez mais industrializado e globalizado. Este documentário desafia as normas da indústria alimentícia e nos incentiva a repensar nossos hábitos alimentares em busca de um futuro mais saudável e sustentável.",
    ],
  },
  {
    titulo: "Bastardos Inglórios",
    imagemFilme: bastardosInglo,
    descricao: [
      "Bastardos Inglórios é um filme dirigido por Quentin Tarantino e lançado em 2009. A história se passa durante a Segunda Guerra Mundial e segue um grupo de soldados judeus-americanos que são conhecidos como os 'Bastardos'. Eles são liderados pelo Tenente Aldo Raine, interpretado por Brad Pitt, e têm como missão espalhar o medo entre os nazistas na França ocupada.",
      "A trama também segue Shosanna Dreyfus, interpretada por Mélanie Laurent, uma judia que escapa por pouco de ser morta por soldados nazistas quando era criança. Ela cresce para se tornar proprietária de um cinema em Paris e se torna peça-chave na trama, quando decide vingar a morte de sua família.",
      "O filme combina elementos de drama, ação e humor negro, e é conhecido pelo estilo único de Tarantino, que inclui diálogos afiados e cenas intensas. 'Bastardos Inglórios' recebeu aclamação da crítica e foi indicado a vários prêmios, incluindo o Oscar. É uma visão alternativa da história, reimaginando um grupo de combatentes judeus-americanos que buscam vingança contra os naz",
    ],
  },
  {
    titulo: "Interestelar",
    imagemFilme: interestelar,
    descricao: [
      "Interestelar é um filme de ficção científica dirigido por Christopher Nolan e lançado em 2014. O filme se passa em um futuro distópico onde a Terra está sofrendo com a escassez de recursos e a humanidade está à beira da extinção. A história segue um grupo de astronautas liderado por Cooper, interpretado por Matthew McConaughey, que embarcam em uma missão espacial para encontrar um novo lar para a humanidade em outro sistema solar, já que a Terra se tornou inabitável.",
      "A sinopse do filme gira em torno das complexidades da teoria da relatividade, viagens no tempo e buracos de minhoca, enquanto os personagens enfrentam desafios inimagináveis durante a jornada interestelar. O filme combina elementos de drama, aventura e ficção científica para explorar temas como amor, sacrifício, exploração espacial e a sobrevivência da humanidade.",
      "Interestelar é conhecido por sua abordagem científica e visual impressionante, com efeitos especiais premiados. O elenco também inclui Anne Hathaway, Jessica Chastain, Michael Caine e outros. É um filme que desafia a mente e emociona o coração, sendo uma das obras mais aclamadas de Christopher Nolan.",
    ],
  },
  {
    titulo: "V de Vingança",
    imagemFilme: vForVen,
    descricao: [
      "V de Vingança é um filme de 2005 dirigido por James McTeigue e baseado em uma graphic novel de Alan Moore e David Lloyd. O filme se passa em um futuro distópico onde um vigilante mascarado conhecido como 'V' luta contra um governo totalitário que controla a Inglaterra. Ele usa táticas de guerrilha para derrubar o regime opressivo e inspira a população a se rebelar contra a tirania.",
      "A história gira em torno de Evey Hammond, interpretada por Natalie Portman, uma mulher que é resgatada por V, interpretado por Hugo Weaving, e se torna sua aliada. A trama explora temas de liberdade, vingança, e o poder da resistência individual e coletiva.",
      "V de Vingança é conhecido por sua atmosfera sombria, diálogos impactantes e a icônica máscara usada pelo personagem principal. O filme é uma adaptação fiel da graphic novel e é lembrado por sua crítica política e social.",
    ],
  },
  {
    titulo: "Laranja Mecânica",
    imagemFilme: larajaMec,
    descricao: [
      "Laranja Mecânica é um filme de 1971 dirigido por Stanley Kubrick, baseado no romance de mesmo nome escrito por Anthony Burgess. O filme se passa em um futuro distópico e segue a história de Alex DeLarge, um jovem delinquente e líder de uma gangue de criminosos chamada 'Droogs'. Alex é conhecido por sua violência extrema e seu amor pela música clássica.",
      "A sinopse do filme 'Laranja Mecânica' se concentra na trajetória de Alex, que é eventualmente preso e submetido a um experimento de reabilitação para reduzir sua agressividade. O tratamento envolve a exposição a imagens e sons violentos enquanto Alex é forçado a assistir a atos de violência. O filme explora questões de livre-arbítrio, controle social e a natureza da violência humana.",
      "Laranja Mecânica é conhecido por sua abordagem visual única, trilha sonora memorável e a interpretação icônica de Malcolm McDowell como Alex DeLarge. O filme provocou discussões sobre a censura e a liberdade de expressão devido à sua representação gráfica da violência.",
    ],
  },
];
