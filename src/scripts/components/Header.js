export default class Header {
  constructor(element) {
    this.element = element;
    this.options = {
      threshold: 0,
      alwaysShowHeader: false,
    };
    this.scrollPosition = 0;
    this.lastScrollPosition = 0;
    this.html = document.documentElement;
    this.init();
    this.initNavMobile();
    this.initCloseNavMobile();
  }

  init() {
    this.setOptions();
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  setOptions() {
    if ('alwaysShow' in this.element.dataset) {
      this.options.alwaysShowHeader = true;
    }
    if ('threshold' in this.element.dataset) {
      this.options.threshold = parseFloat(this.element.dataset.threshold);
    }
  }

  isPinnedSectionActive() {
    return document.querySelector('.js-pinned.is-pinned') !== null;
  }

  onScroll() {
    this.lastScrollPosition = this.scrollPosition;
    this.scrollPosition = document.scrollingElement.scrollTop;

    if (this.isPinnedSectionActive()) {
      this.html.classList.add('header-is-hidden', 'is-scrolling-down');
      this.html.classList.remove('is-scrolling-up');
    } else {
      this.setHeaderState();
      this.setDirections();
    }
  }

  setHeaderState() {
    if (
      this.scrollPosition >
        document.scrollingElement.scrollHeight * this.options.threshold &&
      !this.options.alwaysShowHeader
    ) {
      this.html.classList.add('header-is-hidden');
    } else {
      this.html.classList.remove('header-is-hidden');
    }
  }

  setDirections() {
    if (this.scrollPosition >= this.lastScrollPosition) {
      this.html.classList.add('is-scrolling-down');
      this.html.classList.remove('is-scrolling-up');
    } else {
      this.html.classList.remove('is-scrolling-down');
      this.html.classList.add('is-scrolling-up');
    }
  }

  initNavMobile() {
    const toggle = this.element.querySelector('.js-toggle');
    toggle.addEventListener('click', this.onToggleNav.bind(this));
  }

  onToggleNav() {
    this.html.classList.toggle('nav-is-active');
  }

  initCloseNavMobile() {
    const links = this.element.querySelectorAll('a');

    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      link.addEventListener('click', () => {
        if (this.html.classList.contains('nav-is-active')) {
          this.html.classList.remove('nav-is-active');
        }
      });
    }
  }
}
