import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const sections = [
    {
      title: "Product",
      links: ["Features", "Pricing"],
    },
    {
      title: "Support",
      links: ["Documentation", "Guides"],
    },
    {
      title: "Company",
      links: ["About", "Blog"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service"],
    },
  ];

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-950 dark:bg-white">
                <span className="text-xs font-semibold text-white dark:text-zinc-950">
                  SS
                </span>
              </div>
              <span className="font-semibold text-zinc-950 dark:text-white">
                SS Website
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              A focused workspace for keeping projects, reports, and team
              activity easy to scan.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold uppercase text-zinc-950 dark:text-white">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} SS Website. All rights reserved.</p>
          <p>Built for clear, minimal project work.</p>
        </div>
      </div>
    </footer>
  );
}
