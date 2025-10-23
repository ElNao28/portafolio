import { useEffect, useState } from "react";

interface Props {
  idElement: string;
}

export type BreakPoints = "IsSm" | "IsMd" | "IsLg" | "IsXl";

export const useObserverResize = ({ idElement }: Props) => {
  
  const [isResolution, setIsResolution] = useState<BreakPoints>(() => {
    const el = document.getElementById(idElement);
    if (!el) return "IsSm";
    const width = el.getBoundingClientRect().width;
    if (width < 768) return "IsSm";
    if (width < 1024) return "IsMd";
    if (width < 1280) return "IsLg";
    return "IsXl";
  });

  useEffect(() => {
    const element = document.getElementById(idElement);
    if (!element) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      let newResolution: BreakPoints;

      if (width < 768) newResolution = "IsSm";
      else if (width < 1024) newResolution = "IsMd";
      else if (width < 1280) newResolution = "IsLg";
      else newResolution = "IsXl";

      setIsResolution((prev) =>
        prev !== newResolution ? newResolution : prev
      );
    });

    resizeObserver.observe(element!);

    return () => resizeObserver.disconnect();
  }, [idElement]);
  return {
    isResolution,
  };
};
