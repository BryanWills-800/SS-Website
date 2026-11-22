import PageHero from "@/components/ui/PageHero";
import PageSection from "@/components/ui/PageSection";

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
    <div className="page">
      <PageHero
        titleId="socials-hero-title"
        label="Community & Media"
        title="Connect With Us"
        image={{ src: "/image_chip.avif", alt: "Community banner" }}
        imageLoading="eager"
      >
        Stay updated with Silicon Society across our social channels, open-source repositories, and video lectures.
      </PageHero>

      <PageSection
        id="channels"
        titleId="channels-title"
        label="Social Hub"
        title="Official Channels"
        className="divider-bottom"
      >
        <div className="card-grid">
          {socialPlatforms.map((platform) => (
            <article key={platform.name} className="card flex flex-col justify-between">
              <div className="flex flex-col gap-1">
                <h3 className="heading-card">{platform.name}</h3>
                <span className="copy-meta">{platform.handle}</span>
              </div>
              <p className="copy-small mt-2">{platform.description}</p>
              <a
                className="link-underline mt-4"
                href={platform.url}
                target="_blank"
                rel="noreferrer"
              >
                {platform.actionText} →
              </a>
            </article>
          ))}
        </div>
      </PageSection>
    </div>
  );
}
