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
    description: "Follow our official LinkedIn page for organizational updates, industry partnerships, project showcases, and alumni networks.",
    url: "https://www.linkedin.com/company/silicon-society-bits-pilani/",
    actionText: "Connect on LinkedIn",
  },
  // {
  //   name: "GitHub",
  //   handle: "@siliconsociety",
  //   description: "Explore our open-source repositories, hardware RTL modules, embedded libraries, and research simulations.",
  //   url: "https://github.com",
  //   actionText: "View GitHub Repos",
  // },
  // {
  //   name: "YouTube",
  //   handle: "Silicon Society BITS",
  //   description: "Watch recorded workshops, technical seminar series, guest lectures from semiconductor experts, and project demos.",
  //   url: "https://youtube.com",
  //   actionText: "Watch Channel",
  // },
  // {
  //   name: "Instagram",
  //   handle: "@siliconsociety_bitsp",
  //   description: "Get a glimpse into society life, workshop teasers, campus events, and behind-the-scenes engineering highlights.",
  //   url: "https://instagram.com",
  //   actionText: "Follow on Instagram",
  // },
];

export default function SocialsPage() {
  return (
    <div className="socials-page">
      {/* Socials Hero */}
      <section className="socials-hero" aria-labelledby="socials-hero-title">
        <div className="socials-hero__content">
          <div className="socials-hero__text">
            <p className="socials-page__label">Community & Media</p>
            <h1 id="socials-hero-title" className="socials-hero__title">
              Connect With Us
            </h1>
            <p className="socials-hero__copy">
              Stay updated with Silicon Society across our social channels, open-source repositories, and video lectures.
            </p>
          </div>
          <div className="socials-hero__media">
            <Image
              className="socials-hero__image"
              src="/image_chip.avif"
              loading="eager"
              alt="Community banner"
              width={640}
              height={420}
            />
          </div>
        </div>
      </section>

      {/* Social Channels List */}
      <section id="channels" className="socials-section socials-section--channels" aria-labelledby="channels-title">
        <div className="socials-section__header">
          <p className="socials-page__label">Social Hub</p>
          <h2 id="channels-title" className="socials-section__title">
            Official Channels
          </h2>
        </div>

        <div className="socials-section__body">
          <div className="socials-grid">
            {socialPlatforms.map((platform) => (
              <article key={platform.name} className="social-card">
                <div className="social-card__header">
                  <h3 className="social-card__name">{platform.name}</h3>
                  <span className="social-card__handle">{platform.handle}</span>
                </div>
                <p className="social-card__description">{platform.description}</p>
                <a
                  className="social-card__link"
                  href={platform.url}
                  target="_blank"
                  rel="noreferrer"
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
