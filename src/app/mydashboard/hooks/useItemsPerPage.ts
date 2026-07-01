import { useEffect, useState } from "react";

export function useItemsPerPage() {
  const [items, setItems] = useState(4);
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const sync = () => setItems(mql.matches ? 4 : 2);
    sync();

    mql.addEventListener("change", sync);
    return () => mql.removeEventListener("change", sync);
  }, []);

  return items;
}
