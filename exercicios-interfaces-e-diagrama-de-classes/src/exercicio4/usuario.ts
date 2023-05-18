export class Usuario {
  nome: string;
  email: string;
  livrosEmprestados: Livro[];

  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
    this.livrosEmprestados = [];
  }

  emprestarLivro(livro: Livro) {
    if (livro.estaDisponivel()) {
      livro.emprestar();
      this.livrosEmprestados.push(livro);
      console.log(`O livro "${livro.titulo}" foi emprestado para ${this.nome}`);
    } else {
      console.log(
        `O livro "${livro.titulo}" não está disponível para empréstimo`
      );
    }
  }

  devolverLivro(livro: Livro) {
    const index = this.livrosEmprestados.indexOf(livro);
    if (index !== -1) {
      this.livrosEmprestados.splice(index, 1);
      livro.devolver();
      console.log(`O livro "${livro.titulo}" foi devolvido por ${this.nome}`);
    } else {
      console.log(
        `O livro "${livro.titulo}" não está emprestado para ${this.nome}`
      );
    }
  }
}

export class Livro {
  titulo: string;
  autor: string;
  editora: string;
  ano: number;
  disponivel: boolean;

  constructor(titulo: string, autor: string, editora: string, ano: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.editora = editora;
    this.ano = ano;
    this.disponivel = true;
  }

  estaDisponivel() {
    return this.disponivel;
  }

  emprestar() {
    this.disponivel = false;
  }

  devolver() {
    this.disponivel = true;
  }
}

export class Biblioteca {
  livros: Livro[];
  usuarios: Usuario[];

  constructor() {
    this.livros = [];
    this.usuarios = [];
  }

  cadastrarLivro(livro: Livro) {
    this.livros.push(livro);
    console.log(`O livro "${livro.titulo}" foi cadastrado na biblioteca`);
  }

  cadastrarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
    console.log(`O usuário "${usuario.nome}" foi cadastrado no sistema`);
  }

  buscarLivro(titulo: string) {
    const livroEncontrado = this.livros.find(
      (livro) => livro.titulo === titulo
    );
    if (livroEncontrado) {
      console.log(
        `Livro encontrado: ${livroEncontrado.titulo} - ${livroEncontrado.autor}`
      );
    } else {
      console.log(`Livro não encontrado: ${titulo}`);
    }
  }

  listarLivrosDisponiveis() {
    const livrosDisponiveis = this.livros.filter((livro) => livro.disponivel);
    console.log(`Livros disponíveis para empréstimo:`);
    livrosDisponiveis.forEach((livro) => {
      console.log(`- ${livro.titulo} - ${livro.autor}`);
    });
  }
}
