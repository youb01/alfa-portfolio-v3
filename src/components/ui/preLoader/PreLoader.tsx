import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface PreloaderProps {
  isLoading: boolean;
  onComplete: () => void;
}

export const Preloader = ({ isLoading, onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        const increment = prev < 50 ? 3 : prev < 80 ? 2 : prev < 95 ? 1 : 0.5;
        return Math.min(prev + increment, 100);
      });
    }, 35);

    return () => clearInterval(interval);
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgb(var(--bg-primary))] overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 0.02,
              scale: 1.2,
              transition: {
                duration: 1.5,
                ease: "easeOut",
              },
            }}
            className="absolute inset-0 bg-gradient-radial from-[rgb(var(--text-primary)/0.08)] via-transparent to-transparent"
          />

          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: -50,
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
              }}
              className="mb-20 md:mb-24"
            >
              <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black text-[rgb(var(--text-primary))] tracking-tighter leading-none">
                ALFA
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.3, duration: 0.6 },
              }}
              exit={{
                opacity: 0,
                y: 20,
                transition: { duration: 0.6 },
              }}
              className="flex flex-col items-center gap-6 w-full max-w-md"
            >
              <div className="flex items-baseline justify-between w-full px-1">
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.5, duration: 0.5 },
                  }}
                  className="text-xs md:text-sm font-medium text-[rgb(var(--text-tertiary))] uppercase tracking-[0.2em]"
                >
                  Loading
                </motion.span>

                <motion.span
                  key={Math.floor(progress)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl md:text-3xl font-bold font-mono text-[rgb(var(--text-primary))] tabular-nums"
                >
                  {Math.floor(progress)}
                  <span className="text-lg md:text-xl text-[rgb(var(--text-secondary))]">
                    %
                  </span>
                </motion.span>
              </div>

              <div className="relative w-full h-1.5 md:h-2 bg-[rgb(var(--bg-tertiary))] rounded-full overflow-hidden shadow-inner">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgb(var(--text-primary)/0.1)] to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[rgb(var(--text-primary))] to-[rgb(var(--text-primary)/0.9)] rounded-full shadow-lg"
                  style={{
                    boxShadow: `0 0 20px rgb(var(--text-primary) / 0.3)`,
                  }}
                />

                <motion.div
                  initial={{ left: "0%" }}
                  animate={{ left: `${progress}%` }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 md:w-5 md:h-5 bg-[rgb(var(--text-primary))] rounded-full shadow-xl"
                  style={{
                    boxShadow: `0 0 16px rgb(var(--text-primary) / 0.6), 0 0 4px rgb(var(--text-primary))`,
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-[rgb(var(--text-primary))] rounded-full"
                  />
                </motion.div>
              </div>

              <motion.p
                animate={{
                  opacity: progress < 100 ? [0.5, 1, 0.5] : 1,
                }}
                transition={{
                  duration: 2,
                  repeat: progress < 100 ? Infinity : 0,
                  ease: "easeInOut",
                }}
                className="text-xs md:text-sm font-medium text-[rgb(var(--text-secondary))] uppercase tracking-[0.15em] mt-2"
              >
                {progress < 30 && "Initializing"}
                {progress >= 30 && progress < 90 && "Loading Assets"}
                {progress >= 90 && progress < 100 && "Almost Ready"}
                {progress === 100 && "Complete"}
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.6, duration: 0.5 },
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              transition: { duration: 0.4 },
            }}
            className="absolute top-6 left-6 md:top-8 md:left-8 w-12 h-12 md:w-16 md:h-16"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[rgb(var(--border-secondary))] to-transparent" />
            <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[rgb(var(--border-secondary))] to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.7, duration: 0.5 },
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              transition: { duration: 0.4 },
            }}
            className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 md:w-16 md:h-16"
          >
            <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-[rgb(var(--border-secondary))] to-transparent" />
            <div className="absolute bottom-0 right-0 w-[2px] h-full bg-gradient-to-t from-[rgb(var(--border-secondary))] to-transparent" />
          </motion.div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                  opacity: 0,
                }}
                animate={{
                  y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                  opacity: [0, 0.4, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
                className="absolute w-1 h-1 bg-[rgb(var(--text-tertiary))] rounded-full"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
