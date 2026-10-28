// Read elements once. questions.js supplies the question bank.
const subjectSelect = document.getElementById('subject');
const subcategorySelect = document.getElementById('subcategory');
const startButton = document.getElementById('start-btn');
const quiz = document.getElementById('quiz');
const nextButton = document.getElementById('next-btn');
const selection = document.getElementById('subject-select');
let questions = [];
let questionIndex = 0;
let score = 0;
let answered = false;

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function addOption(select, value, label) {
  const option = document.createElement('option');
  option.value = value;
  option.textContent = label;
  select.appendChild(option);
}

function title(value) {
  if (value === 'cpp') return 'C++';
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function resetSelection() {
  selection.style.display = 'block';
  quiz.style.display = 'none';
  nextButton.style.display = 'none';
  subjectSelect.value = '';
  subcategorySelect.replaceChildren();
  addOption(subcategorySelect, '', '--Select Subcategory--');
  subcategorySelect.disabled = true;
  startButton.style.display = 'none';
  startButton.disabled = true;
  subjectSelect.focus();
}

subjectSelect.replaceChildren();
addOption(subjectSelect, '', '--Select Subject--');
for (const subject of Object.keys(allQuestions)) {
  addOption(subjectSelect, subject, title(subject));
}

subjectSelect.addEventListener('change', () => {
  subcategorySelect.replaceChildren();
  addOption(subcategorySelect, '', '--Select Subcategory--');
  const categories = allQuestions[subjectSelect.value];
  if (categories) {
    for (const category of Object.keys(categories)) {
      addOption(subcategorySelect, category, title(category));
    }
  }
  subcategorySelect.disabled = !categories;
  startButton.style.display = categories ? 'inline-block' : 'none';
  startButton.disabled = true;
});

subcategorySelect.addEventListener('change', () => {
  startButton.disabled = !subcategorySelect.value;
});

startButton.addEventListener('click', () => {
  const bank = allQuestions[subjectSelect.value]?.[subcategorySelect.value];
  if (!bank || bank.length === 0) return;
  questions = shuffle(bank).slice(0, 20);
  questionIndex = 0;
  score = 0;
  selection.style.display = 'none';
  quiz.style.display = 'block';
  nextButton.style.display = 'inline-block';
  loadQuestion();
});

function loadQuestion() {
  answered = false;
  nextButton.disabled = true;
  nextButton.textContent = questionIndex === questions.length - 1
    ? 'Show Results' : 'Next Question';
  // Only static markup goes into innerHTML. Question/answer text uses textContent.
  quiz.innerHTML = `
    <div class="question-container">
      <h3></h3>
      <p class="question"></p>
      <div class="options-container"></div>
    </div>
    <div class="score" aria-live="polite"></div>
  `;
  const current = questions[questionIndex];
  quiz.querySelector('h3').textContent = `Question ${questionIndex + 1} of ${questions.length}`;
  quiz.querySelector('.question').textContent = current.question;
  updateScore();
  const options = quiz.querySelector('.options-container');
  shuffle(current.options).forEach((answer, index) => {
    const option = document.createElement('div');
    option.className = 'option';
    option.dataset.answer = answer;
    option.textContent = `${String.fromCharCode(65 + index)}. ${answer}`;
    option.setAttribute('role', 'button');
    option.tabIndex = 0;
    function selectAnswer() {
      if (answered) return;
      answered = true;
      const correct = answer === current.answer;
      if (correct) score++;
      for (const item of options.children) {
        item.classList.toggle('correct', item.dataset.answer === current.answer);
        item.setAttribute('aria-disabled', 'true');
        item.tabIndex = -1;
      }
      option.classList.add('selected', correct ? 'correct' : 'incorrect');
      updateScore();
      nextButton.disabled = false;
      nextButton.focus();
    }
    option.addEventListener('click', selectAnswer);
    option.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectAnswer();
      }
    });
    options.appendChild(option);
  });
}

function updateScore() {
  quiz.querySelector('.score').textContent = `Score: ${score}/${questions.length}`;
}

nextButton.addEventListener('click', () => {
  if (!answered) return;
  questionIndex++;
  if (questionIndex < questions.length) {
    loadQuestion();
    quiz.querySelector('.option').focus();
    return;
  }
  quiz.innerHTML = `
    <div class="results">
      <h3>Quiz Completed!</h3>
      <p></p>
      <button id="restart-btn">Restart Quiz</button>
    </div>
  `;
  quiz.querySelector('.results p').textContent = `Your score: ${score}/${questions.length}`;
  nextButton.style.display = 'none';
  const restartButton = document.getElementById('restart-btn');
  restartButton.addEventListener('click', resetSelection);
  restartButton.focus();
});

resetSelection();
