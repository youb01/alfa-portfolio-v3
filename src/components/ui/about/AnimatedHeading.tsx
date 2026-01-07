import { motion } from "framer-motion";

interface HeadingPart {
  text: string;
  emphasized?: boolean;
}

interface AnimatedHeadingProps {
  parts: readonly HeadingPart[];
  className?: string;
}

export const AnimatedHeading = ({
  parts,
  className = "",
}: AnimatedHeadingProps) => {
  let delayCounter = 0.4;

  return (
    <h2
      className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.3] md:leading-[1.4] text-[rgb(var(--text-primary))] mb-8 md:mb-10 ${className}`}
    >
      {parts.map((part, index) => {
        const isEmphasized = part.emphasized;
        const delay = isEmphasized ? (delayCounter += 0.2) : delayCounter;

        return (
          <motion.span
            key={index}
            initial={{ opacity: isEmphasized ? 0.7 : 1 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className={isEmphasized ? "font-semibold" : "font-light"}
          >
            {part.text}
            {index === 2 && <br className="hidden sm:block" />}
          </motion.span>
        );
      })}
    </h2>
  );
};
