import Image from "next/image";
import Link from "next/link";
import React from "react";

const logoSrc = "/logo.jpeg";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand">
          <div className="site-header__mark">
            <Image
              className="site-header__logo"
              src={logoSrc}
              alt="Silicon Society logo"
              width={100}
              height={100}
              priority
            />
          </div>
          <div className="site-header__brand-copy">
            <span className="site-header__title">Silicon Society - BITS Pilani</span>
            <span className="site-header__subtitle">Empowering the Next Generation of Integrated Chip Design & VLSI Innovators</span>
          </div>
        </Link>

        <div className="site-header__actions">
          {/* Add some logo later here */}
        </div>
      </div>
    </header>
  );
}

