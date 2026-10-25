import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

interface AnimatedCounterProps {
  value: string; // e.g. "2,500+", "100%", "99%", "50+"
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({ value, duration = 1.8, className = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState<string>('0');

  useEffect(() => {
    if (!isInView) return;

    // Parse numeric part and prefix/suffix
    const match = value.match(/^([^\d]*)([\d,.]+)([^\d]*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1] || '';
    const rawNumberStr = match[2].replace(/,/g, '');
    const suffix = match[3] || '';
    const target = parseFloat(rawNumberStr);

    if (isNaN(target)) {
      setDisplayValue(value);
      return;
    }

    const hasComma = match[2].includes(',');
    const hasDecimal = match[2].includes('.');
    const decimals = hasDecimal ? match[2].split('.')[1].length : 0;

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easedProgress = easeOutQuart(progress);
      const current = easedProgress * target;

      let formattedNumber: string;
      if (hasDecimal) {
        formattedNumber = current.toFixed(decimals);
      } else {
        formattedNumber = Math.round(current).toString();
      }

      if (hasComma) {
        formattedNumber = formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }

      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
