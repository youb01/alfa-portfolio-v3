import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BackgroundLines } from "../components/ui/backgrounds/BackgroundLines";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "404 — Page Not Found · Ayoub Lfatmi";
  }, []);

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-primary))] relative overflow-hidden flex flex-col">
      <BackgroundLines />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">

        <motion.span
          className="block text-[10px] font-bold uppercase tracking-[0.35em] text-[rgb(var(--text-tertiary))] mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Error · 404
        </motion.span>

        <motion.h1
          className="font-extrabold uppercase leading-none text-[rgb(var(--text-primary))] mb-6"
          style={{ fontSize: "clamp(5rem, 20vw, 16rem)", letterSpacing: "-0.04em" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
        >
          404
        </motion.h1>

        <motion.p
          className="text-base text-[rgb(var(--text-secondary))] mb-12 max-w-sm"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
        >
          This page doesn't exist or has been moved.
        </motion.p>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: EASE }}
        >
          <button
            onClick={() => navigate("/")}
            className="text-[10px] font-bold uppercase tracking-[0.22em] px-6 py-3 transition-colors duration-150"
            style={{
              background: "rgb(var(--text-primary))",
              color: "rgb(var(--bg-primary))",
              border: "1px solid rgb(var(--text-primary))",
            }}
          >
            Back to home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="text-[10px] font-bold uppercase tracking-[0.22em] px-6 py-3 transition-colors duration-150 text-[rgb(var(--text-tertiary))] hover:text-[rgb(var(--text-primary))]"
            style={{ border: "1px solid rgb(var(--border-primary))" }}
          >
            Go back
          </button>
        </motion.div>
      </div>

      {/* Bottom label */}
      <div className="relative z-10 px-6 py-8 text-center">
        <span className="text-[10px] font-medium text-[rgb(var(--text-tertiary))] tracking-[0.1em]">
          ayoublfatmi.nl
        </span>
      </div>
    </div>
  );
};
