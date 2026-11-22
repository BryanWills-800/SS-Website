import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  /** id for the heading; the hero is labelled by it for screen readers */
  titleId: string;
  title: string;
  /** small uppercase line above the title */
  label?: string;
  image: { src: string; alt: string };
  imageLoading?: "eager" | "lazy";
  /** h1 on its own page, h2 when the hero sits inside another page */
  headingLevel?: "h1" | "h2";
  /** render as a plain div when already inside a labelled <section> */
  as?: "section" | "div";
  /** extra vertical padding */
  tall?: boolean;
  /** the intro paragraph */
  children: ReactNode;
};

export default function PageHero({
  titleId,
  title,
  label,
  image,
  imageLoading,
  headingLevel: Heading = "h1",
  as: Wrapper = "section",
  tall = false,
  children,
}: PageHeroProps) {
  return (
    <Wrapper
      className={`hero divider-bottom ${tall ? "hero--tall" : ""}`}
      aria-labelledby={Wrapper === "section" ? titleId : undefined}
    >
      <div className="hero__content container-page">
        <div className="hero__text">
          {label && <p className="eyebrow">{label}</p>}
          <Heading id={titleId} className="heading-hero mt-4 max-w-4xl">
            {title}
          </Heading>
          <p className="copy-lead mt-6">{children}</p>
        </div>

        <div className="media-frame">
          <Image
            className="hero__image"
            src={image.src}
            alt={image.alt}
            loading={imageLoading}
            width={640}
            height={420}
          />
        </div>
      </div>
    </Wrapper>
  );
}
