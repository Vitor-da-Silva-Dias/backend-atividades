export const gabarito = ['A', 'B', 'B', 'A', 'A', 'B', 'A', 'C', 'B', 'C'];
const possibleAnswers = ['A', 'B', 'C'];

export const responseGeneration = (): string[] => {
  const responses = [];

  for (let i = 0; i < 10; i++) {
    responses.push(
      possibleAnswers[generateIndex()],
    );
  }

  return responses;
}

const generateIndex = (): number => {
  const numeroAleatorioDe0a1 = Math.random();

  const numeroDe0a10Quebrado = numeroAleatorioDe0a1 * 10;

  const numeroDe0a10Arredondado = Math.round(numeroDe0a10Quebrado);

  const numeroDe0a2 = numeroDe0a10Arredondado % 3;

  return numeroDe0a2;
};

