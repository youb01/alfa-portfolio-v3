import { useTranslation } from "react-i18next";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const isNl = i18n.language === "nl";

  const toggle = () => {
    i18n.changeLanguage(isNl ? "en" : "nl");
  };

  return (
    <button
      onClick={toggle}
      aria-label={isNl ? "Switch to English" : "Schakel naar Nederlands"}
      className="relative flex items-center gap-[3px] px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.14em] border transition-colors duration-200"
      style={{
        color: "rgb(var(--text-secondary))",
        borderColor: "rgb(var(--border-primary))",
        background: "transparent",
      }}
    >
      <span
        style={{
          color: !isNl ? "rgb(var(--text-primary))" : "rgb(var(--text-tertiary))",
          transition: "color 0.2s",
        }}
      >
        EN
      </span>
      <span style={{ color: "rgb(var(--border-secondary))" }}>/</span>
      <span
        style={{
          color: isNl ? "rgb(var(--text-primary))" : "rgb(var(--text-tertiary))",
          transition: "color 0.2s",
        }}
      >
        NL
      </span>
    </button>
  );
};
