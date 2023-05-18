export class Animal {
  constructor(
    public nome: string,
    public idade: number,
    public especie: string
  ) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
  }

  correr() {
    console.log("O animal correu");
  }
}

export class Cachorro extends Animal {
  constructor(public nome: string, public idade: number, public raca: string) {
    super(nome, idade, "Cachorro");
    this.raca = raca;
  }

  latir() {
    console.log("Au au!");
  }
}

export class Cavalo extends Animal {
  constructor(
    public nome: string,
    public idade: number,
    public pelagem: string
  ) {
    super(nome, idade, "Cavalo");
    this.pelagem = pelagem;
  }

  relinchar() {
    console.log("Iiiiiihhhrrrr!");
  }
}

export class Gato extends Animal {
  constructor(public nome: string, public idade: number, public cor: string) {
    super(nome, idade, "Gato");
    this.cor = cor;
  }

  miar() {
    console.log("Miau!");
  }
}
