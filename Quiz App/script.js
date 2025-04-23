const allQuestions = {
    programming: {
      general: [
        {
          question: "What does HTML stand for?",
          options: ["HyperText Markup Language", "HyperText Markdown Language", "Hyper Transfer Markup Language", "HyperText Model Language"],
          answer: "HyperText Markup Language"
        },
        {
          question: "Which symbol is used for comments in JavaScript?",
          options: ["<!-- -->", "//", "/* */", "#"],
          answer: "//"
        },
        {
          question: "What is the result of 3 + '3' in JavaScript?",
          options: ["6", "33", "Error", "undefined"],
          answer: "33"
        },
        {
          question: "Which company developed JavaScript?",
          options: ["Microsoft", "Netscape", "Google", "Sun Microsystems"],
          answer: "Netscape"
        },
        {
          question: "What is the correct syntax for referring to an external script called 'app.js'?",
          options: ["<script src='app.js'>", "<script href='app.js'>", "<script ref='app.js'>", "<script name='app.js'>"],
          answer: "<script src='app.js'>"
        },
        {
          question: "Which method is used to parse a string to an integer in JavaScript?",
          options: ["parseInt()", "parseFloat()", "Number()", "toString()"],
          answer: "parseInt()"
        },
        {
          question: "What is the output of 'typeof null' in JavaScript?",
          options: ["null", "object", "undefined", "string"],
          answer: "object"
        },
        {
          question: "Which keyword is used to declare a constant in JavaScript?",
          options: ["let", "var", "const", "constant"],
          answer: "const"
        },
        {
          question: "What is the default value of an uninitialized variable in JavaScript?",
          options: ["null", "undefined", "0", "NaN"],
          answer: "undefined"
        },
        {
          question: "Which function is used to convert JSON data to a JavaScript object?",
          options: ["JSON.parse()", "JSON.stringify()", "JSON.objectify()", "JSON.convert()"],
          answer: "JSON.parse()"
        },
        {
          question: "What does the '===' operator check in JavaScript?",
          options: ["Equality only", "Equality and type", "Type only", "None of the above"],
          answer: "Equality and type"
        },
        {
          question: "Which array method is used to add elements to the end of an array?",
          options: ["push()", "pop()", "shift()", "unshift()"],
          answer: "push()"
        },
        {
          question: "What is the purpose of the 'this' keyword in JavaScript?",
          options: ["Refers to the current object", "Refers to the global object", "Refers to the parent object", "None of the above"],
          answer: "Refers to the current object"
        },
        {
          question: "Which method is used to remove the last element from an array?",
          options: ["pop()", "push()", "shift()", "unshift()"],
          answer: "pop()"
        },
        {
          question: "What is the output of 'console.log(typeof NaN)'?",
          options: ["number", "NaN", "undefined", "object"],
          answer: "number"
        },
        {
          question: "Which statement is used to stop a loop in JavaScript?",
          options: ["break", "stop", "exit", "return"],
          answer: "break"
        },
        {
          question: "Which method is used to join two or more arrays in JavaScript?",
          options: ["concat()", "join()", "merge()", "combine()"],
          answer: "concat()"
        },
        {
          question: "What is the purpose of the 'map()' method in JavaScript?",
          options: ["Iterates over an array and returns a new array", "Filters elements in an array", "Sorts an array", "None of the above"],
          answer: "Iterates over an array and returns a new array"
        },
        {
          question: "Which keyword is used to handle exceptions in JavaScript?",
          options: ["catch", "try", "throw", "finally"],
          answer: "catch"
        },
        {
          question: "What is the output of 'Boolean(0)' in JavaScript?",
          options: ["true", "false", "undefined", "null"],
          answer: "false"
        }
      ],
      python: Array(20).fill().map((_, i) => ({
        question: `Python Q${i + 1}: Which keyword is used to define a function in Python?`,
        options: ["func", "def", "function", "define"],
        answer: "def"
      })),
      cpp: Array(20).fill().map((_, i) => ({
        question: `C++ Q${i + 1}: What is the correct way to include the iostream library?`,
        options: ["#include <iostream>", "#include iostream", "#include 'iostream'", "import iostream"],
        answer: "#include <iostream>"
      }))
    },
    science: {
      physics: Array(20).fill().map((_, i) => ({
        question: `Physics Q${i + 1}: What is the SI unit of force?`,
        options: ["Joule", "Watt", "Newton", "Pascal"],
        answer: "Newton"
      })),
      chemistry: Array(20).fill().map((_, i) => ({
        question: `Chemistry Q${i + 1}: What is the chemical symbol for gold?`,
        options: ["Go", "Gd", "Au", "Ag"],
        answer: "Au"
      }))
    }
  };
  
  // DOM Elements
  const subjectSelect = document.getElementById("subject");
  const subcategorySelect = document.getElementById("subcategory");
  const startBtn = document.getElementById("start-btn");
  const quizEl = document.getElementById("quiz");
  const nextBtn = document.getElementById("next-btn");
  const subjectSelectContainer = document.getElementById("subject-select");
  
  // Quiz state
  let quizQuestions = [];
  let currentQuiz = 0;
  let score = 0;
  
  // Helper functions
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Initialize subject dropdown
  function initSubjectDropdown() {
    subjectSelect.innerHTML = "<option value=''>--Select Subject--</option>";
    for (let subject in allQuestions) {
      let option = document.createElement("option");
      option.value = subject;
      option.textContent = capitalize(subject);
      subjectSelect.appendChild(option);
    }
  }
  
  // Initialize subcategory dropdown based on selected subject
  subjectSelect.addEventListener("change", () => {
    subcategorySelect.innerHTML = "<option value=''>--Select Subcategory--</option>";
    const selectedSubject = subjectSelect.value;
    
    if (selectedSubject && allQuestions[selectedSubject]) {
      for (let subcategory in allQuestions[selectedSubject]) {
        let option = document.createElement("option");
        option.value = subcategory;
        option.textContent = capitalize(subcategory);
        subcategorySelect.appendChild(option);
      }
      subcategorySelect.disabled = false;
      startBtn.style.display = "inline-block";
    } else {
      subcategorySelect.disabled = true;
      startBtn.style.display = "none";
    }
  });
  
  // Start quiz when subcategory is selected
  startBtn.addEventListener("click", startQuiz);
  
  // Next button functionality
  nextBtn.addEventListener("click", () => {
    currentQuiz++;
    if (currentQuiz < quizQuestions.length) {
      loadQuiz();
    } else {
      showResults();
    }
  });
  
  function startQuiz() {
    const subject = subjectSelect.value;
    const subcategory = subcategorySelect.value;
  
    if (!subject || !subcategory) {
      alert("Please select both a subject and subcategory");
      return;
    }
  
    quizQuestions = shuffle([...allQuestions[subject][subcategory]]).slice(0, 20);
    currentQuiz = 0;
    score = 0;
  
    subjectSelectContainer.style.display = "none";
    quizEl.style.display = "block";
    nextBtn.style.display = "inline-block";
    
    loadQuiz();
  }
  
  function loadQuiz() {
    const currentData = quizQuestions[currentQuiz];
    quizEl.innerHTML = `
      <div class="question-container">
        <h3>Question ${currentQuiz + 1} of ${quizQuestions.length}</h3>
        <p class="question">${currentData.question}</p>
        <div class="options-container">
          ${currentData.options.map((option, index) => `
            <div class="option" data-answer="${option}">
              ${String.fromCharCode(65 + index)}. ${option}
            </div>
          `).join('')}
        </div>
      </div>
      <div class="score">Score: ${score}/${quizQuestions.length}</div>
    `;
  
    document.querySelectorAll(".option").forEach(option => {
      option.addEventListener("click", () => {
        if (option.classList.contains("selected")) return;
        
        const isCorrect = option.dataset.answer === currentData.answer;
        if (isCorrect) score++;
        
        document.querySelectorAll(".option").forEach(opt => {
          opt.classList.remove("selected", "correct", "incorrect");
          if (opt.dataset.answer === currentData.answer) {
            opt.classList.add("correct");
          }
        });
        
        option.classList.add(isCorrect ? "correct" : "incorrect", "selected");
        nextBtn.disabled = false;
      });
    });
  
    nextBtn.disabled = true;
  }
  
  function showResults() {
    quizEl.innerHTML = `
      <div class="results">
        <h3>Quiz Completed!</h3>
        <p>Your score: ${score}/${quizQuestions.length}</p>
        <button id="restart-btn">Restart Quiz</button>
      </div>
    `;
    nextBtn.style.display = "none";
    
    document.getElementById("restart-btn").addEventListener("click", () => {
      subjectSelectContainer.style.display = "block";
      quizEl.style.display = "none";
      subjectSelect.value = "";
      subcategorySelect.value = "";
      subcategorySelect.disabled = true;
      startBtn.style.display = "none";
    });
  }
  
  // Initialize the app
  initSubjectDropdown();