"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface QuizStartProps {
  onStart: () => void
}

export function QuizStart({ onStart }: QuizStartProps) {
  return (
    <div className="min-h-screen islamic-bg">
      {/* Full width grid */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        
        {/* Left side - Mosque illustration */}
        <div className="hidden lg:flex relative min-h-screen w-full items-center justify-center overflow-hidden">
          <Image
            src="/images/mosque-final.svg"
            alt="Masjid an-Nabawi"
            fill
            className="object-contain object-center  md:p-29 md:mt-6"
            priority
          />

          {/* Floating clouds */}
          <div className="absolute top-12 left-8 floating-cloud">
            <svg className="w-24 h-12" viewBox="0 0 120 60">
              <ellipse cx="30" cy="35" rx="30" ry="22" fill="white" opacity="0.8" />
              <ellipse cx="60" cy="30" rx="35" ry="26" fill="white" opacity="0.8" />
              <ellipse cx="90" cy="35" rx="30" ry="22" fill="white" opacity="0.8" />
            </svg>
          </div>

          <div className="absolute bottom-20 right-8 floating-cloud">
            <svg className="w-26 h-13" viewBox="0 0 130 65">
              <ellipse cx="32" cy="40" rx="32" ry="26" fill="white" opacity="0.7" />
              <ellipse cx="65" cy="33" rx="40" ry="30" fill="white" opacity="0.7" />
              <ellipse cx="98" cy="40" rx="32" ry="26" fill="white" opacity="0.7" />
            </svg>
          </div>
        </div>

        {/* Right side - Quiz card */}
        <div className="flex items-center justify-center relative px-6 py-12">
          {/* Small screen mosque icon */}
          <div className="absolute top-0 right-4 sm:right-8 lg:hidden">
            <Image
              src="/images/mosque-final.svg"
              alt="Masjid an-Nabawi"
              width={80}
              height={88}
              className="drop-shadow-md   sm:opacity-25 w-26 h-auto sm:w-32"
            />
          </div>

          <Card className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-4 p-6 sm:p-8 lg:p-10 text-center shadow-2xl bg-white/95 backdrop-blur-sm border-0 rounded-2xl lg:rounded-3xl">
            <div className="mb-6 lg:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-emerald-800 mb-2 lg:mb-3 leading-tight">
                Islamic Knowledge
              </h1>
              <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-emerald-700 mb-3 lg:mb-4">
                Quiz Application
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-emerald-600 leading-relaxed px-2 lg:px-4">
                Test your knowledge of Islamic history, teachings, and traditions through our comprehensive quiz.
              </p>
            </div>

            <div className="space-y-2 lg:space-y-3 mb-6 lg:mb-8">
              <div className="flex items-center justify-center gap-2 lg:gap-3 text-emerald-700">
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-emerald-500 rounded-full"></div>
                <span className="font-medium text-sm sm:text-base lg:text-lg">5 Comprehensive Questions</span>
              </div>
              <div className="flex items-center justify-center gap-2 lg:gap-3 text-emerald-700">
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-yellow-500 rounded-full"></div>
                <span className="font-medium text-sm sm:text-base lg:text-lg">Multiple Choice Format</span>
              </div>
              <div className="flex items-center justify-center gap-2 lg:gap-3 text-emerald-700">
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-emerald-500 rounded-full"></div>
                <span className="font-medium text-sm sm:text-base lg:text-lg">Instant Results & Feedback</span>
              </div>
            </div>

            <Button
              onClick={onStart}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 sm:py-4 lg:py-5 px-6 sm:px-8 rounded-xl lg:rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg text-base sm:text-lg lg:text-xl"
            >
              Begin Your Journey
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
