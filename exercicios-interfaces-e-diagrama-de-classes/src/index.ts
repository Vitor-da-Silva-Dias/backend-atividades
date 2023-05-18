import {
  Pedido,
  Pizza,
  PlayStation5,
  Computador,
  PlayStation2,
} from "./exercicio1/pedido";

import { Circulo } from "./exercicio2/circulo";
import { Retangulo } from "./exercicio2/retangulo";

import { Animal, Cachorro, Cavalo, Gato } from "./exercicio3/animal";

import { Usuario, Livro, Biblioteca } from "./exercicio4/usuario";

import { Pedido2, ItemPedido } from "./exercicio5/atividade5";

const atividade1 = () => {
  const pizza = new Pizza(50, "baccon", "4 queijos");
  const ps5 = new PlayStation5(5000, "PlayStation 5", "desc");
  const pc = new Computador(3000, "Computador", "PC");
  const ps2 = new PlayStation2(300, "Playstation 2", "desc");

  const pedido = new Pedido([pizza, ps5, pc]);

  //   ps5.ligar();

  console.log(pedido.valorTotal);
  pedido.adicionarItemAoCarrinho(ps2);
  //   console.log(pedido.items[1]);

  //   ps2.ligar();
};

// atividade1();

const atividade2 = () => {
  const circulo = new Circulo(4);
  const retangulo = new Retangulo(6, 4);

  circulo.desenhar();
  circulo.redimensionar();

  retangulo.desenhar();
  retangulo.redimensionar();
};

// atividade2();

const atividade3 = () => {
  const cachorro = new Cachorro("Murphy", 3, "pitbull");
  const cavalo = new Cavalo("Pé de pano", 4, "branca");
  const gato = new Gato("Miti", 3, "cinza");
  const animal = new Animal("animal", 6, "preto");

  animal.correr();
  cachorro.latir();
  cavalo.relinchar();
  gato.miar();
};

// atividade3();

const atividade4 = () => {
  // Criação de usuários
  const usuario1 = new Usuario("João", "joao@gmail.com");
  const usuario2 = new Usuario("Maria", "maria@gmail.com");

  // Criação de livros
  const livro1 = new Livro("O Príncipe", "Maquiavel", "Martin Claret", 2009);
  const livro2 = new Livro(
    "O Senhor dos Anéis",
    "J.R.R. Tolkien",
    "Martins Fontes",
    2000
  );
  const livro3 = new Livro(
    "1984",
    "George Orwell",
    "Companhia das Letras",
    2009
  );

  // Criação de biblioteca
  const biblioteca = new Biblioteca();

  // Cadastro de usuários e livros na biblioteca
  biblioteca.cadastrarUsuario(usuario1);
  biblioteca.cadastrarUsuario(usuario2);

  biblioteca.cadastrarLivro(livro1);
  biblioteca.cadastrarLivro(livro2);
  biblioteca.cadastrarLivro(livro3);

  // Emprestar livros para usuários
  usuario1.emprestarLivro(livro2);
  usuario2.emprestarLivro(livro3);

  // Tentar emprestar um livro que já está emprestado
  usuario1.emprestarLivro(livro2);

  // Devolver livros emprestados
  usuario1.devolverLivro(livro2);
  usuario2.devolverLivro(livro3);

  // Buscar livro na biblioteca
  biblioteca.buscarLivro("O Príncipe");
  biblioteca.buscarLivro("O Senhor dos Anéis");
  biblioteca.buscarLivro("Dom Quixote");

  // Listar livros disponíveis para empréstimo
  biblioteca.listarLivrosDisponiveis();
};

// atividade4();

const atividade5 = () => {
  const item1 = new ItemPedido(10, "Produto 1", 2);
  const item2 = new ItemPedido(20, "Produto 2", 3);

  const pedido = new Pedido2();
  pedido.add(item1);
  pedido.add(item2);

  console.log(pedido.recuperarValorTotal());

  pedido.aplicarDescontoEmPorcentagem(10);

  console.log(pedido.recuperarValorTotal());

  pedido.removeItem("Produto 1");

  console.log(pedido.recuperarValorTotal());
};

// atividade5();
