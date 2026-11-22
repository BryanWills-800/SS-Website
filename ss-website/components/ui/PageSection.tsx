import type { ReactNode } from "react";

type PageSectionProps = {
  /** anchor for links like /projects#current */
  id?: string;
  /** id for the heading; the section is labelled by it */
  titleId?: string;
  label: string;
  title: string;
  subtitle?: string;
  /** extra classes on the <section>, e.g. "divider-top" or "mx-auto" */
  className?: string;
  /** spacing between body children; defaults to space-y-5 */
  bodyClassName?: string;
  children: ReactNode;
};

/** Two-column section: label + heading on the left, content on the right. */
export default function PageSection({
  id,
  titleId,
  label,
  title,
  subtitle,
  className = "",
  bodyClassName = "space-y-5",
  children,
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={`section container-page ${className}`}
      aria-labelledby={titleId}
    >
      <div className="section__header">
        <p className="eyebrow">{label}</p>
        <h2 id={titleId} className="heading-section mt-3">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 font-semibold text-zinc-600 dark:text-zinc-400 text-sm">
            {subtitle}
          </p>
        )}
      </div>

      <div className={`copy-body ${bodyClassName}`}>{children}</div>
    </section>
  );
}
