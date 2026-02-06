import { useEffect, useMemo, useState } from "react";

export function useScrollSpy(sectionIds, { offsetPx = 150 } = {}) {
  const ids = useMemo(() => sectionIds.filter(Boolean), [sectionIds]);
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    if (!ids.length) return;

    const onScroll = () => {
      const y = window.scrollY;

      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;

        const sectionTop = el.offsetTop - offsetPx;
        if (y >= sectionTop) current = id;
      }

      setActiveId(current);
    };

    onScroll(); // set initial
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, offsetPx]);

  return activeId;
}
