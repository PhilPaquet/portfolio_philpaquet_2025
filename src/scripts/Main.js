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
        allowHTML: true,
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

class Cursor {
  constructor() {
    this.createCursorElement();
    this.init();
  }

  createCursorElement() {
    if (!document.getElementById('customCursor')) {
      const cursorEl = document.createElement('div');
      cursorEl.id = 'customCursor';
      document.body.appendChild(cursorEl);
    }
  }

  init() {
    // SVG pour le curseur par défaut (flèche)
    const defaultCursorSVG = `
      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5" filter="url(#filter0_f_7872_515)">
<path d="M1.42404 7.99434C-0.257645 4.09349 3.34734 0.149797 7.23264 1.16036L7.60959 1.27462L7.6174 1.27755L7.62619 1.28048L7.97678 1.41524L7.98655 1.41915L7.99533 1.42305L28.6262 10.3205C31.1869 11.4248 32.3501 14.4102 31.2102 16.9553L27.5803 25.0588C27.0784 26.1793 26.1812 27.0764 25.0608 27.5783L16.9572 31.2082C14.4121 32.3483 11.4258 31.1859 10.3215 28.6252L1.42404 7.99434ZM6.41233 5.0959C5.58148 4.73766 4.73976 5.5795 5.09787 6.41036L13.9953 27.0412C14.2013 27.5187 14.734 27.7531 15.217 27.5979L15.3362 27.551L23.425 23.9279C23.649 23.8276 23.8285 23.6479 23.9289 23.424L27.5598 15.3205C27.7725 14.8457 27.584 14.2928 27.1408 14.0422L27.0295 13.9875L6.41233 5.0959Z" fill="#43403C"/>
</g>
<path d="M1.88367 7.79613C0.322174 4.17408 3.82731 0.507388 7.44715 1.74731L7.79773 1.88207L28.4286 10.7795C30.7334 11.7734 31.7799 14.4606 30.7538 16.7512L27.1239 24.8547C26.6722 25.8632 25.8648 26.6706 24.8563 27.1223L16.7528 30.7522C14.4622 31.7783 11.775 30.7317 10.7811 28.427L1.88367 7.79613ZM6.61023 4.63695C5.36388 4.09955 4.10115 5.36228 4.63855 6.60863L13.536 27.2395C13.8467 27.9596 14.653 28.3113 15.3817 28.0705L15.5262 28.0149L23.6298 24.384C23.9659 24.2334 24.235 23.9643 24.3856 23.6282L28.0165 15.5246C28.3371 14.8088 28.0499 13.9769 27.3798 13.6028L27.2411 13.5344L6.61023 4.63695Z" fill="#F2F2F2"/>
<path d="M4.63895 6.6086C4.10146 5.36221 5.36391 4.09975 6.61031 4.63724L27.2412 13.5339C28.0094 13.8652 28.3582 14.761 28.0162 15.5245L24.386 23.6286C24.2354 23.9647 23.9664 24.2337 23.6303 24.3843L15.5262 28.0144C14.7627 28.3565 13.867 28.0077 13.5357 27.2395L4.63895 6.6086Z" fill="#252422"/>
<defs>
<filter id="filter0_f_7872_515" x="0" y="0" width="32.6482" height="32.6465" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_7872_515"/>
</filter>
</defs>
</svg>
    `;

    // SVG pour le curseur au survol (main/pointer)
    const hoverCursorSVG = `
      <svg width="29" height="34" viewBox="0 0 29 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5" filter="url(#filter0_f_7872_511)">
<path d="M11.0361 1C13.521 1.00039 15.5361 3.01489 15.5361 5.5V10.0205L24.2724 11.6592C26.1643 12.0139 27.5361 13.6659 27.5361 15.5908V25.8398C27.5361 27.3985 26.6303 28.816 25.2158 29.4707L18.7168 32.4775C17.6497 32.9712 16.4188 32.9694 15.3525 32.4746L3.60641 27.0234C1.35184 25.9769 0.372663 23.3001 1.41988 21.0459L1.42476 21.0361L1.51558 20.8516L1.52242 20.8389L1.62789 20.6504C2.63569 18.9428 4.64058 18.1131 6.53609 18.5635V5.5C6.53609 3.01472 8.55081 1 11.0361 1ZM11.0312 4C10.2049 4.00247 9.53609 4.6731 9.53609 5.5V20.0449L9.53512 20.0625L9.52144 20.2637L9.51754 20.2949C9.35675 21.5183 8.11898 22.3083 6.94137 21.9385L6.92574 21.9336L6.91012 21.9277L6.72164 21.8545L6.70699 21.8486L6.69234 21.8418L6.13277 21.582C5.38151 21.2331 4.48946 21.5596 4.14058 22.3105C3.79185 23.0618 4.11787 23.954 4.8691 24.3027L16.6152 29.7539C16.846 29.861 17.1075 29.875 17.3466 29.7969L17.4609 29.751L23.956 26.7471C24.2872 26.5935 24.5069 26.2729 24.5332 25.9131L24.5361 25.8223V15.5908C24.5361 15.1418 24.2367 14.7518 23.8125 14.6299L23.6982 14.6035L14.167 12.8164C13.28 12.6499 12.6225 11.9132 12.5439 11.0283L12.5429 11.0176L12.542 11.0059L12.5361 10.8721V5.5L12.5293 5.35645C12.4619 4.64838 11.9014 4.08335 11.1953 4.00879L11.0312 4Z" fill="#43403C"/>
</g>
<path d="M9.02223 20.2295C8.90207 21.1452 7.97268 21.7387 7.09157 21.4619L6.90309 21.3887L6.34352 21.1289C5.34195 20.6636 4.15257 21.098 3.68727 22.0996C3.222 23.1014 3.65703 24.2908 4.65895 24.7559L16.405 30.207C16.7549 30.3694 17.1516 30.3899 17.5134 30.2686L17.6668 30.208L24.1658 27.2012C24.6628 26.971 24.9926 26.4899 25.032 25.9492L25.0359 25.8398V15.5908C25.0359 14.9139 24.5835 14.3266 23.9422 14.1465L23.8123 14.1162L14.2595 12.3252C13.5943 12.2005 13.1007 11.6479 13.0418 10.9844L13.0359 10.8506V5.5C13.0359 4.46449 12.2485 3.61319 11.24 3.51074L11.0359 3.5C9.93133 3.5 9.0359 4.39543 9.0359 5.5V20.0283L9.02223 20.2295ZM15.0359 10.4355L24.1804 12.1504C25.8358 12.4608 27.0359 13.9066 27.0359 15.5908V25.8398C27.0359 27.2037 26.2434 28.4438 25.0056 29.0166L18.5066 32.0234C17.573 32.4554 16.4963 32.4545 15.5632 32.0215L3.81715 26.5703C1.81299 25.6401 0.942882 23.2607 1.87379 21.2568L1.96461 21.0723C2.92679 19.2487 5.12838 18.4545 7.0359 19.249V5.5C7.0359 3.29086 8.82676 1.5 11.0359 1.5C13.2449 1.50022 15.0359 3.291 15.0359 5.5V10.4355Z" fill="#F2F2F2"/>
<path d="M11.0355 3.5C9.93091 3.5 9.03548 4.39543 9.03548 5.5V20.0283C9.03548 21.1246 7.89773 21.8506 6.90347 21.3886L6.34338 21.1284C5.34181 20.6631 4.15266 21.0978 3.68736 22.0994C3.22194 23.1012 3.65703 24.2907 4.65902 24.7557L16.405 30.2074C16.8049 30.393 17.2662 30.3933 17.6663 30.2081L24.1653 27.2012C24.6959 26.9557 25.0355 26.4244 25.0355 25.8398V15.5906C25.0355 14.8688 24.5214 14.2493 23.8119 14.1163L14.259 12.3251C13.5496 12.1921 13.0355 11.5726 13.0355 10.8508V5.5C13.0355 4.39543 12.14 3.5 11.0355 3.5Z" fill="#252422"/>
<defs>
<filter id="filter0_f_7872_511" x="0" y="0" width="28.5361" height="33.8467" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_7872_511"/>
</filter>
</defs>
</svg>
    `;

    const cursor = document.getElementById('customCursor');
    let isHovering = false;

    // Initialiser avec le curseur par défaut
    cursor.innerHTML = defaultCursorSVG;

    // Suivre la position de la souris avec transform pour performance optimale
    document.addEventListener('mousemove', (e) => {
      // Utiliser transform sans décalage supplémentaire
      const offsetX = isHovering ? -10 : 0;
      cursor.style.transform = `translate(${e.clientX + offsetX}px, ${
        e.clientY
      }px)`;
    });

    // Sélecteur pour tous les éléments interactifs
    const interactiveSelector =
      'a, button, video, .input__label, .input__element, [role="button"], [data-component="Modale"], [data-component="YouTube"]';

    // Fonction pour gérer le survol
    const handleMouseEnter = (e) => {
      cursor.innerHTML = hoverCursorSVG;
      isHovering = true;
    };

    const handleMouseLeave = (e) => {
      cursor.innerHTML = defaultCursorSVG;
      isHovering = false;
    };

    // Ajouter les événements aux éléments existants
    const addListeners = () => {
      const interactiveElements =
        document.querySelectorAll(interactiveSelector);
      interactiveElements.forEach((element) => {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // Initialiser les listeners
    addListeners();

    // Observer les nouveaux éléments ajoutés dynamiquement
    const observer = new MutationObserver(() => {
      addListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cacher le curseur quand il quitte la fenêtre
    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
    });
  }
}

// Instantiate when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new Cursor());
} else {
  new Cursor();
}
