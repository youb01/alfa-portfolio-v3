import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  background: "transparent",
  border: "1px solid rgb(var(--border-primary))",
  color: "rgb(var(--text-primary))",
  fontSize: "0.875rem",
  fontFamily: "inherit",
  outline: "none",
  transition: "border-color 0.15s",
};

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Field: React.FC<FieldProps> = ({ label, ...props }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[10px] font-bold uppercase tracking-[0.22em] text-[rgb(var(--text-tertiary))]">
      {label}
    </label>
    <input
      {...props}
      style={fieldStyle}
      onFocus={(e) => { e.currentTarget.style.borderColor = "rgb(var(--text-primary))"; props.onFocus?.(e); }}
      onBlur={(e)  => { e.currentTarget.style.borderColor = "rgb(var(--border-primary))"; props.onBlur?.(e); }}
    />
  </div>
);

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading]     = useState(false);
  const [error, setError]             = useState<string | null>(null);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  useEffect(() => () => { if (resetTimerRef.current) clearTimeout(resetTimerRef.current); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name:  formData.name,
        from_email: formData.email,
        subject:    formData.subject,
        message:    formData.message,
        to_email:   "lfatmi.ayoub@gmail.com",
      });
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      resetTimerRef.current = setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
      viewport={{ once: true, margin: "-60px" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Name"  type="text"  name="name"  placeholder="Your name"  required value={formData.name}  onChange={handleChange} />
        <Field label="Email" type="email" name="email" placeholder="your@email.com" required value={formData.email} onChange={handleChange} />
      </div>

      <Field label="Subject" type="text" name="subject" placeholder="What's this about?" required value={formData.subject} onChange={handleChange} />

      <div className="flex flex-col gap-1.5">
        <label className="text-[10px] font-bold uppercase tracking-[0.22em] text-[rgb(var(--text-tertiary))]">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Tell me more..."
          rows={6}
          required
          value={formData.message}
          onChange={handleChange}
          style={{ ...fieldStyle, resize: "none" }}
          onFocus={(e) => { e.currentTarget.style.borderColor = "rgb(var(--text-primary))"; }}
          onBlur={(e)  => { e.currentTarget.style.borderColor = "rgb(var(--border-primary))"; }}
        />
      </div>

      {error && (
        <p className="text-sm text-[rgb(var(--text-secondary))] border border-[rgb(var(--border-primary))] px-4 py-3">
          {error}
        </p>
      )}

      <div className="flex items-center justify-between pt-1">
        {isSubmitted ? (
          <p className="text-sm font-medium text-[rgb(var(--text-secondary))]">
            Message sent — I'll get back to you soon.
          </p>
        ) : (
          <span />
        )}

        <button
          type="submit"
          disabled={isLoading || isSubmitted}
          className="flex items-center gap-2 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.22em] transition-colors duration-200 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
          style={{
            background: "rgb(var(--text-primary))",
            color:      "rgb(var(--bg-primary))",
            border:     "1px solid rgb(var(--text-primary))",
          }}
        >
          {isLoading ? "Sending..." : isSubmitted ? "Sent" : "Send Message"}
          {!isLoading && !isSubmitted && <ArrowUpRight size={12} strokeWidth={2.5} />}
        </button>
      </div>
    </motion.form>
  );
};
