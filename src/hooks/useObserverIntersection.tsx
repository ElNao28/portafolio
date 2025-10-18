import { useEffect, useRef } from "react";


export const useObserverIntersection = () => {
    const refElement = useRef<HTMLElement>(null);
    
    useEffect(() => {
        const element = document.getElementById("card-presentation");
        const options: IntersectionObserverInit = {
          root: null,
          rootMargin: "0px",
          threshold: 0,
        };
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if(!entry.isIntersecting)
              refElement.current?.classList.add('backBlur')
            else
              refElement.current?.classList.remove('backBlur')
          });
        }, options);
    
        observer.observe(element!);
        return () => observer.disconnect();
      }, []);

  return {
    refElement
  }
}
