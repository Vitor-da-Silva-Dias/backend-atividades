export class PessoaComSalario {
  constructor(private _nome: string, private _idade: number, private _salario: number) { }

  public get nome() { return this._nome }
  public get idade() { return this._idade }
  public get salario() { return this._salario }
  public get salarioFormatado() { return this._salario.toFixed(2) }

  public set nome(novoNome: string) {
    if (novoNome.length <= 3) {
      return;
    }

    this._nome = novoNome
  }
}