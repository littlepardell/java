import React, { useState, useCallback } from 'react';
import { Moon, Shuffle } from 'lucide-react';
import { questions } from './questions';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [shuffledQuestions, setShuffledQuestions] = useState([...questions]);

  const shuffleQuestions = useCallback(() => {
    const newQuestions = [...questions];
    for (let i = newQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newQuestions[i], newQuestions[j]] = [newQuestions[j], newQuestions[i]];
    }
    setShuffledQuestions(newQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  }, []);

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer !== null) return; // Prevent multiple answers

    setSelectedAnswer(answer);
    const correct = answer === shuffledQuestions[currentQuestion].correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setSelectedAnswer(null);
      setIsCorrect(null);
      
      if (currentQuestion < shuffledQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  if (showScore) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-gray-800 p-8 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Quiz Completed! 🎉</h2>
          <p className="text-xl text-center mb-8">
            You scored {score} out of {shuffledQuestions.length}
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={restartQuiz}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors duration-200"
            >
              Restart Quiz
            </button>
            <button
              onClick={shuffleQuestions}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-200 flex items-center gap-2"
            >
              <Shuffle className="w-5 h-5" />
              Shuffle & Restart
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Moon className="w-6 h-6" />
            <span className="text-lg font-semibold">Programming Quiz</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={shuffleQuestions}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-200 flex items-center gap-2"
            >
              <Shuffle className="w-4 h-4" />
              Shuffle
            </button>
            <div className="text-gray-400">
              Question {currentQuestion + 1}/{shuffledQuestions.length}
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl">
          <h2 className="text-xl font-semibold mb-6">
            {shuffledQuestions[currentQuestion].question}
          </h2>

          <div className="space-y-4">
            {shuffledQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                  selectedAnswer === option
                    ? isCorrect
                      ? 'bg-green-600 text-white'
                      : 'bg-red-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600'
                } ${
                  selectedAnswer && option === shuffledQuestions[currentQuestion].correctAnswer
                    ? 'bg-green-600 text-white'
                    : ''
                }`}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <div className="text-gray-400">Score: {score}</div>
            <div className="h-1 flex-1 mx-4 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-600 transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / shuffledQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;