import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import { ScrollSmoother } from 'gsap/ScrollSmoother.js';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js';

export default class Scroller {
  constructor(element) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Bloquer le scroll natif le plus tôt possible
    if (window.location.hash) {
      history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = 'auto';
    }

    this.options = {
      hasPinItems: false,
      hasScrollerTitle: false,
    };

    this.element = element;
    this.setOptions();
    this.init();
  }

  init() {
    if (window.innerWidth > 768) {
      this.smoother = ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
        ease: 'expo.out',
      });
    }

    if (window.innerWidth < 768) {
      this.smoother = ScrollSmoother.create({
        smooth: 1,
        effects: false,
        smoothTouch: 0.1,
        ease: 'expo.out',
      });
    }

    // Ancres sur la même page
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          this.smoother.scrollTo(target, true, 'top top');
        }
      });
    });

    // Liens multi-pages avec ancres
    document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
      const href = anchor.getAttribute('href');
      if (href.startsWith('#')) return;

      anchor.addEventListener('click', (e) => {
        const [page, hash] = href.split('#');
        const currentPage =
          window.location.pathname.split('/').pop() || 'index.html';

        if (
          page === currentPage ||
          page === `./${currentPage}` ||
          (page === 'index.html' &&
            (currentPage === '' || currentPage === 'index.html'))
        ) {
          e.preventDefault();
          const target = document.querySelector(`#${hash}`);
          if (target) {
            this.smoother.scrollTo(target, true, 'top top');
          }
        }
      });
    });

    // Récupérer le hash sauvegardé
    const pendingHash = sessionStorage.getItem('pendingHash');

    if (pendingHash) {
      // Nettoyer le sessionStorage
      sessionStorage.removeItem('pendingHash');

      // Remettre le hash dans l'URL
      history.replaceState(null, null, pendingHash);

      // Attendre que tout soit chargé
      window.addEventListener('load', () => {
        setTimeout(() => {
          const target = document.querySelector(pendingHash);
          if (target && this.smoother) {
            this.smoother.scrollTo(target, true, 'top top');
          }
        }, 500); //Pour changer le délais ou on voit le hero quand on reviens au index.html
      });
    }
  }

  //PIN CONTROLS

  initPins() {
    const pinnedItems = this.element.querySelectorAll('.js-pinned');
    for (let i = 0; i < pinnedItems.length; i++) {
      const pinnedItem = pinnedItems[i];

      const imagePanels = pinnedItem.querySelectorAll('.js-image-panel');
      const nbImagePanels = imagePanels.length - 1;
      const buffer = 200;

      ScrollTrigger.create({
        pin: pinnedItem,
        trigger: pinnedItem,
        start: 'center center',
        end: () =>
          '+=' + (pinnedItem.offsetHeight * nbImagePanels * 0.5 + buffer),
        scrub: true,
        //markers: true,
        onToggle: (self) => {
          if (self.isActive) {
            pinnedItem.classList.add('is-pinned');
          } else {
            pinnedItem.classList.remove('is-pinned');
          }
        },
      });

      //console.log(pinnedItem);
      /*
      ScrollTrigger.create({
        pin: pinnedItem,
        trigger: pinnedItem,
        start: 'center center',
        end: () =>
          '+=' + (pinnedItem.offsetHeight * nbImagePanels * 0.5 + buffer),
        scrub: true,
        //markers: true,
      });
*/
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
