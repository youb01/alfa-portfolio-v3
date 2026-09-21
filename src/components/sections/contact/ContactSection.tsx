import { motion } from "framer-motion";
import React, { useState } from "react";
import { contactMethods, socialLinks, contactContent } from "../../../data/contact";
import { ContactForm } from "../../ui/contact/ContactForm";
import { BackgroundLines } from "../../ui/backgrounds/BackgroundLines";
import { SectionHeader } from "../../ui/SectionHeader";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent, method: typeof contactMethods[0]) => {
    if (method.type !== "email") return;
    e.preventDefault();
    navigator.clipboard.writeText(method.value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
  <section id={contactContent.meta.id} className="relative bg-[rgb(var(--bg-primary))] overflow-hidden">
    <BackgroundLines />

    <div className="relative z-10 pt-20 md:pt-28 lg:pt-36 pb-20 md:pb-28 lg:pb-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">

        <SectionHeader
          number="05"
          title={contactContent.heading.title}
          titleMuted={contactContent.heading.titleMuted}
          subtitle={contactContent.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* ── Left: info ── */}
          <motion.div
            className="flex flex-col gap-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            {/* Contact methods */}
            <div>
              {contactMethods.map((method, i) => {
                const isClickable = method.type !== "location";
                const isEmail = method.type === "email";
                return (
                  <a
                    key={method.id}
                    href={method.href}
                    target={method.type === "social" ? "_blank" : undefined}
                    rel={method.type === "social" ? "noopener noreferrer" : undefined}
                    onClick={(e) => {
                      if (!isClickable) { e.preventDefault(); return; }
                      if (isEmail) handleEmailClick(e, method);
                    }}
                    className={`grid grid-cols-[120px_1fr] items-baseline border-t border-[rgb(var(--border-primary))] py-5 group ${isClickable ? "cursor-pointer" : "cursor-default"}`}
                    style={i === contactMethods.length - 1 ? { borderBottom: "1px solid rgb(var(--border-primary))" } : {}}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[rgb(var(--text-tertiary))]">
                      {method.label}
                    </span>
                    <span className="flex items-center gap-2 text-sm font-medium text-[rgb(var(--text-secondary))] group-hover:text-[rgb(var(--text-primary))] transition-colors duration-150">
                      {isEmail && copied ? "Copied!" : method.value}
                      {isEmail && (
                        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))] opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                          {copied ? "" : "Copy"}
                        </span>
                      )}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 flex-wrap">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold uppercase tracking-[0.22em] px-4 py-2 border border-[rgb(var(--border-primary))] text-[rgb(var(--text-tertiary))] hover:text-[rgb(var(--text-primary))] hover:border-[rgb(var(--text-primary))] transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <ContactForm />

        </div>
      </div>
    </div>
  </section>
  );
};
