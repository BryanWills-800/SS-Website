import Image from "next/image";
import React from "react";

const logoSrc = "/logo.jpeg";

const LINKEDIN_LINK = "https://www.linkedin.com/company/silicon-society-bits-pilani/"

export default function Footer() {
  const sections = [
    {
      title: "About the Society",
      links: [
        { label: "About Us", href: "#about-us" },
        { label: "Join Us", href: "#join-us" },
      ],
    },
    {
      title: "Contributions",
      links: [
        { label: "Verticals", href: "#verticals" },
        { label: "Projects", href: "#projects" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { label: "LinkedIn", href: LINKEDIN_LINK, active: false },
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
                  width={120}
                  height={120}
                />
              </div>
              <div className="site-footer__brand-text">
                <span className="site-footer__brand-name">Silicon Society - BITS Pilani</span>
                <span className="site-footer__description">
                  Empowering the Next Generation of Integrated Chip Design & VLSI Innovators
                </span>
              </div>
            </div>
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


