"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKEDIN_LINK = "https://www.linkedin.com/company/silicon-society-bits-pilani/";

type NavLink = {
  label: string;
  href: string;
};

type NavItem = NavLink & {
  children?: NavLink[];
};

const links: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about-us" },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "Current Projects", href: "/projects#current" },
      { label: "Past Work", href: "/projects#past" },
    ],
  },
  {
    label: "Verticals",
    href: "/verticals",
    children: [
      { label: "Digital Division", href: "/verticals#digital" },
      { label: "Analog Division", href: "/verticals#analog" },
      { label: "Research", href: "/verticals#research" },
    ],
  },
  { label: "Join Us", href: "/join-us" },
  {
    label: "Socials",
    href: "/socials",
    children: [{ label: "LinkedIn", href: LINKEDIN_LINK }],
  },
];

/**
 * True while the element with this id covers the middle of the screen.
 * Only watches when `enabled`, i.e. on the page that contains it.
 */
function useSectionInView(id: string, enabled: boolean) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const section = document.getElementById(id);
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      // shrink the viewport to a line across its middle
      { rootMargin: "-50% 0px -50% 0px" },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [id, enabled]);

  return enabled && inView;
}

/** Which top-level href should be highlighted for the current page. */
function getActiveHref(pathname: string, aboutInView: boolean): string | null {
  // Home and About Us share "/", so on the home page it depends on scroll
  if (pathname === "/") return aboutInView ? "/#about-us" : "/";

  // Other pages: match the link, including any sub-pages like /projects/foo
  const match = links.find(
    (link) =>
      link.href !== "/" &&
      !link.href.includes("#") &&
      (pathname === link.href || pathname.startsWith(`${link.href}/`)),
  );
  return match?.href ?? null;
}

function NavDropdownLink({ link }: { link: NavLink }) {
  return (
    <Link href={link.href} className="site-nav__dropdown-link">
      {link.label}
    </Link>
  );
}

function NavigationItem({ item, active }: { item: NavItem; active: boolean }) {
  const baseClassName = "site-nav__link";
  const linkClassName = active ? `${baseClassName} ${baseClassName}--active` : baseClassName;

  if (!item.children || item.children.length === 0) {
    return (
      <Link
        href={item.href}
        aria-current={active ? "page" : undefined}
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
        aria-current={active ? "page" : undefined}
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
  const pathname = usePathname();
  const aboutInView = useSectionInView("about-us", pathname === "/");
  const activeHref = getActiveHref(pathname, aboutInView);

  return (
    <nav className="site-nav" aria-label="Primary">
      <div className="site-nav__inner container-page">
        <div className="site-nav__links">
          {links.map((link) => (
            <NavigationItem key={link.label} item={link} active={link.href === activeHref} />
          ))}
        </div>
      </div>
    </nav>
  );
}
