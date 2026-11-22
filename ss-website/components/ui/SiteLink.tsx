"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

/**
 * next/link, plus a fix for same-page #section links.
 *
 * Next.js 16 mangles a hash link clicked on the page it points to after a
 * cross-page navigation: /projects#current clicked again becomes
 * /projects#current#current. So when the link points to a section on the
 * page we're already on, we scroll there ourselves and update the URL with
 * history.pushState (which Next.js syncs with its router). Every other
 * click is left to next/link as normal.
 */
export default function SiteLink({ onClick, ...props }: ComponentProps<typeof Link>) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented) return;
    // let modified clicks (new tab, etc.) behave normally
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const target = new URL(event.currentTarget.href);
    const here = window.location;
    if (!target.hash || target.origin !== here.origin || target.pathname !== here.pathname) return;

    const section = document.getElementById(decodeURIComponent(target.hash.slice(1)));
    if (!section) return;

    event.preventDefault();
    section.scrollIntoView();
    if (here.hash !== target.hash) {
      window.history.pushState(null, "", target.pathname + target.search + target.hash);
    }
  }

  return <Link {...props} onClick={handleClick} />;
}
