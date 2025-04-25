import { useState } from 'react';

const questions = [
  {
    question: "¿Cuál es el resultado de 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "¿Qué lenguaje se usa con React?",
    options: ["Python", "PHP", "JavaScript", "Ruby"],
    answer: "JavaScript",
  },
  {
    question: "¿Qué es un componente en React?",
    options: [
      "Una función o clase que devuelve JSX",
      "Una etiqueta HTML",
      "Un estilo CSS",
      "Una base de datos"
    ],
    answer: "Una función o clase que devuelve JSX",
  },
];

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 5);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setFinished(true);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "600px", margin: "auto" }}>
      <h1>Quiz React</h1>
      {finished ? (
        <div>
          <h2>¡Has terminado!</h2>
          <p>Puntaje total: {score } de {questions.length * 5}</p>
        </div>
      ) : (
        <div>
          <h2>{questions[current].question}</h2>
          {questions[current].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option)}
              style={{
                display: "block",
                margin: "10px 0",
                padding: "10px",
                width: "100%",
                cursor: "pointer",
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
