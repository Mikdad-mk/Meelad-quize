"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

interface Option {
  id: string
  text: string
  isCorrect: boolean
}

interface Question {
  id: number
  question: string
  options: Option[]
}

interface QuizQuestionProps {
  question: Question
  currentQuestion: number
  totalQuestions: number
  selectedAnswer?: string
  onAnswerSelect: (questionId: number, answerId: string) => void
  onNext: () => void
}

export function QuizQuestion({
  question,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  onNext,
}: QuizQuestionProps) {
  const progress = (currentQuestion / totalQuestions) * 100

  return (
    <div className="min-h-screen islamic-bg overflow-hidden">
      <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center relative">
        <div className="absolute right-4 lg:right-8 bottom-4 lg:bottom-8 hidden md:block">
          <Image
            src="/images/mosque-illustration.png"
            alt="Masjid an-Nabawi"
            width={120}
            height={135}
            className="drop-shadow-lg opacity-20 lg:opacity-25 lg:w-36 lg:h-auto xl:w-40"
          />
        </div>

        <div className="absolute top-4 right-4 md:hidden">
          <Image
            src="/images/mosque-illustration.png"
            alt="Masjid an-Nabawi"
            width={60}
            height={68}
            className="drop-shadow-md opacity-15"
          />
        </div>

        <div className="absolute top-8 sm:top-12 lg:top-16 left-4 sm:left-6 lg:left-8 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 opacity-40 lg:opacity-50">
          <div className="w-full h-full bg-secondary/80 rounded-lg transform rotate-45 flex items-center justify-center text-sm sm:text-base lg:text-lg">
            💡
          </div>
        </div>
        <div className="absolute top-12 sm:top-16 lg:top-24 right-8 sm:right-10 lg:right-12 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 opacity-40 lg:opacity-50">
          <div className="w-full h-full bg-accent/80 rounded-full flex items-center justify-center text-base sm:text-lg lg:text-xl">
            ⭐
          </div>
        </div>
        <div className="absolute bottom-16 sm:bottom-20 lg:bottom-24 left-6 sm:left-8 lg:left-12 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 opacity-40 lg:opacity-50">
          <div className="w-full h-full bg-destructive/60 rounded-lg transform -rotate-12 flex items-center justify-center text-base sm:text-lg lg:text-xl">
            🎯
          </div>
        </div>
        <div className="absolute bottom-8 sm:bottom-12 lg:bottom-16 right-6 sm:right-8 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 opacity-40 lg:opacity-50">
          <div className="w-full h-full bg-primary/70 rounded-full flex items-center justify-center text-sm sm:text-base lg:text-lg">
            🔥
          </div>
        </div>

        <div className="absolute top-8 sm:top-12 lg:top-16 right-12 sm:right-16 lg:right-20 floating-cloud">
          <svg className="w-8 h-4 sm:w-10 sm:h-5 lg:w-12 lg:h-6" viewBox="0 0 50 25">
            <ellipse cx="12" cy="18" rx="12" ry="8" fill="white" opacity="0.6" />
            <ellipse cx="25" cy="15" rx="15" ry="10" fill="white" opacity="0.6" />
            <ellipse cx="38" cy="18" rx="12" ry="8" fill="white" opacity="0.6" />
          </svg>
        </div>

        <div className="absolute bottom-12 sm:bottom-16 lg:bottom-20 left-8 sm:left-12 lg:left-16 floating-cloud">
          <svg className="w-10 h-5 sm:w-12 sm:h-6 lg:w-15 lg:h-7" viewBox="0 0 60 30">
            <ellipse cx="15" cy="20" rx="15" ry="10" fill="white" opacity="0.5" />
            <ellipse cx="30" cy="17" rx="18" ry="12" fill="white" opacity="0.5" />
            <ellipse cx="45" cy="20" rx="15" ry="10" fill="white" opacity="0.5" />
          </svg>
        </div>

        <Card className="w-full max-w-sm sm:max-w-md lg:max-w-2xl xl:max-w-3xl mx-4 p-4 sm:p-6 lg:p-8 shadow-2xl bg-white/95 backdrop-blur-sm rounded-xl lg:rounded-2xl border-0">
          <div className="mb-4 sm:mb-6">
            <div className="flex items-center justify-between mb-3 lg:mb-4">
              <span className="text-xs sm:text-sm lg:text-base font-semibold text-emerald-700">
                Question {currentQuestion} of {totalQuestions}
              </span>
              <div className="px-2 sm:px-3 lg:px-4 py-1 sm:py-2 bg-emerald-100 rounded-full">
                <span className="text-xs sm:text-sm lg:text-base font-bold text-emerald-800">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>
            <Progress value={progress} className="mb-4 sm:mb-6 h-1.5 sm:h-2" />
          </div>

          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-emerald-800 mb-4 sm:mb-6 text-balance leading-relaxed">
              {question.question}
            </h2>

            <div className="space-y-2 sm:space-y-3">
              {question.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => onAnswerSelect(question.id, option.id)}
                  className={`w-full p-3 sm:p-4 lg:p-5 text-left rounded-lg lg:rounded-xl border-2 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] touch-manipulation ${
                    selectedAnswer === option.id
                      ? "border-emerald-500 bg-emerald-50 text-emerald-800 shadow-lg"
                      : "border-emerald-200 bg-white hover:border-emerald-400 hover:bg-emerald-50"
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div
                      className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full border-2 flex items-center justify-center text-xs sm:text-sm lg:text-base font-bold flex-shrink-0 ${
                        selectedAnswer === option.id
                          ? "border-emerald-500 bg-emerald-500 text-white"
                          : "border-emerald-300 text-emerald-600"
                      }`}
                    >
                      {option.id.toUpperCase()}
                    </div>
                    <span className="text-pretty text-emerald-800 font-medium text-sm sm:text-base lg:text-lg leading-relaxed">
                      {option.text}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              onClick={onNext}
              disabled={!selectedAnswer}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 sm:py-3 lg:py-4 px-6 sm:px-8 lg:px-10 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg text-sm sm:text-base lg:text-lg touch-manipulation"
            >
              {currentQuestion === totalQuestions ? "Complete Quiz" : "Next Question"}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
