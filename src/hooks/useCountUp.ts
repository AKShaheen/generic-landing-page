import { useEffect, useState } from 'react';

export const useCountUp = (target: string, isVisible: boolean): string => {
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isVisible) return;

    // Extract numeric value and suffix
    const numericMatch = target.match(/[\d.]+/);
    const suffix = target.replace(/[\d.]+/, '');

    if (!numericMatch) {
      setDisplayValue(target);
      return;
    }

    const targetNum = parseFloat(numericMatch[0]);
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetNum / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, targetNum);

      // Format the number
      let formattedValue: string;
      if (targetNum >= 1000) {
        formattedValue = Math.floor(current).toLocaleString();
      } else if (targetNum % 1 !== 0) {
        formattedValue = current.toFixed(1);
      } else {
        formattedValue = Math.floor(current).toString();
      }

      setDisplayValue(formattedValue + suffix);

      if (step >= steps) {
        clearInterval(timer);
        setDisplayValue(target);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return displayValue;
};
