interface Desconto {
  aplicarDescontoEmPorcentagem(desconto: number): void;
  recuperarValorTotal(): number;
}

interface ValorPedido {
  aplicarDescontoEmReais(desconto: number): void;
  removeItem(item: string): void;
}

export class Pedido2 implements ValorPedido, Desconto {
  itens: ItemPedido[] = [];

  add(item: ItemPedido): void {
    this.itens.push(item);
  }

  recuperarValorTotal(): number {
    let total = this.itens
      .map((i) => i.recuperarValorTotal())
      .reduce((sum, v) => sum + v, 0);

    return total;
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    const porcentagem = desconto / 100;
    const descontoEmReais = this.recuperarValorTotal() * porcentagem;
    const valorComDesconto = this.recuperarValorTotal() - descontoEmReais;
    this.itens.forEach((item) => {
      const proporcao = item.recuperarValorTotal() / this.recuperarValorTotal();
      const descontoItem = proporcao * descontoEmReais;
      item.aplicarDescontoEmReais(descontoItem);
    });
  }

  aplicarDescontoEmReais(desconto: number): void {
    this.itens.forEach((item) => {
      item.aplicarDescontoEmReais(desconto);
    });
  }

  removeItem(item: string): void {
    const index = this.itens.findIndex((i) => i.nome === item);
    if (index > -1) {
      this.itens.splice(index, 1);
    }
  }
}

export class ItemPedido implements ValorPedido, Desconto {
  valor: number;
  nome: string;
  quantidade: number;

  constructor(valor: number, nome: string, quantidade: number) {
    this.valor = valor;
    this.nome = nome;
    this.quantidade = quantidade;
  }

  recuperarValorTotal(): number {
    return this.valor * this.quantidade;
  }

  aplicarDescontoEmReais(desconto: number): void {
    this.valor -= desconto;
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    throw new Error(
      "Não é possível aplicar desconto em porcentagem em um item de pedido."
    );
  }

  removeItem(item: string): void {
    throw new Error("Não é possível remover um item de um item de pedido.");
  }
}
