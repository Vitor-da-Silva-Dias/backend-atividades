// 1. Crie uma classe Contador, que encapsule um valor usado para
// contagem de itens ou eventos. A classe deve oferecer métodos que
// devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contador.



export class Contador {
    val: number;

    aumentarValor() {
        this.val ++;
    }

    zerarValor() {
        this.val = 0;
    }

    retornarValor() {
        return this.val;
    }
}