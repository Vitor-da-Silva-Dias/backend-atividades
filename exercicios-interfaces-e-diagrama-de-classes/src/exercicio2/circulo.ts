import { formatoDeElemento } from "./formatoElemento";

export class Circulo implements formatoDeElemento {
  raio: number;

  constructor(raio: number) {
    this.raio = raio;
  }

  public desenhar(): void {
    console.log(Math.PI * this.raio * this.raio);
  }

  public redimensionar(): void {
    console.log(Math.PI * this.raio * this.raio * 2);
  }
}
