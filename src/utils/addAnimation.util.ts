
export function addAnimation() {
  const scrollers = document.querySelectorAll('.scroller');
  
  scrollers.forEach((scroller) => {
    scroller.setAttribute('data-animated', 'true');

    const scrollerInner = scroller.querySelector('.scroller-inner');
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const dupItem = item.cloneNode(true);
      dupItem.setAttribute('aria-hidden', true);
      scrollerInner?.appendChild(dupItem);
    })
  })
}