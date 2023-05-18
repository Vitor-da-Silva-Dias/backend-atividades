export class Pessoa {
  constructor(private _nome: string, private _idade: number) { }

  public get nome() { return this._nome }
  public get idade() { return this._idade }
  public set nome(novoNome: string) {
    if (novoNome.length <= 3) {
      return;
    }

    this._nome = novoNome
  }
}