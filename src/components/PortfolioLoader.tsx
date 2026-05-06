import { useEffect, useState } from "react";
import { LOADER_DURATION, LOADER_EXIT_DURATION } from "../lib/animation";

type PortfolioLoaderProps = {
  onFinish: () => void;
  duration?: number;
};

const PortfolioLoader = ({
  onFinish,
  duration = LOADER_DURATION,
}: PortfolioLoaderProps) => {
  const [showFullName, setShowFullName] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    let leaveTimer: number | undefined;

    const nameTimer = window.setTimeout(() => {
      setShowFullName(true);
    }, 480);

    const finishTimer = window.setTimeout(() => {
      setIsLeaving(true);

      leaveTimer = window.setTimeout(() => {
        onFinish();
      }, LOADER_EXIT_DURATION);
    }, duration);

    return () => {
      window.clearTimeout(nameTimer);
      window.clearTimeout(finishTimer);
      if (leaveTimer) {
        window.clearTimeout(leaveTimer);
      }
    };
  }, [duration, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-[#0d182e] transition-opacity ${
        isLeaving ? "opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: `${LOADER_EXIT_DURATION}ms` }}
    >
      <div className="flex flex-col items-center justify-center px-6 text-center">
        {!showFullName ? (
          <h1 className="loader-fade-up text-6xl font-bold tracking-tight text-indigo-500/60 sm:text-7xl md:text-8xl">
            Z
          </h1>
        ) : (
          <div className="loader-fade-up">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl">
              Zubair{" "}
              <span className="text-indigo-400 loader-glow-text">Khan</span>
            </h1>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.45em] text-white/45 sm:text-sm md:text-base">
              Frontend Developer
            </p>
          </div>
        )}

        <div className="mt-8 h-[2px] w-36 overflow-hidden bg-white/10 sm:w-44 md:w-52">
          <div
            className="loader-progress h-full bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-400"
            style={
              {
                "--loader-time": `${duration}ms`,
              } as React.CSSProperties
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioLoader;
