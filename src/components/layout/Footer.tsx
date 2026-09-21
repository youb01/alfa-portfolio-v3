import React from "react";

const NAV_LINKS = [
  { label: "Home",     href: "/"          },
  { label: "Projects", href: "/#projects" },
  { label: "Contact",  href: "/#contact"  },
] as const;

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[rgb(var(--bg-primary))]"
      style={{ borderTop: "1px solid rgb(var(--border-primary))" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 py-7 md:py-9">
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-0 sm:justify-between">

          <p className="order-3 sm:order-1 text-[11px] font-medium tracking-[0.05em] text-[rgb(var(--text-tertiary))] select-none">
            © {year} · Ayoub Lfatmi
          </p>

          <a
            href="/"
            className="order-1 sm:order-2 text-[13px] font-extrabold uppercase tracking-[0.28em] text-[rgb(var(--text-primary))] hover:opacity-50 transition-opacity duration-150"
            aria-label="Back to home"
          >
            ALFA
          </a>

          <nav className="order-2 sm:order-3 flex items-center gap-6" aria-label="Footer navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[rgb(var(--text-tertiary))] hover:text-[rgb(var(--text-primary))] transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

        </div>
      </div>
    </footer>
  );
};
