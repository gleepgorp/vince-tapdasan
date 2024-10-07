
export function addAnimation() {
  const scrollers = document.querySelectorAll('.scroller');
  
  scrollers.forEach((scroller) => {
    // assert scroller is an HTMLElement
    if (scroller instanceof HTMLElement) {
      scroller.setAttribute('data-animated', 'true');

      const scrollerInner = scroller.querySelector('.scroller-inner');
      if (scrollerInner instanceof HTMLElement) {
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          if (item instanceof Node) {
            const dupItem = item.cloneNode(true);
            if (dupItem instanceof HTMLElement) {
              dupItem.setAttribute('aria-hidden', 'true');
              scrollerInner.appendChild(dupItem);
            }
          }
        });
      }
    }
  });
}