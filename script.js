const questions = [
    {
      question: "What is ReactJS?",
      options: ["Server-side framework","user interface framework", "both a and b","none of the above"],
      answer: "user interface framework"
    },
    {
      question: "React.js is written in which of the following language?",
      options: ["JavaScript","Java", "C","C++"],
      answer: "JavaScript"
    },
    {
        question: "What is a state in React?",
        options: ["A permanent storage.","Internal storage of the component.", "External storage of the component.", "None of the above."],
        answer: "Internal storage of the component."
    },
    {
        question: "What is the return value of the useState hook?",
        options: ["Pair of current state and function updating it","Current State","Function updating the current state ", "UseState returns nothing",],
        answer: "Pair of current state and function updating it"
    },
    {
        question:"How many elements can a valid react component return?",
        options: ["1","2","3","4"],
        answer: "1"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let theme = 'light';
  
  const usernameInput = document.getElementById('username');
  const startPage = document.getElementById('start-page');
  const quizPage = document.getElementById('quiz-page');
  const endPage = document.getElementById('end-page');
  const questionNum = document.getElementById('question-num');
  const questionText = document.getElementById('question');
  const optionsContainer = document.getElementById('options');
  const scoreDisplay = document.getElementById('score');
  
  function startGame() {
    const username = usernameInput.value;
    if (username.trim() !== '') {
      startPage.style.display = 'none';
      quizPage.style.display = 'block';
      showQuestion();
      applyTheme();
    } else {
      alert('Please enter your username!');
    }
  }
  
  function showQuestion() {
    const q = questions[currentQuestion];
    questionNum.textContent = currentQuestion + 1;
    questionText.textContent = q.question;
    optionsContainer.innerHTML = '';
    q.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      optionsContainer.appendChild(button);
    });
  }
  
  function checkAnswer(answer) {
    const q = questions[currentQuestion];
    if (answer === q.answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      endGame();
    }
  }
  
  function endGame() {
    quizPage.style.display = 'none';
    endPage.style.display = 'block';
    scoreDisplay.textContent = score;
  }
  
  function restartGame() {
    currentQuestion = 0;
    score = 0;
    startPage.style.display = 'block';
    endPage.style.display = 'none';
  }
  
  function toggleTheme() {
    theme = theme === 'light' ? 'dark' : 'light';
    applyTheme();
  }
  
  function applyTheme() {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
  
  function highlightQuestion() {
    const question = document.getElementById('question');
    question.classList.toggle('highlighted');
  }
  