import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand">
          <div className="site-header__mark">
            <span className="site-header__mark-text">SS</span>
          </div>
          <div className="site-header__brand-copy">
            <span className="site-header__title">Silicon Society</span>
            <span className="site-header__subtitle">Architects of Digital Age</span>
          </div>
        </Link>

        <div className="site-header__actions">
          {/* Add some logo later here */}
        </div>
      </div>
    </header>
  );
}
