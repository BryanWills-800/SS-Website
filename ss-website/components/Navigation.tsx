import Link from "next/link";
import React from "react";

type DropdownLink = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  active: boolean;
  children?: DropdownLink[];
};

const links: NavItem[] = [
  { label: "Home", href: "/", active: true },
  {
    label: "Projects",
    href: "/projects",
    active: false,
    children: [
      { label: "Current Projects", href: "/projects#current" },
      { label: "Past Work", href: "/projects#past" },
      { label: "Start a Project", href: "/projects#start" },
    ],
  },
  {
    label: "Verticals",
    href: "/verticals",
    active: false,
    children: [
      { label: "Digital Division", href: "/verticals#software" },
      { label: "Analog Division", href: "/verticals#hardware" },
      { label: "Research", href: "/verticals#research" },
    ],
  },
  { label: "About Us", href: "/about-us", active: false },
  { label: "Join Us", href: "/join-us", active: false },
];

function renderChildLink(child: DropdownLink) {
  return (
    <Link
      key={child.label}
      href={child.href}
      className="site-nav__dropdown-link"
    >
      {child.label}
    </Link>
  );
}

function renderNavItem(link: NavItem) {
  const linkClassName = link.active
    ? "site-nav__link site-nav__link--active"
    : "site-nav__link";

  if (!link.children) {
    return (
      <Link
        key={link.label}
        href={link.href}
        aria-current={link.active ? "page" : undefined}
        className={linkClassName}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div key={link.label} className="site-nav__dropdown">
      <Link
        href={link.href}
        aria-current={link.active ? "page" : undefined}
        className={`${linkClassName} site-nav__dropdown-trigger`}
      >
        <span>{link.label}</span>
        <span
          className="site-nav__dropdown-caret"
          aria-hidden="true"
        >
          v
        </span>
      </Link>

      <div className="site-nav__dropdown-menu">
        {link.children.map(renderChildLink)}
      </div>
    </div>
  );
}

export default function Navigation() {
  return (
    <nav className="site-nav" aria-label="Primary">
      <div className="site-nav__inner">
        <div className="site-nav__links">
          {links.map(renderNavItem)}
        </div>
      </div>
    </nav>
  );
}