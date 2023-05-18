// Atributos:
/**
 * Nome, idade, nota, status
 */

// enum StatusPedido {
//   EM_ANDAMENTO = '',
//   FINALIZADO = '',
//   EM_ENTREGA = '',
// }



enum StatusProva {
  APROVADO = "aprovado",
  REPROVADO = "reprovado"
}


export class Aluno {
  private nota: number
  private status: StatusProva

  constructor(private nome: string, private idade: number) {
    this.nota = 0
    this.status = StatusProva.REPROVADO
  }

  public get getNome() { return this.nome; }
  public get getNota() { return this.nota; }

  public addNota(novaNota: number): void {
    this.nota = novaNota;

    if (novaNota >= 6) {
      this.status = StatusProva.APROVADO;
    }
  }
}

