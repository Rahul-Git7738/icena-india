'use client';
import { useEffect } from 'react'; 

export default function LinkFixer() {
  useEffect(() => {
    const fixLinks = () => {
      // Finds all <a> tags that start with "/" but don't have "/edition5"
      document.querySelectorAll('a[href^="/"]:not([href^="/edition5"])').forEach(link => {
        const currentHref = link.getAttribute('href');
        // Avoid fixing empty links or root links that are already correct
        if (currentHref !== "/" && currentHref !== "/edition5") {
          link.setAttribute('href', `/edition5${currentHref}`);
        }
      });
    };

    // Run once on load
    fixLinks();

    // Also run when the user clicks/navigates (for Single Page App feel)
    const observer = new MutationObserver(fixLinks);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null; // This component doesn't render anything
}
