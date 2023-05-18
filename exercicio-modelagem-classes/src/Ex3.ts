// 3. Crie uma classe para implementar uma conta corrente. A classe
// deve possuir os seguintes atributos:
// a. Número da conta
// b. Nome do correntista
// c. Saldo
// Os métodos são os seguintes:
// a) Alterar nome
// b) Deposito
// c) Saque
// No construtor, o saldo é opcional, com valor padrão zero e os
// demais atributos são obrigatórios. A conta não pode ficar com saldo
// negativo.



export class ContaCorrente {
    numdaconta: number;
    correntista: string;
    saldo: number = 0;

    alterarNome(novoNome: string) {
        this.correntista = novoNome;
    }

    deposito(valor: number){
        this.saldo += valor;
    }

    saque(valor: number){
        if(valor > this.saldo){
            console.log('Impossível realizar o saque, favor verificar o saldo disponível.');
        }
        else{
            this.saldo -= valor;
            console.log(`Valor sacado: ${valor}. Saldo da conta: ${this.saldo}`);
        }
    }

}