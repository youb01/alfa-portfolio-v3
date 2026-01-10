import { motion } from "framer-motion";

interface AmbientOverlayProps {
  variant?: "hero" | "about" | "default";
}

export const AmbientOverlay = ({ variant = "default" }: AmbientOverlayProps) => {
  const gradients = {
    hero: "from-purple-500/10 via-blue-500/5 to-pink-500/10",
    about: "from-blue-500/10 via-purple-500/5 to-indigo-500/10",
    default: "from-gray-500/5 via-transparent to-gray-500/5",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {/* Gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute top-0 right-0 w-96 h-96 bg-gradient-radial ${gradients[variant]} blur-3xl rounded-full`}
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className={`absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial ${gradients[variant]} blur-3xl rounded-full`}
      />
    </motion.div>
  );
};
