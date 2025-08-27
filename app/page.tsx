"use client"

import { useState } from "react"
import { QuizStart } from "@/components/quiz-start"
import { QuizQuestion } from "@/components/quiz-question"
import { QuizResults } from "@/components/quiz-results"

const quizData = [
  {
    id: 1,
    question: "What is the first pillar of Islam?",
    options: [
      { id: "a", text: "Salah (Prayer)", isCorrect: false },
      { id: "b", text: "Shahada (Declaration of Faith)", isCorrect: true },
      { id: "c", text: "Zakat (Charity)", isCorrect: false },
      { id: "d", text: "Hajj (Pilgrimage)", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "In which city was Prophet Muhammad (PBUH) born?",
    options: [
      { id: "a", text: "Medina", isCorrect: false },
      { id: "b", text: "Mecca", isCorrect: true },
      { id: "c", text: "Jerusalem", isCorrect: false },
      { id: "d", text: "Damascus", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "How many chapters (Surahs) are in the Quran?",
    options: [
      { id: "a", text: "110", isCorrect: false },
      { id: "b", text: "114", isCorrect: true },
      { id: "c", text: "120", isCorrect: false },
      { id: "d", text: "124", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "What is the Arabic term for the Islamic community?",
    options: [
      { id: "a", text: "Masjid", isCorrect: false },
      { id: "b", text: "Ummah", isCorrect: true },
      { id: "c", text: "Imam", isCorrect: false },
      { id: "d", text: "Minaret", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: "During which month do Muslims observe fasting?",
    options: [
      { id: "a", text: "Shawwal", isCorrect: false },
      { id: "b", text: "Rajab", isCorrect: false },
      { id: "c", text: "Ramadan", isCorrect: true },
      { id: "d", text: "Muharram", isCorrect: false },
    ],
  },
]

export default function QuizApp() {
  const [currentScreen, setCurrentScreen] = useState<"start" | "quiz" | "results">("start")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [score, setScore] = useState(0)

  const handleStartQuiz = () => {
    setCurrentScreen("quiz")
    setCurrentQuestion(0)
    setAnswers({})
    setScore(0)
  }

  const handleAnswerSelect = (questionId: number, answerId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answerId }))
  }

  const handleNextQuestion = () => {
    const currentQ = quizData[currentQuestion]
    const selectedAnswer = answers[currentQ.id]
    const correctAnswer = currentQ.options.find((opt) => opt.isCorrect)

    if (selectedAnswer === correctAnswer?.id) {
      setScore((prev) => prev + 1)
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setCurrentScreen("results")
    }
  }

  const handleRestartQuiz = () => {
    setCurrentScreen("start")
    setCurrentQuestion(0)
    setAnswers({})
    setScore(0)
  }

  if (currentScreen === "start") {
    return <QuizStart onStart={handleStartQuiz} />
  }

  if (currentScreen === "quiz") {
    return (
      <QuizQuestion
        question={quizData[currentQuestion]}
        currentQuestion={currentQuestion + 1}
        totalQuestions={quizData.length}
        selectedAnswer={answers[quizData[currentQuestion].id]}
        onAnswerSelect={handleAnswerSelect}
        onNext={handleNextQuestion}
      />
    )
  }

  return <QuizResults score={score} totalQuestions={quizData.length} onRestart={handleRestartQuiz} />
}
