import { HiArrowRight, HiCheckCircle } from 'react-icons/hi';
import { config } from '../config';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const CTA = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="cta" className="py-20 md:py-32 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-pink-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-float delay-200"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div
          className={`bg-gradient-to-br from-indigo-600 to-pink-600 rounded-3xl p-8 md:p-16 shadow-2xl ${
            isVisible ? 'animate-scale-in' : 'opacity-0'
          }`}
        >
          <div className="text-center space-y-8">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full">
              <HiCheckCircle className="w-12 h-12 text-white" />
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {config.cta.title}
              </h2>
              <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto">
                {config.cta.description}
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-10 py-5 bg-white text-indigo-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                {config.cta.buttonText}
                <HiArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-sm text-indigo-100">
                {config.cta.note}
              </p>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              {['Easy Setup', 'No Credit Card', '24/7 Support'].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2 text-white"
                >
                  <HiCheckCircle className="w-5 h-5 text-green-300" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
