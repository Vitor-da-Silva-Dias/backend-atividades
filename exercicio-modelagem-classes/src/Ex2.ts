// 2. Crie uma classe que modele uma bola:
// a. Atributos
// i. Cor
// ii. Circunferência
// iii. Material
// b. Métodos
// i. Trocar Cor
// ii. Mostrar cor



export class Bola{
    cor: string;
    circunferencia: number;
    material: string;

    mostrarCor() {
        console.log(`cor da bola: ${this.cor}`);
    }

    trocarCor(novaCor: string) {
        this.cor = novaCor;
    }
}