import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import { ScrollSmoother } from 'gsap/ScrollSmoother.js';

export default class Scroller {
  constructor(element) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    this.options = {
      hasPinItems: false,
    };

    this.element = element;
    this.setOptions();
    this.init();
  }

  init() {
    const scroller = ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
      ease: 'expo.out',
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

  setOptions() {
    if ('pinItems' in this.element.dataset) {
      this.options.hasPinItems = true;
      this.initPins();
    }
  }
}
