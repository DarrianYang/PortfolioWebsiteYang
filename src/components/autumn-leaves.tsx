"use client";

import { useState, type CSSProperties } from "react";

function Leaf() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M26 5C12 3 4 10 7 20c9 7 21-1 19-15Z" fill="currentColor" />
      <path d="M5 28 23 9M12 21l-1-7m6 2 6 1" stroke="var(--background)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function AutumnLeaves() {
  const [scatter, setScatter] = useState(0);

  return (
    <div className="autumn-detail">
      <button
        type="button"
        className="leaf-button inline-flex min-h-11 items-center gap-2 text-sm text-accent"
        aria-label="Scatter a few autumn leaves"
        onClick={() => setScatter((value) => value + 1)}
      >
        <Leaf />
        A little autumn
      </button>
      {scatter > 0 && (
        <div key={scatter} className="leaf-scatter" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((leaf) => (
            <span key={leaf} style={{ "--leaf": leaf } as CSSProperties}>
              <Leaf />
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
