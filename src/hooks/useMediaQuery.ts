import { useEffect, useState } from "react";
import { useHeaderMenuContext } from "../context/HeaderMenuContext";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(false);
  const { setIsOpen } = useHeaderMenuContext();

  // custom hook to listen to media screen
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    media.addEventListener("change", () => {
      setMatches(media.matches);
      setIsOpen(false);
    });
    return () => media.removeEventListener("change", () => setMatches(media.matches));
  }, [matches, query, setIsOpen]);

  return matches;
}