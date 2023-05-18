// 5. Faça um programa completo utilizando classes e métodos que:
// a. Possua uma classe chamada BombaCombustivel, com no
// mínimo esses atributos:
// i. tipoCombustivel.
// ii. valorLitro
// iii. quantidadeCombustivel
// b. Possua no mínimo esses métodos:
// i. abastecerPorValor() – método onde é informado o
// valor a ser abastecido e mostra a quantidade de litros
// que foi colocada no veículo
// ii. abastecerPorLitro() – método onde é informado a
// quantidade em litros de combustível e mostra o valor a
// ser pago pelo cliente.
// iii. alterarValor() – altera o valor do litro do combustível.
// iv. alterarCombustivel() – altera o tipo do combustível.
// v. alterarQuantidadeCombustivel() – altera a
// quantidade de combustível restante na bomba.

// OBS: Sempre que acontecer um abastecimento é necessário
// atualizar a quantidade de combustível total na bomba. Não deve ser
// possível abastecer se não tiver gasolina suficiente na bomba.


export class BombaCombustivel{
    tipoCombustivel: string;
    valorLitro: number;
    qtdCombustivel: number;

    abastecerPorValor(valor: number){
        const litros =  valor / this.valorLitro;

        if(litros > this.qtdCombustivel){
            console.log('Não foi possível abastecer, combustível insuficiente na bomba.');
        }
        else{
            console.log(`Valor abastecido: ${valor}. Quantidade de litros: ${litros}.`);

            this.qtdCombustivel -= litros;

            console.log(`Combustível restante na bomba: ${this.qtdCombustivel}.`);
        }
        
    }

    abastecerPorLitro(litros: number){
        const valor = litros * this.valorLitro;
        

        if(litros > this.qtdCombustivel){
            console.log('Não foi possível abastecer, combustível insuficiente na bomba.');
        }
        else{
            console.log(`Quantidade de litros: ${litros}. Valor a pagar: ${valor}`);

            this.qtdCombustivel -= litros;

            console.log(`Combustível restante na bomba: ${this.qtdCombustivel}.`);
        }
    }
    
    alterarValorLitro(novoValorLitro: number){
        this.valorLitro = novoValorLitro;
        console.log(`Novo valor do litro: ${this.valorLitro}`);
    }

    alterarCombustivel(novoCombustivel: string){
        this.tipoCombustivel = novoCombustivel;
        console.log(`Novo combustível: ${this.tipoCombustivel}`);
    }

    alterarQtdCombustivel(litros: number){
        this.qtdCombustivel += litros;
        console.log(`Quantidade de combustível restante atualizada: ${this.qtdCombustivel}`);
    }
    
}
