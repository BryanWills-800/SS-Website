import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="/" className="group flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-950 shadow-sm transition-colors group-hover:bg-zinc-800 dark:border-zinc-700 dark:bg-white dark:group-hover:bg-zinc-100">
            <span className="text-sm font-semibold text-white dark:text-zinc-950">
              SS
            </span>
          </div>
          <div className="min-w-0">
            <span className="block truncate text-base font-semibold text-zinc-950 dark:text-white " style={{ fontSize: "30px" }}>
              Silicon Society
            </span>
          </div>
        </a>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* Add some logo later here  */}
        </div>
      </div>
    </header>
  );
}
