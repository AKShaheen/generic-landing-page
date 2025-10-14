import {
  HiLightningBolt,
  HiShieldCheck,
  HiPuzzle,
  HiChartBar,
  HiSupport,
  HiTrendingUp
} from 'react-icons/hi';
import { config } from '../config';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const iconMap = {
  speed: HiLightningBolt,
  security: HiShieldCheck,
  integration: HiPuzzle,
  analytics: HiChartBar,
  support: HiSupport,
  scalable: HiTrendingUp,
};

const Features = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="features" className="py-20 md:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" ref={ref}>
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            {config.features.title}
          </h2>
          <p className={`text-lg md:text-xl text-gray-600 dark:text-gray-400 ${
            isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'
          }`}>
            {config.features.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.features.items.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || HiLightningBolt;

            return (
              <div
                key={index}
                className={`group relative p-8 bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-pink-500/0 group-hover:from-indigo-500/5 group-hover:to-pink-500/5 rounded-2xl transition-all duration-300"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 p-0.5 group-hover:scale-110 transition-transform">
                    <div className="w-full h-full bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 rounded-full blur-2xl group-hover:from-indigo-500/20 group-hover:to-pink-500/20 transition-all"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 ${
          isVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'
        }`}>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to learn more about our features?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all"
          >
            Explore All Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
