// 4. Crie uma classe para representar uma Calculadora. Esta classe
// deve conter um atributo que servirá para armazenar o histórico das
// operações e seus respectivos resultados.
// a. Esta classe deve conter as operações de somar, multiplicar,
// dividir e diminuir.
// b. Esta classe deve iniciar com o histórico vazio
// c. Esta classe deve conter uma ação para visualizar o histórico.


export class Calculadora {
    Histórico: string[] = [];

    somar(num1: number, num2: number) {
        const soma = num1 + num2;
        this.Histórico.push(`${num1} + ${num2} = ${soma}`);
        return soma;
    }

    subtrair(num1: number, num2: number) {
        const subtracao = num1 - num2;
        this.Histórico.push(`${num1} - ${num2} = ${subtracao}`);
        return subtracao;
   }

   multiplicar(num1: number, num2: number){
        const multiplicacao = num1 * num2;
        this.Histórico.push(`${num1} * ${num2} = ${multiplicacao}`);
        return multiplicacao;
   }

   dividir(num1: number, num2: number){
        if(num2 === 0){
            console.log('Erro! Divisão por zero.');
        }
        else{
            const divisao = num1 / num2;
            this.Histórico.push(`${num1} / ${num2} = ${divisao}`);
            return divisao;
        }
        
   }

   verHistorico(){
        console.log('Histórico: ');
        for(const operacao of this.Histórico){
            console.log(operacao);
        }
   }

}

