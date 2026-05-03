"use client";

import { useState, useEffect } from "react";

export function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Evita errores de hidratación

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isMounted) return null;

  return (
    <div className="flex justify-center gap-4 my-8">
      {[
        { label: "Días", value: timeLeft.days },
        { label: "Horas", value: timeLeft.hours },
        { label: "Minutos", value: timeLeft.minutes },
        { label: "Segundos", value: timeLeft.seconds },
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white border border-[#D35400]/20 rounded-2xl flex items-center justify-center shadow-sm mb-2">
            <span className="font-serif text-2xl md:text-3xl font-bold text-[#D35400]">
              {item.value.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs uppercase tracking-wider text-[#5C4033] font-bold">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}