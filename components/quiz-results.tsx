"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface QuizResultsProps {
  score: number
  totalQuestions: number
  onRestart: () => void
}

export function QuizResults({ score, totalQuestions, onRestart }: QuizResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100)

  const getResultMessage = () => {
    if (percentage >= 80) return { message: "Excellent work! 🎉", emoji: "🏆", color: "text-emerald-600" }
    if (percentage >= 60) return { message: "Good job! 👏", emoji: "⭐", color: "text-emerald-600" }
    if (percentage >= 40) return { message: "Not bad! 👍", emoji: "💪", color: "text-yellow-600" }
    return { message: "Keep practicing! 📚", emoji: "🎯", color: "text-orange-600" }
  }

  const result = getResultMessage()

  return (
    <div className="min-h-screen islamic-bg overflow-hidden">
      <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center relative">
        <div className="absolute left-4 lg:left-8 xl:left-12 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <Image
            src="/images/mosque-illustration.png"
            alt="Masjid an-Nabawi"
            width={200}
            height={220}
            className="drop-shadow-2xl opacity-70 lg:opacity-80 xl:w-60 xl:h-auto 2xl:w-72"
          />
        </div>

        <div className="absolute top-8 sm:top-12 left-1/2 transform -translate-x-1/2 lg:hidden">
          <Image
            src="/images/mosque-illustration.png"
            alt="Masjid an-Nabawi"
            width={120}
            height={135}
            className="drop-shadow-xl opacity-60 sm:opacity-70 sm:w-40 sm:h-auto"
          />
        </div>

        <div className="absolute top-12 sm:top-16 lg:top-20 right-8 sm:right-12 lg:right-16 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 opacity-50 lg:opacity-60">
          <div className="w-full h-full bg-emerald-400/80 rounded-full flex items-center justify-center text-lg sm:text-xl lg:text-2xl animate-bounce">
            🎊
          </div>
        </div>
        <div className="absolute top-20 sm:top-24 lg:top-32 right-10 sm:right-14 lg:right-20 w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 opacity-50 lg:opacity-60">
          <div className="w-full h-full bg-yellow-400/80 rounded-lg transform rotate-12 flex items-center justify-center text-base sm:text-lg lg:text-xl animate-pulse">
            🌟
          </div>
        </div>
        <div className="absolute bottom-20 sm:bottom-24 lg:bottom-32 right-10 sm:right-14 lg:right-20 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 opacity-50 lg:opacity-60">
          <div className="w-full h-full bg-emerald-500/80 rounded-full flex items-center justify-center text-sm sm:text-base lg:text-lg animate-spin">
            ⚡
          </div>
        </div>
        <div className="absolute bottom-12 sm:bottom-16 lg:bottom-20 right-8 sm:right-12 lg:right-16 w-12 h-12 sm:w-14 sm:h-14 lg:w-18 lg:h-18 opacity-50 lg:opacity-60">
          <div className="w-full h-full bg-orange-400/60 rounded-lg transform -rotate-12 flex items-center justify-center text-lg sm:text-xl lg:text-2xl animate-bounce">
            🎈
          </div>
        </div>

        <div className="absolute top-16 sm:top-20 lg:top-24 right-16 sm:right-24 lg:right-32 floating-cloud">
          <svg className="w-10 h-5 sm:w-12 sm:h-6 lg:w-15 lg:h-7" viewBox="0 0 60 30">
            <ellipse cx="15" cy="20" rx="15" ry="10" fill="white" opacity="0.6" />
            <ellipse cx="30" cy="15" rx="20" ry="12" fill="white" opacity="0.6" />
            <ellipse cx="45" cy="20" rx="15" ry="10" fill="white" opacity="0.6" />
          </svg>
        </div>

        <Card className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-4 p-6 sm:p-8 lg:p-10 text-center shadow-2xl bg-white/95 backdrop-blur-sm border-0 rounded-xl lg:rounded-2xl lg:ml-64 xl:ml-80 mt-24 sm:mt-32 lg:mt-0">
          <div className="mb-4 sm:mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-3xl sm:text-4xl lg:text-5xl">{result.emoji}</span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-emerald-800 mb-2 lg:mb-3 text-balance">
              Quiz Complete!
            </h1>
            <p className={`text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 ${result.color}`}>
              {result.message}
            </p>
          </div>

          <div className="bg-emerald-50 rounded-lg lg:rounded-xl p-4 sm:p-5 lg:p-6 mb-4 sm:mb-6 border border-emerald-100">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-emerald-700 mb-1 sm:mb-2">
                {score}/{totalQuestions}
              </div>
              <div className="text-sm sm:text-base lg:text-lg text-emerald-600 mb-1 sm:mb-2">Correct Answers</div>
              <div className={`text-xl sm:text-2xl lg:text-3xl font-bold ${result.color}`}>{percentage}%</div>
            </div>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <Button
              onClick={onRestart}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg text-sm sm:text-base lg:text-lg touch-manipulation"
            >
              Take Quiz Again
            </Button>
            <Button
              variant="outline"
              className="w-full border-emerald-500 text-emerald-700 hover:bg-emerald-50 font-semibold py-2.5 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 rounded-lg sm:rounded-xl transition-all duration-200 bg-transparent text-sm sm:text-base lg:text-lg touch-manipulation"
            >
              Share Results
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
