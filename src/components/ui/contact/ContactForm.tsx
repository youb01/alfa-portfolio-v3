import { motion } from "framer-motion";
import React, { useState } from "react";
import { Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMAILJS_SERVICE_ID = "service_your_service_id";
const EMAILJS_TEMPLATE_ID = "template_your_template_id";
const EMAILJS_PUBLIC_KEY = "your_public_key";

export const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "lfatmi.ayoub@gmail.com",
      });
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error(err);
      setError(t("contact.form.errorMessage"));
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-[rgb(var(--border-primary))] bg-[rgb(var(--bg-elevated))] text-[rgb(var(--text-primary))] placeholder-[rgb(var(--text-secondary))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--interactive-default))] focus:ring-offset-2 focus:ring-offset-[rgb(var(--bg-primary))] transition-colors";

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true, margin: "-60px" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder={t("contact.form.namePlaceholder")}
          required
          value={formData.name}
          onChange={handleChange}
          className={inputClasses}
        />
        <input
          type="email"
          name="email"
          placeholder={t("contact.form.emailPlaceholder")}
          required
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <input
        type="text"
        name="subject"
        placeholder={t("contact.form.subjectPlaceholder")}
        required
        value={formData.subject}
        onChange={handleChange}
        className={inputClasses}
      />

      <textarea
        name="message"
        placeholder={t("contact.form.messagePlaceholder")}
        rows={5}
        required
        value={formData.message}
        onChange={handleChange}
        className={`${inputClasses} resize-none`}
      />

      {error && <p className="text-sm text-red-500">{error}</p>}

      <motion.button
        type="submit"
        disabled={isLoading || isSubmitted}
        className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[rgb(var(--interactive-default))] text-[rgb(var(--text-inverse))] font-semibold uppercase tracking-[0.15em] transition-colors disabled:opacity-50"
        whileHover={!isLoading && !isSubmitted ? { scale: 1.03 } : {}}
        whileTap={!isLoading && !isSubmitted ? { scale: 0.97 } : {}}
      >
        <motion.div
          animate={isLoading ? { rotate: 360 } : { rotate: 0 }}
          transition={
            isLoading ? { duration: 1, repeat: Infinity, ease: "linear" } : {}
          }
        >
          <Send size={16} strokeWidth={2} />
        </motion.div>
        <span>
          {isSubmitted
            ? t("contact.form.sent")
            : isLoading
              ? t("contact.form.sending")
              : t("contact.form.send")}
        </span>
      </motion.button>

      {isSubmitted && (
        <p className="text-center text-sm text-green-600">
          {t("contact.form.successMessage")}
        </p>
      )}
    </motion.form>
  );
};
