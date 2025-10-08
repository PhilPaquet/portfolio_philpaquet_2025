import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import { ScrollSmoother } from 'gsap/ScrollSmoother.js';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js';

export default class Scroller {
  constructor(element) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    this.options = {
      hasPinItems: false,
      hasScrollerTitle: false,
    };

    this.element = element;
    this.setOptions();
    this.init();
  }

  init() {
    this.smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
      ease: 'expo.out',
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          this.smoother.scrollTo(target, true, 'top top');
        }
      });
    });
  }

  //PIN CONTROLS

  initPins() {
    const pinnedItems = this.element.querySelectorAll('.js-pinned');
    for (let i = 0; i < pinnedItems.length; i++) {
      const pinnedItem = pinnedItems[i];

      const imagePanels = pinnedItem.querySelectorAll('.js-image-panel');
      const nbImagePanels = imagePanels.length - 1;
      const buffer = 200;

      //console.log(pinnedItem);
      ScrollTrigger.create({
        pin: pinnedItem,
        trigger: pinnedItem,
        start: 'center center',
        end: () =>
          '+=' + (pinnedItem.offsetHeight * nbImagePanels * 0.5 + buffer),
        scrub: true,
        //markers: true,
      });

      gsap.to(imagePanels, {
        yPercent: -100 * nbImagePanels,
        ease: 'none',
        scrollTrigger: {
          trigger: pinnedItem,
          start: 'center center',
          end: () =>
            '+=' + (pinnedItem.offsetHeight * nbImagePanels * 0.5 + buffer),
          scrub: true,
        },
      });
    }
  }

  initTitles() {
    const titles = document.querySelectorAll('.scrolling_title');
    for (let i = 0; i < titles.length; i++) {
      const title = titles[i];

      const container = title.closest('.wrapper');

      console.log(container);

      gsap.to(title, {
        x: () => container.offsetWidth - title.offsetWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: title,
          /*start: 'bottom bottom',
          end: 'top top',*/
          scrub: true,
        },
      });
    }
  }

  setOptions() {
    if ('pinItems' in this.element.dataset) {
      this.options.hasPinItems = true;
      this.initPins();
    }
    if ('scrollerTitle' in this.element.dataset) {
      this.options.hasScrollerTitle = true;
      this.initTitles();
    }
  }
}
