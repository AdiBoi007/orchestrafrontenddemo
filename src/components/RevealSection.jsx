import { useEffect, useRef } from "react";

export function RevealSection({ className = "", children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      el.classList.add("is-visible");
    };

    if (!("IntersectionObserver" in window)) {
      reveal();
      return;
    }

    let io;
    const failSafe = window.setTimeout(() => {
      if (!el.classList.contains("is-visible")) {
        reveal();
      }
      io?.disconnect();
    }, 3200);

    io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal();
            io.unobserve(entry.target);
            window.clearTimeout(failSafe);
            break;
          }
        }
      },
      {
        root: null,
        /* Easier to trigger than a negative bottom inset; threshold 0 = any overlap counts */
        rootMargin: "0px 0px 10% 0px",
        threshold: 0,
      }
    );

    io.observe(el);

    return () => {
      window.clearTimeout(failSafe);
      io.disconnect();
    };
  }, []);

  return (
    <section ref={ref} className={className} data-reveal="" {...rest}>
      {children}
    </section>
  );
}
