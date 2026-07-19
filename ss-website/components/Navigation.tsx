import Link from "next/link";
import React from "react";

export default function Navigation() {
  const links = [
    { label: "Home", href: "/", active: true, align: "left" },
    { label: "Projects", href: "/projects", active: false, align: "left" },
    { label: "Verticals", href: "/verticals", active: false, align: "left" },
    { label: "About Us", href: "/about-us", active: false, align: "right" },
    { label: "Join Us", href: "/join-us", active: false, align: "right" },
  ];

  return (
    <nav className="site-nav" aria-label="Primary">
      <div className="site-nav__inner">
        <div className="site-nav__links">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={link.active ? "page" : undefined}
              className={
                link.active
                  ? "site-nav__link site-nav__link--active"
                  : "site-nav__link"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
