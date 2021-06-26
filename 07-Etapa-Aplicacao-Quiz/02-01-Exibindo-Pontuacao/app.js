const form = document.querySelector('.quiz-form');
const finalScoreContainer = document.querySelector('.final-score-container');

const correctAnswers = ['B', 'A', 'D', 'C'];

let score = 0;

const getUserAnswers = () => {
  let userAnswers = [];

  correctAnswers.forEach((_, index) => {
    const userAnswer = form[`inputQuestion${index + 1}`].value;
    userAnswers.push(userAnswer);
  });

  return userAnswers;
};

const calculateUserScore = (userAnswers) => {
  userAnswers.forEach((userAnswer, index) => {
    const isUserAnswerCorrect = userAnswer === correctAnswers[index];
    if (isUserAnswerCorrect) {
      score += 25;
    }
  });
};

const showFinalScore = () => {
    scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    finalScoreContainer.classList.remove('d-none');
};

const animateFInalScore = () => {
  let counter = 0;

  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer);
    }

    finalScoreContainer.querySelector('span').textContent = `${counter += 1}%`;
  }, 100);
};

form.addEventListener('submit', event => {
  // Previne a página de ser carregada ao enviar o form
  event.preventDefault();

  // 1 - Variável que obtém as respostas do usuário
  const userAnswers = getUserAnswers();

  // 2 - Calcula a pontuação do usuário
  calculateUserScore(userAnswers);

  // 3 - Mostra o score final
  showFinalScore();

  // 4 - Anima a pontuação final
  animateFInalScore();
});


// Maneira antiga
// form.addEventListener('submit', event => {
//   // Previne a página de ser carregada ao enviar o form
//   event.preventDefault();

//   // 0 - Seta a variável que irá armazenar a pontuação
//   let score = 0;

//   // 1 - Maneira original - Array que obtém as respostas do usuário
//   const userAnswers = [
//     form.inputQuestion1.value,
//     form.inputQuestion2.value,
//     form.inputQuestion3.value,
//     form.inputQuestion4.value,
//   ];

//   // 1 - Maneira melhorada - Array que obtém as respostas do usuário
//   const userAnswers = getUserAnswers();

//   // 2 - Maneira Original - Método que irá percorrer as respostas do usuário e irá comparar com
//   // as respostas corretas
//   userAnswers.forEach((userAnswer, index) => {
//     if (userAnswer === correctAnswers[index]) {
//       score += 25;
//     }
//   });

//   // 3 - Mostra o score final
//   // Faz ir para o topo da tela
//   scrollTo(0, 0);

//   // Remove a a classe 'd-none' e faz aparecer a div com a nota
//   finalScoreContainer.classList.remove('d-none');

//   // Anima a pontuação final
//   // Armazena a variável contadora para animação dos pontos
//   let counter = 0;

//   // Responsável por fazer os pontos serem incrementados dinamicamente na tela
//   const timer = setInterval(() => {
//     if (counter === score) {
//       clearInterval(timer);
//     }
//     finalScoreContainer.querySelector('span').textContent = `${counter}%`;
//     counter += 1;
//   }, 100);
// });