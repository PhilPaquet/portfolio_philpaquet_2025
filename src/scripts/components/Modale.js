export default class Modale {
  constructor(element) {
    this.element = element;

    this.modal = null;
    this.isOpen = false;
    this.init();
  }

  init() {
    // Créer la structure de la modale
    this.createModal();

    // Attacher les événements aux images avec data-component="Modale"
    this.attachImageListeners();

    // Événements de fermeture
    this.attachCloseListeners();
  }

  createModal() {
    // Créer l'overlay
    const modalHTML = `
              <div class="image-modal" id="imageModal">
                  <div class="image-modal__overlay"></div>
                  <button class="image-modal__close" aria-label="Fermer la modale">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                  </button>
                  <div class="image-modal__container">
                      <div class="image-modal__content">
                          <div class="image-modal__image-wrapper border">
                              <img src="" alt="" class="image-modal__image">
                          </div>
                          <div class="image-modal__description">
                              <p></p>
                          </div>
                      </div>
                  </div>
              </div>
          `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    this.modal = document.getElementById('imageModal');
  }

  attachImageListeners() {
    // Sélectionner uniquement les images avec data-component="Modale"
    const images = document.querySelectorAll(
      '.etape__media_image[data-component="Modale"]'
    );

    images.forEach((imagePanel) => {
      imagePanel.style.cursor = 'pointer';

      imagePanel.addEventListener('click', (e) => {
        const img = imagePanel.querySelector('img');
        const imgSrc = img.src;
        const imgAlt = img.alt;

        // Récupérer la description depuis data-description ou utiliser celle par défaut
        const description =
          imagePanel.dataset.description || this.getImageDescription(imgAlt);

        this.openModal(imgSrc, imgAlt, description);
      });
    });
  }

  getImageDescription(alt) {
    // Mapping des descriptions selon l'alt de l'image
    const descriptions = {
      Logo: 'Processus de création du logo de la municipalité. Le design reflète les valeurs de la communauté et son identité visuelle moderne.',
      Inspirations:
        "Analyse comparative de sites municipaux existants pour identifier les meilleures pratiques en matière de design et d'expérience utilisateur.",
      Wireframe:
        "Maquettes filaires des pages principales, définissant la structure et la hiérarchie de l'information pour une navigation intuitive.",
      'Design statique':
        'Design final haute fidélité intégrant les principes de design responsive et adapté aux besoins des personas identifiés.',
    };

    return descriptions[alt] || 'Image du projet municipal.';
  }

  openModal(src, alt, description) {
    const modalImg = this.modal.querySelector('.image-modal__image');
    const modalDesc = this.modal.querySelector('.image-modal__description p');

    modalImg.src = src;
    modalImg.alt = alt;
    modalDesc.textContent = description;

    this.modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    this.isOpen = true;

    // Animation d'entrée
    setTimeout(() => {
      this.modal.classList.add('is-visible');
    }, 10);
  }

  closeModal() {
    this.modal.classList.remove('is-visible');

    setTimeout(() => {
      this.modal.classList.remove('is-active');
      document.body.style.overflow = '';
      this.isOpen = false;
    }, 300);
  }

  attachCloseListeners() {
    // Bouton de fermeture
    const closeBtn = this.modal.querySelector('.image-modal__close');
    closeBtn.addEventListener('click', () => this.closeModal());

    // Clic sur l'overlay
    const overlay = this.modal.querySelector('.image-modal__overlay');
    overlay.addEventListener('click', () => this.closeModal());

    // Clic sur l'image
    const modalImg = this.modal.querySelector('.image-modal__image');
    modalImg.addEventListener('click', () => this.closeModal());

    // Touche Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.closeModal();
      }
    });
  }
}
