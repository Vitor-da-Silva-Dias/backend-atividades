import { lista1 } from "./atividade-1/lista1";
import { lista2 } from "./atividade-2/lista2";
import { Pessoa, OtaPessoa } from "./atividade-3/pessoa";
import { PessoaComSalario } from "./atividade-5/pessoa";
import * as Atividade4 from "./atividade-4/pessoa";
import { Aluno } from "./atividade-6/aluno";
import { gabarito, responseGeneration } from "./atividade-6/prova";
import { table } from "console";


const atividade1 = () => {
    const lista: lista1["num"] =  [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4];

    const listaFiltrada = lista.filter((num) => num % 2 !== 0);

    console.log(listaFiltrada);
}

atividade1();

const atividade2 = () => {
    const lista: lista2["num"] = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4];

    const somaLista = lista.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    console.log(`Soma dos números da lista: ${somaLista}.`);
}

atividade2();

const pessoa = new OtaPessoa('Bryan', 22);
console.log(pessoa.nome);

pessoa.nome = 'Felipe';

console.log(pessoa.nome);


const atividade3 = () => {

  
  const listaDePessoas: /** Array<Pessoa> */ Pessoa[] = [
    
    new Pessoa('Ota Pessoa 1', 17),
    new Pessoa('Ota Pessoa 6', 12),
    new Pessoa('Ota Pessoa 7', 19),
    new Pessoa('Ota Pessoa 8', 20),
    new Pessoa('Ota Pessoa 2', 36),
    new Pessoa('Ota Pessoa 3', 28),
    new Pessoa('Ota Pessoa 4', 42),
    new Pessoa('Ota Pessoa 5', 78),
  ];

  const pessoasComIdademenorQue23 = listaDePessoas.filter((pessoa) => pessoa.idade < 23);

  console.log(pessoasComIdademenorQue23.map((pessoa) => pessoa.nome));
}

const atividade4 = () => {
  const listaDePessoas: /** Array<Pessoa> */ Atividade4.Pessoa[] = [
    new Atividade4.Pessoa('Ota Pessoa 1', 17),
    new Atividade4.Pessoa('Ota Pessoa 6', 12),
    new Atividade4.Pessoa('Ota Pessoa 7', 19),
    new Atividade4.Pessoa('Ota Pessoa 8', 20),
    new Atividade4.Pessoa('Ota Pessoa 2', 36),
    new Atividade4.Pessoa('Ota Pessoa 3', 28),
    new Atividade4.Pessoa('Ota Pessoa 4', 42),
    new Atividade4.Pessoa('Ota Pessoa 5', 78),
  ];

  const pessoasComMenosDe30Anos = listaDePessoas.filter((pessoa) => pessoa.idade < 30);

  const somaIdades = pessoasComMenosDe30Anos.reduce((acumulador, currentValue) => (acumulador + currentValue.idade), 0);

  const media = somaIdades / pessoasComMenosDe30Anos.length;

  console.log(media);
}

atividade3();
atividade4();



const atividade5 = () => {
  const listaDePessoas: /** Array<Pessoa> */ PessoaComSalario[] = [
    new PessoaComSalario('Ota Pessoa 1', 17, 701),
    new PessoaComSalario('Ota Pessoa 6', 12, 201),
    new PessoaComSalario('Ota Pessoa 7', 19, 1901),
    new PessoaComSalario('Ota Pessoa 8', 20, 201),
    new PessoaComSalario('Ota Pessoa 2', 36, 3601),
    new PessoaComSalario('Ota Pessoa 3', 28, 2801),
    new PessoaComSalario('Ota Pessoa 4', 42, 401),
    new PessoaComSalario('Ota Pessoa 5', 78, 7801),
  ];

  const pessoasComSalarioAbaixoDe1027 = listaDePessoas.filter((pessoa) => pessoa.salario < 1027);

  const listaDePessoasMapeada = pessoasComSalarioAbaixoDe1027.map((pessoa) => ({
    nome: pessoa.nome,
    idade: pessoa.idade
  }));

  console.log(listaDePessoasMapeada);

}

atividade5();

const atividade6 = () => {
  console.time('Label');

  const listaAlunos = [
    new Aluno("aluno1", 20),
    new Aluno("aluno2", 20),
    new Aluno("aluno3", 20),
    new Aluno("aluno4", 20),
    new Aluno("aluno5", 20),
    new Aluno("aluno6", 20),
    new Aluno("aluno7", 20),
  ]

  listaAlunos.map((aluno) => {
    let nota = 0;

    const respostas = responseGeneration();

    for (let i = 0; i < 10; i++) {
      if (respostas[i] === gabarito[i]) {
        nota++;
      }
    }

    aluno.addNota(nota);

    return aluno;
  });


  for (let aluno of listaAlunos) {
    let nota = 0;
    // for (let i = 0; i < listaAlunos.length; i++) {
    //   const aluno = listaAlunos[i];

    const respostas = responseGeneration();

    for (let i = 0; i < 10; i++) {
      if (respostas[i] === gabarito[i]) {
        nota++;
      }
    }

    aluno.addNota(nota);
  }

  const newLista = listaAlunos.sort((a, b) => a.getNota >= b.getNota ? a.getNota == b.getNota ? 0 : -1 : 1);

  const melhorAluno = newLista[0];
  const mediaDeNotas = newLista.reduce((acumulador, atual) => (acumulador + atual.getNota), 0) / newLista.length;
  const piorAluno = newLista[newLista.length - 1];

  console.table(newLista);
  console.log(`Melhor aluno ${melhorAluno.getNome} ${melhorAluno.getNota.toFixed(2)}`);
  console.log(`Pior aluno ${piorAluno.getNome} ${piorAluno.getNota.toFixed(2)}`);
  console.log(`Média de notas: ${mediaDeNotas}`);
  console.timeEnd('Label');
}

atividade6();