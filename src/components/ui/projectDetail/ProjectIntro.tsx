import { motion } from "framer-motion";

interface ProjectIntroProps {
  introduction: string;
}

export const ProjectIntro = ({ introduction }: ProjectIntroProps) => (
  <section className="py-24 md:py-32">
    <div className="max-w-[760px] mx-auto px-6 md:px-8 text-center">
      <motion.div
        className="w-[1px] h-16 mx-auto mb-10 origin-top"
        style={{ background: "rgb(var(--border-primary))" }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-80px" }}
      />
      <motion.p
        className="text-xl md:text-2xl lg:text-[1.65rem] font-light leading-[1.65] text-[rgb(var(--text-primary))]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-80px" }}
      >
        {introduction}
      </motion.p>
    </div>
  </section>
);
