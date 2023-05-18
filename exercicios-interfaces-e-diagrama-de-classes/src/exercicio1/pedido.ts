export interface ContratoItem {
  valor: number;
  nome: string;
  descricao: string;
}

export interface ContratoPedido {
  valorTotal: number;
  items: ContratoItem[];

  adicionarItemAoCarrinho(novoItem: ContratoItem): void;
}

export interface ContratoConsole {
  ligar(): void;
}

type Console = ContratoConsole & ContratoItem;

export class Pedido implements ContratoPedido {
  valorTotal: number;
  constructor(public items: ContratoItem[]) {
    this.valorTotal = items.reduce((soma, item) => (soma += item.valor), 0);
  }
  adicionarItemAoCarrinho(novoItem: ContratoItem): void {
    this.items.push(novoItem);
    this.valorTotal += novoItem.valor;
    console.log(
      `O produto ${
        novoItem.nome
      } foi adicionado ao carrinho com sucesso! Agora o valor total é ${this.valorTotal
        .toFixed(2)
        .replace(".", ",")}`
    );
  }
}

export class Pizza implements ContratoItem {
  constructor(
    public valor: number,
    public nome: string,
    public descricao: string
  ) {}
}

export class PlayStation5 implements ContratoItem {
  constructor(
    public valor: number,
    public nome: string,
    public descricao: string
  ) {}

  public ligar() {
    console.log("ligando");
  }

  public ligarPelaAlexa() {
    console.log("ps5 ligando pela Alexa");
  }
}

export class PlayStation2 implements Console {
  constructor(
    public valor: number,
    public nome: string,
    public descricao: string
  ) {}

  public ligar() {
    console.log("ligando");
  }
}

export class Computador implements ContratoItem {
  constructor(
    public valor: number,
    public nome: string,
    public descricao: string
  ) {}
}
