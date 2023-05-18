import { formatoDeElemento } from "./formatoElemento";

export class Retangulo implements formatoDeElemento {
  comprimento: number;
  altura: number;

  constructor(altura: number, comprimento: number) {
    this.altura = altura;
    this.comprimento = comprimento;
  }

  public desenhar(): void {
    console.log(this.altura + this.comprimento * 2);
  }

  public redimensionar(): void {
    console.log((this.altura + this.comprimento * 2) * 2);
  }
}
