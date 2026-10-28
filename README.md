# Quiz App

A small HTML, CSS and JavaScript quiz app. No account, backend or API key is needed.

## Run

Open `Quiz App/index.html` in your browser, or serve the repository:

```sh
git clone https://github.com/simakelvinpeter/quiz-app.git
cd quiz-app
python -m http.server 8080
```

Open <http://localhost:8080/Quiz%20App/>.

## Features

- Five categories: general programming, Python, C++, physics and chemistry.
- Each category contains 20 distinct questions; questions and answer options shuffle.
- Answers display as text, including HTML/code examples.
- One answer per question, immediate feedback, live score, final results and restart.
- Keyboard answers support Tab and Enter/Space.

## Editing

`Quiz App/questions.js` contains the questions, `script.js` handles the quiz, and `styles.css` keeps the original design. Each question needs four distinct choices and one matching answer. Results reset on reload; this is a simple practice app.

## Checks

```sh
node --test tests/questions.test.cjs
```

Optional browser checks require Python, Playwright and Microsoft Edge:

```sh
pip install playwright
python tests/browser_test.py
```
