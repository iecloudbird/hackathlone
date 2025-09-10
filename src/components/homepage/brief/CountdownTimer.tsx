import { type FC } from "react";
import { useCountdown } from "@/utils/use-countdown";

interface CountdownTimerProps {
  targetDate: string;
  label: string;
}

const TimeBlock: FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="text-4xl font-bold text-white lg:text-5xl">
      {String(value).padStart(2, "0")}
    </div>
    <div className="text-sm text-gray-300 lg:text-base">{label}</div>
  </div>
);

export const CountdownTimer: FC<CountdownTimerProps> = ({
  targetDate,
  label,
}) => {
  const timeLeft = useCountdown(targetDate);

  return (
    <div className="relative overflow-hidden rounded-xl">
      {/* Blurred background */}
      <div className="absolute inset-0 bg-[#363636]/40"></div>

      {/* Content */}
      <div className="relative flex items-center justify-center gap-4 p-4">
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-semibold text-white lg:text-2xl">
            {label}
          </h3>
          <div className="h-8 w-[2px] bg-[#363636]"></div>
        </div>
        <div className="flex items-center justify-center gap-4 lg:gap-6">
          <TimeBlock value={timeLeft.days} label="Days" />
          <span className="text-2xl text-white lg:text-3xl">:</span>
          <TimeBlock value={timeLeft.hours} label="Hours" />
          <span className="text-2xl text-white lg:text-3xl">:</span>
          <TimeBlock value={timeLeft.minutes} label="Mins" />
          <span className="text-2xl text-white lg:text-3xl">:</span>
          <TimeBlock value={timeLeft.seconds} label="Secs" />
        </div>
      </div>
    </div>
  );
};
