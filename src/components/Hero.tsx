import { HiArrowRight, HiPlay } from 'react-icons/hi';
import { config } from '../config';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-float delay-200"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-float delay-400"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-full border border-indigo-200 dark:border-indigo-800 animate-fade-in-down">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {config.brand.tagline}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up">
              <span className="block text-gray-900 dark:text-white">
                {config.hero.title}
              </span>
              <span className="block gradient-text mt-2">
                {config.hero.subtitle}
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up delay-100">
              {config.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-200">
              <a
                href="#cta"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all"
              >
                {config.hero.ctaPrimary}
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#demo"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-xl font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-500 hover:shadow-xl transition-all"
              >
                <HiPlay className="w-5 h-5" />
                {config.hero.ctaSecondary}
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-8 justify-center lg:justify-start animate-fade-in delay-300">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt={`User ${i}`}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900"
                  />
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Join 10,000+ users
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Already transforming their workflow
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative animate-fade-in-up delay-400">
            <div className="relative">
              {/* Placeholder for hero image - replace with actual image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-500 to-pink-500 p-1">
                <div className="bg-white dark:bg-slate-900 rounded-xl p-8 sm:p-12">
                  <div className="space-y-4">
                    {/* Mock UI Elements */}
                    <div className="h-4 bg-gradient-to-r from-indigo-400 to-pink-400 rounded w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-gradient-to-r from-purple-400 to-indigo-400 rounded w-full animate-pulse delay-100"></div>
                    <div className="h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded w-5/6 animate-pulse delay-200"></div>

                    <div className="grid grid-cols-2 gap-4 pt-8">
                      <div className="h-24 bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900 dark:to-indigo-800 rounded-lg animate-pulse-glow"></div>
                      <div className="h-24 bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800 rounded-lg animate-pulse-glow delay-100"></div>
                      <div className="h-24 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-lg animate-pulse-glow delay-200"></div>
                      <div className="h-24 bg-gradient-to-br from-indigo-100 to-purple-200 dark:from-indigo-900 dark:to-purple-800 rounded-lg animate-pulse-glow delay-300"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-3xl shadow-lg animate-float">
                ⚡
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center text-2xl shadow-lg animate-float delay-300">
                🎯
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-white dark:fill-slate-900"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
