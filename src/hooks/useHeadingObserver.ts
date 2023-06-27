import { useEffect, useState } from 'react';

export function useHeadingObserver() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      const visibleHeadings: string[] = [];
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          visibleHeadings.push(entry.target.id);
        }
      });

      const getIndexFromId = (id: string) =>
        headingElements.findIndex((heading) => heading.id === id);

      // TODO: 
      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0]);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a) - getIndexFromId(b)
        );
        setActiveId(sortedVisibleHeadings[0]);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px 0px -100px 0px',
    });

    const headingElements = Array.from(document.querySelectorAll('.toc'));
    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return { activeId };
}
