import ComponentFactory from './ComponentFactory.js';
import Icons from './utils/Icons.js';

class Main {
  constructor() {
    this.init();
  }

  init() {
    document.documentElement.classList.add('has-js');

    new ComponentFactory();

    Icons.load();
  }
}
new Main();

// main.js

class TippyHelper {
  constructor() {
    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      tippy('[data-tippy-content]', {
        theme: 'custom',
        //animation: 'shift-away-subtle',
        arrow: false,
        followCursor: true,
        //delay: [20, 20],
        placement: 'top',
      });
    });
  }
}

// Instantiate immediately
new TippyHelper();
