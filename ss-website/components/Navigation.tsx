import React from "react";

export default function Navigation() {
  const links = [
    { label: "Home", href: "/", active: true },
    { label: "About Us", href: "/about-us", active: false },
    { label: "Verticals", href: "/verticals", active: false },
    { label: "Projects", href: "/projects", active: false },
    { label: "Join Us", href: "/join-us", active: false },
  ];

  return (
    <nav className="border-b border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 h-12 overflow-x-auto scrollbar-none">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`inline-flex items-center px-1 border-b-2 text-sm font-medium transition-colors whitespace-nowrap ${link.active
                ? "border-indigo-600 dark:border-indigo-400 text-zinc-900 dark:text-white"
                : "border-transparent text-zinc-500 hover:text-zinc-700 hover:border-zinc-300 dark:text-zinc-400 dark:hover:text-zinc-200"
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
