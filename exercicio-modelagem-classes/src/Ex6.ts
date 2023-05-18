// 6. Implemente uma classe chamada Carro com as seguintes
// propriedades:
// a. Um veículo tem um certo consumo de combustível (medidos
// em km / litro) e uma certa quantidade de combustível no
// tanque.
// b. O consumo é especificado no construtor e o nível de
// combustível inicial é 0.
// c. Forneça um método andar() que simula o ato de dirigir o
// veículo por uma certa distância, reduzindo o nível de
// combustível no tanque de gasolina.
// d. Forneça um método obterGasolina(), que retorna o nível atual
// de combustível e forneça um método adicionarGasolina(),
// para abastecer o tanque.
// Exemplo:
// meuFusca = new Carro(15)
// meuFusca.adicionarGasolina(20)
// meuFusca.andar(100)
// meuFusca.obterGasolina()

export class Carro {
    private consumo: number; // consumo em km/l
    private combustivel: number = 0; // nível de combustível em litros
  
    constructor(consumo: number) {
      this.consumo = consumo;
    }
  
    andar(distancia: number): void {
      const combustivelGasto = distancia / this.consumo;
      if (combustivelGasto > this.combustivel) {
        console.log("Não há combustível suficiente para percorrer essa distância.");
      } else {
        this.combustivel -= combustivelGasto;
        console.log(`O veículo percorreu ${distancia} km.`);
      }
    }
  
    obterGasolina(): number {
      return this.combustivel;
    }
  
    adicionarGasolina(quantidade: number): void {
      this.combustivel += quantidade;
      console.log(`Foram adicionados ${quantidade} litros de combustível.`);
    }
  }
  