import React from "react";
import type { ContactMethod } from "../../sections/data/ContactData";

interface ContactCardProps {
  method: ContactMethod;
}

export const ContactCard: React.FC<ContactCardProps> = ({ method }) => {
  const Icon = method.icon;
  const isClickable = method.type !== "location";

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
      <span className="flex-shrink-0 text-[rgb(var(--text-secondary))] group-hover:text-[rgb(var(--text-primary))] transition-colors">
        <Icon size={24} strokeWidth={2} />
      </span>
      <div>
        <p className="text-sm font-semibold text-[rgb(var(--text-secondary))]">
          {method.label}
        </p>
        <p className="text-base font-medium text-[rgb(var(--text-primary))] break-all">
          {method.value}
        </p>
      </div>
    </a>
  );
};
