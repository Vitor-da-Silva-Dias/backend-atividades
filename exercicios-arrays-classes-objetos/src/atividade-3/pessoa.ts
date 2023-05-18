/**
 * Crie uma classe chamada Pessoa que contém os seguintes atributos: 
    nome (string) 
    e idade (number), 
    que receba esses valores pelo construtor. 
    Depois crie uma lista de Pessoa com algumas idades diferentes e por fim crie uma nova lista 
    a partir dessa 
    lista inicial utilizando o filter somente com as pessoas que possuem a idade menor que 23. 
 */

export class Pessoa {
  // nome: string;
  // idade: number;

  // constructor(nome: string, idade: number) {
  //   this.nome = nome;
  //   this.idade = idade;
  // }

  constructor(protected _nome: string, protected _idade: number) { }

  public get nome() { return this._nome }
  public get idade() { return this._idade }
  public set nome(novoNome: string) {
    if (novoNome.length <= 3) {
      return;
    }

    this._nome = novoNome
  }
}

export class OtaPessoa extends Pessoa {
  constructor(nome: string, idade: number) {
    super(nome, idade);
  }

  public get nome() { return this._nome }
  public set nome(novoNome: string) {
    if (novoNome.length <= 3) {
      return;
    }

    this._nome = novoNome
  }
}