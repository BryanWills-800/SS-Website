import React from "react";
import Image from "next/image";

interface SocialPlatform {
  name: string;
  handle: string;
  description: string;
  url: string;
  actionText: string;
}

const socialPlatforms: SocialPlatform[] = [
  {
    name: "LinkedIn",
    handle: "Silicon Society - BITS Pilani",
    description: "Follow our official page for organizational updates, industry partnerships, project showcases, and alumni networks.",
    url: "https://www.linkedin.com/company/silicon-society-bits-pilani/",
    actionText: "Connect on LinkedIn",
  },
  {
    name: "GitHub",
    handle: "@siliconsociety",
    description: "Explore our open-source repositories, hardware RTL modules, embedded libraries, and research simulations.",
    url: "https://github.com",
    actionText: "View GitHub Repos",
  },
  {
    name: "YouTube",
    handle: "Silicon Society BITS",
    description: "Watch recorded workshops, technical seminar series, guest lectures from semiconductor experts, and project demos.",
    url: "https://youtube.com",
    actionText: "Watch Channel",
  },
  {
    name: "Instagram",
    handle: "@siliconsociety_bitsp",
    description: "Get a glimpse into society life, workshop teasers, campus events, and behind-the-scenes engineering highlights.",
    url: "https://instagram.com",
    actionText: "Follow on Instagram",
  },
];

export default function SocialsPage() {
  return (
    <div className="about-page">
      {/* Socials Hero */}
      <section className="about-hero" aria-labelledby="socials-hero-title">
        <div className="about-hero__content">
          <div className="about-hero__text">
            <p className="about-page__label">Community & Media</p>
            <h1 id="socials-hero-title" className="about-hero__title">
              Connect With Us
            </h1>
            <p className="about-hero__copy">
              Stay updated with Silicon Society across our social channels, open-source repositories, and video lectures.
            </p>
          </div>
          <div className="about-hero__media">
            <Image
              className="about-hero__image"
              src="/processor-chip-circuit-board-with-copy-space-design_628331-1296.avif"
              alt="Community banner"
              width={640}
              height={420}
            />
          </div>
        </div>
      </section>

      {/* Social Channels List */}
      <section id="channels" className="about-section about-section--mission" aria-labelledby="channels-title">
        <div className="about-section__header">
          <p className="about-page__label">Social Hub</p>
          <h2 id="channels-title" className="about-section__title">
            Official Channels
          </h2>
        </div>

        <div className="about-section__body">
          <div className="leadership-grid">
            {socialPlatforms.map((platform) => (
              <article key={platform.name} className="leader-card" style={{ flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <h3 className="leader-card__name" style={{ fontSize: "1.25rem" }}>{platform.name}</h3>
                  <span className="home-newsbulletin__item__date">{platform.handle}</span>
                </div>
                <p className="leader-card__domain" style={{ marginTop: "0.5rem" }}>{platform.description}</p>
                <a
                  className="leader-card__link"
                  href={platform.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginTop: "1rem" }}
                >
                  {platform.actionText} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
