import React from "react";
import { useTranslation } from "react-i18next";
import type { ContactMethod } from "../../sections/data/ContactData";

interface ContactCardProps {
  method: ContactMethod;
}

export const ContactCard: React.FC<ContactCardProps> = ({ method }) => {
  const { t } = useTranslation();
  const Icon = method.icon;
  const isClickable = method.type !== "location";

  const label = t(`contact.methodLabels.${method.id}`, { defaultValue: method.id });
  const displayValue =
    method.type === "location"
      ? t("contact.methodLabels.locationValue")
      : method.value;

  return (
    <a
      href={method.href}
      target={method.type === "social" ? "_blank" : undefined}
      rel={method.type === "social" ? "noopener noreferrer" : undefined}
      className={`flex items-start gap-4 group ${
        isClickable ? "cursor-pointer" : "cursor-default"
      }`}
      onClick={(e) => !isClickable && e.preventDefault()}
    >
      <Icon
        size={24}
        strokeWidth={2}
        className="flex-shrink-0 text-[rgb(var(--text-secondary))] group-hover:text-[rgb(var(--text-primary))] transition-colors"
      />
      <div>
        <p className="text-sm font-semibold text-[rgb(var(--text-secondary))]">
          {label}
        </p>
        <p className="text-base font-medium text-[rgb(var(--text-primary))] break-all">
          {displayValue}
        </p>
      </div>
    </a>
  );
};
