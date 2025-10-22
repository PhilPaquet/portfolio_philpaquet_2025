// import { gsap } from 'gsap';
// import { SplitText } from 'gsap/SplitText.js';
// export default class TextAnim {
//   constructor(element) {
//     gsap.registerPlugin(SplitText);
//     this.element = element;
//     this.options = {
//       repeat: false,
//     };
//     document.fonts.ready.then(this.init.bind(this));
//     /*
//     gsap.from(this.split.chars, {
//       duration: 0.5,
//       y: '100',
//       delay: 0.25,
//       alpha: 0,
//       stagger: 0.05,
//       ease: 'expo.out',
//     });
//     */
//   }
//   init() {
//     this.split = SplitText.create(this.element, {
//       type: 'chars, words, lines',
//       mask: 'chars',
//       autoSplit: true,
//     });

//     this.setOptions();

//     this.initAnim();

//     this.initObserver();
//   }

//   initObserver() {
//     const observer = new IntersectionObserver(this.watch.bind(this), {
//       rootMargin: '0px 0px 0px 0px',
//     });
//     observer.observe(this.element);
//   }

//   watch(entries, observer) {
//     for (let i = 0; i < entries.length; i++) {
//       const entry = entries[i];
//       const target = entry.target;

//       if (entry.isIntersecting) {
//         this.anim(true);
//         if (!this.options.repeat) observer.unobserve(target);
//       } else {
//         this.anim(false);
//       }
//     }
//   }

//   initAnim() {
//     gsap.set(this.split.chars, {
//       yPercent: 'random([-100, 100])',
//       autoAlpha: 0,
//     });
//   }

//   anim(isAnimIn) {
//     const alpha = isAnimIn ? 1 : 0; //condition ? si vrai : si faux;
//     const y = isAnimIn ? 0 : 'random([-100, 100])';
//     console.log(y);
//     gsap.to(this.split.chars, {
//       duration: 0.5,
//       yPercent: y,
//       delay: 0.25,
//       autoAlpha: alpha,
//       stagger: 0.05,
//       ease: 'expo.out',
//     });
//   }
/*
  animIn() {
    gsap.to(this.split.chars, {
      duration: 0.5,
      yPercent: 0,
      delay: 0.25,
      autoAlpha: 1,
      stagger: 0.05,
      ease: 'expo.out',
    });
  }

  animOut() {
    gsap.to(this.split.chars, {
      duration: 0.5,
      yPercent: 'random([-100, 100])',
      delay: 0.25,
      autoAlpha: 0,
      stagger: 0.05,
      ease: 'expo.out',
    });
  }
*/
//   setOptions() {
//     if ('repeat' in this.element.dataset) {
//       this.options.repeat = true;
//     }
//   }
// }
