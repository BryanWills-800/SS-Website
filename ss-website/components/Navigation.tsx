import Link from "next/link";
import React from "react";

const LINKEDIN_LINK = "https://www.linkedin.com/company/silicon-society-bits-pilani/"

type DropdownLink = {
  label: string;
  href: string;
  active: boolean;
};

type NavItem = DropdownLink & {
  children?: DropdownLink[];
};

const links: NavItem[] = [
  { label: "Home", href: "/", active: true },
  { label: "About Us", href: "/#about-us", active: false },
  {
    label: "Projects",
    href: "/projects",
    active: false,
    children: [
      { label: "Current Projects", href: "/projects#current", active: false },
      { label: "Past Work", href: "/projects#past", active: false },
    ],
  },
  {
    label: "Verticals",
    href: "/verticals",
    active: false,
    children: [
      { label: "Digital Division", href: "/verticals#digital", active: false },
      { label: "Analog Division", href: "/verticals#analog", active: false },
      { label: "Research", href: "/verticals#research", active: false },
    ],
  },
  { label: "Join Us", href: "/join-us", active: false },
  {
    label: "Socials",
    href: "/socials",
    active: false,
    children: [
      { label: "LinkedIn", href: LINKEDIN_LINK, active: false },
    ],
  }
];


function NavDropdownLink({ link }: { link: DropdownLink }) {
  return (
    <Link
      href={link.href}
      aria-current={link.active ? "page" : undefined}
      className="site-nav__dropdown-link"
    >
      {link.label}
    </Link>
  );
}


function NavigationItem({ item }: { item: NavItem }) {
  const baseClassName = "site-nav__link";
  const linkClassName = item.active ? `${baseClassName} ${baseClassName}--active` : baseClassName;

  if (!item.children || item.children.length === 0) {
    return (
      <Link
        href={item.href}
        aria-current={item.active ? "page" : undefined}
        className={linkClassName}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="site-nav__dropdown">
      <Link
        href={item.href}
        aria-current={item.active ? "page" : undefined}
        className={`${linkClassName} site-nav__dropdown-trigger`}
        aria-haspopup="true"
      >
        <span>{item.label}</span>
        <span className="site-nav__dropdown-caret" aria-hidden="true"> ▼ </span>
      </Link>

      <div className="site-nav__dropdown-menu">
        {item.children.map((child) => (
          <NavDropdownLink key={child.label} link={child} />
        ))}
      </div>
    </div>
  );
}

export default function Navigation() {
  return (
    <nav className="site-nav" aria-label="Primary">
      <div className="site-nav__inner">
        <div className="site-nav__links">
          {links.map((link) => (
            <NavigationItem key={link.label} item={link} />
          ))}
        </div>
      </div>
    </nav>
  );
}