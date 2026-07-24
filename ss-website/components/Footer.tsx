import Image from "next/image";
import React from "react";

const logoSrc = "/logo.jpeg";

export default function Footer() {
  const sections = [
    {
      title: "About the Society",
      links: [
        { label: "About Us", href: "#about-us" },
        { label: "Verticals", href: "#verticals" },
        { label: "Join Us", href: "#join-us" },
      ],
    },
    {
      title: "Contributions",
      links: [
        { label: "Projects", href: "#projects" },
        // { label: "Events", href: "#events" },
      ],
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__content">
          <div className="site-footer__summary">
            <div className="site-footer__brand">
              <div className="site-footer__mark">
                <Image
                  className="site-footer__logo"
                  src={logoSrc}
                  alt="Silicon Society logo"
                  width={100}
                  height={100}
                />
              </div>
              <span className="site-footer__brand-name">Silicon Society</span>
            </div>
            <p className="site-footer__description">
              Empowering the Next Generation of Integrated Chip Design & VLSI Innovators
            </p>
          </div>

          <div className="site-footer__sections">
            {sections.map((section) => (
              <div key={section.title} className="site-footer__section">
                <h3 className="site-footer__heading">{section.title}</h3>
                <ul className="site-footer__list">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="site-footer__link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="site-footer__bottom">
          <p>&copy; {currentYear} SS Website. All rights reserved.</p>
          <p>Different tagline</p>
        </div>
      </div>
    </footer>
  );
}


