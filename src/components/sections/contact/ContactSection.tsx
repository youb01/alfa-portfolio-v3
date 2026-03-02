import { motion } from "framer-motion";
import React from "react";
import {
  contactMethods,
  socialLinks,
  contactContent,
} from "../data/ContactData";
import { ContactCard } from "../../ui/contact/ContactCard";
import { SocialLinks } from "../../ui/SocialLink";
import { ContactForm } from "../../ui/contact/ContactForm";
import { BackgroundLines } from "../../ui/backgrounds/BackgroundLines";
import { SectionHeader } from "../../ui/SectionHeader";

export const ContactSection: React.FC = () => {
  const [isDark, setIsDark] = React.useState(
    document.documentElement.classList.contains("dark"),
  );

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={contactContent.meta.id}
      className="relative bg-[rgb(var(--bg-primary))] overflow-hidden"
    >
      <BackgroundLines />

      <div className="relative z-10 pt-20 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          <SectionHeader
            number="06"
            title={contactContent.heading.title}
            titleMuted={contactContent.heading.titleMuted}
            subtitle={contactContent.subtitle}
          />

          {/* two‑column layout */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* left: contact methods list */}
            <div className="flex flex-col gap-8">
              {contactMethods.map((method) => (
                <ContactCard key={method.id} method={method} />
              ))}
            </div>

            {/* right: form */}
            <ContactForm isDark={isDark} />
          </div>

          {/* social links */}
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <SocialLinks links={socialLinks} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
