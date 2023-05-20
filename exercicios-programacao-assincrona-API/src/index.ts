// Atividade 1


import axios from 'axios';

async function getUserFromGithub(user: string) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (error) {
    console.log('Usuário não existe');
  }
}

getUserFromGithub('djunior97');
getUserFromGithub('djunioriqdivqv97');

async function getRepositories(repo: string) {
  try {
    const response = await axios.get(`https://api.github.com/repos/${repo}`);
    console.log(response.data);
  } catch (error) {
    console.log('Repositório não existe');
  }
}

getRepositories('marcelo-growdev/scrapbook-es6');
getRepositories('marcelo-growdev/qdbqqbqwn');


//Atividade 2


import express from 'express';

const app = express();
const PORT = 3000;

app.get('/calculadora', (req, res) => {
  const { operacao, valorA, valorB } = req.query;

  if (typeof operacao === 'string' && typeof valorA === 'string' && typeof valorB === 'string') {
    const a = Number(valorA);
    const b = Number(valorB);

    let resultado: number;

    switch (operacao) {
      case 'somar':
        resultado = a + b;
        break;
      case 'subtrair':
        resultado = a - b;
        break;
      case 'multiplicar':
        resultado = a * b;
        break;
      case 'dividir':
        resultado = a / b;
        break;
      default:
        return res.status(400).send('Operação inválida');
    }

    return res.send(`O resultado da operação ${operacao} é ${resultado}`);
  }

  return res.status(400).send('Parâmetros inválidos');
});


// Atividade 3


let contador = 0;

app.get('/', (req, res) => {
  contador++;

  if (contador === 10) {
    res.send('Chegou a 10');
    contador = 0; // Resetar o contador
  } else {
    res.send(`Contador: ${contador}`);
  }
});


// Atividade 4


app.get('/numeral', (req, res) => {
  const { numero, operacao } = req.query;

  if (!numero || !operacao) {
    res.status(400).send('Parâmetros número e operação são obrigatórios.');
    return;
  }

  const parsedNumero = Number(numero);

  if (isNaN(parsedNumero)) {
    res.status(400).send('Número inválido.');
    return;
  }

  let resultado;

  if (operacao === 'anterior') {
    resultado = parsedNumero - 1;
  } else if (operacao === 'proximo') {
    resultado = parsedNumero + 1;
  } else {
    res.status(400).send('Operação inválida. Utilize "anterior" ou "proximo".');
    return;
  }

  res.send(`Resultado: ${resultado}`);
});


// Atividade 5


app.get('/inverter-string', (req, res) => {
  const { valor } = req.query;

  if (!valor) {
    res.status(400).send('O parâmetro "valor" é obrigatório.');
    return;
  }

  const valorInvertido = String(valor).split('').reverse().join('');
  res.send(`Valor invertido: ${valorInvertido}`);
});


// Atividade 6


const array: string[] = [];

function removeVogais(valor: string): string {
  return valor.replace(/[aeiou]/gi, '');
}

app.get('/remover-vogais', (req, res) => {
  const { valor } = req.query;

  if (!valor) {
    res.status(400).send('O parâmetro "valor" é obrigatório.');
    return;
  }

  const valorSemVogais = removeVogais(String(valor));
  array.push(valorSemVogais);

  res.json(array);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
