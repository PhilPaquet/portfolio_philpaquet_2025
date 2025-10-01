export default class Points {
  constructor(element) {
    this.element = element;
    this.init();

    function fillContainer(container, shapeType = 'square') {
      const width = container.clientWidth;
      const height = container.clientHeight;
      const shapeSize = 10; // px
      const cols = Math.floor(width / (shapeSize + 5));
      const rows = Math.floor(height / (shapeSize + 5));
      const total = cols * rows;

      container.innerHTML = ''; // clear before refill

      for (let i = 0; i < total; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape');
        if (shapeType === 'circle') shape.classList.add('circle');
        container.appendChild(shape);
      }
    }

    const container = document.querySelector('.points');
    fillContainer(container, 'circle');

    window.addEventListener('resize', () => fillContainer(container, 'circle'));
  }
}
