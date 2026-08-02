import React, { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={`nt-hero ${loaded ? "nt-loaded" : ""}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Parisienne&family=Jost:wght@300;400;500&display=swap');

        .nt-hero {
          --cream: #fbf4e8;
          --cream-deep: #f2e4cf;
          --rose: #7c2036;
          --gold: #c9a24b;
          --gold-light: #e9d8a6;
          --ink-soft: #5c4a44;

          position: relative;
          width: 100%;
          background: linear-gradient(180deg, var(--cream) 0%, var(--cream-deep) 100%);
          font-family: 'Jost', sans-serif;
          text-align: center;
          padding: 100px 6% 110px;
          overflow: hidden;
        }

        .nt-loaded .nt-rule {
          opacity: 1;
          transform: scaleX(1);
        }

        .nt-headline {
          position: relative;
          display: inline-block;
          font-family: 'Parisienne', cursive;
          font-weight: 400;
          color: var(--rose);
          font-size: clamp(2.3rem, 6vw, 4.2rem);
          line-height: 1.35;
          margin: 0 auto;
          max-width: 500px;
          letter-spacing: 0.3px;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 1s ease 0.2s, transform 1s ease 0.2s;
        }
        .nt-loaded .nt-headline {
          opacity: 1;
          transform: translateY(0);
        }

        .nt-headline .nt-accent {
          color: var(--gold);
        }

        /* shimmer sweep across the text */
        .nt-headline::after {
          content: '';
          position: absolute;
          top: 0; left: -120%;
          width: 60%; height: 100%;
          background: linear-gradient(115deg, transparent, rgba(255,255,255,0.55), transparent);
          mix-blend-mode: overlay;
          transform: skewX(-20deg);
        }
        .nt-loaded .nt-headline::after {
          animation: nt-shimmer 2.6s ease 1.1s 1;
        }
        @keyframes nt-shimmer {
          0% { left: -120%; }
          100% { left: 140%; }
        }

        .nt-tag {
          margin-top: 22px;
          font-family: 'Jost', sans-serif;
          font-weight: 400;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--ink-soft);
          opacity: 0;
          transition: opacity 1s ease 0.9s;
        }
        .nt-loaded .nt-tag {
          opacity: 0.75;
        }

        @media (prefers-reduced-motion: reduce) {
          .nt-hero * { transition: none !important; animation: none !important; }
        }
      `}</style>

      {/* <div className="nt-rule" /> */}

      <h1 className="nt-headline">
        Elegance that stays<br/> long after the{" "}
        <span className="nt-accent">trend</span> fades.
      </h1>

      {/* <p className="nt-tag">Anti-Tarnish Fine Jewellery</p> */}
    </section>
  );
}
