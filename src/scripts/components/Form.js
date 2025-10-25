export default class Form {
  constructor(element) {
    this.element = element;
    this.formElements = this.element.elements;
    this.init();
  }

  init() {
    this.element.setAttribute('novalidate', '');

    for (let i = 0; i < this.formElements.length; i++) {
      const input = this.formElements[i];
      if (input.required) {
        input.addEventListener('input', this.validateInput.bind(this));
      }
    }

    this.element.addEventListener('submit', this.onSubmit.bind(this));
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      console.log('success');
      // Envoi AJAX du formulaire
      const formData = new FormData(this.element);
      fetch(this.element.action, {
        method: this.element.method || 'POST',
        body: formData,
      })
        .then((response) => response.text())
        .then((html) => {
          console.log('HTML reçu:', html); // DEBUG

          // Parser le HTML complet retourné
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');

          // Extraire SEULEMENT le div avec la classe "tim_form"
          const confirmationMessage = doc.querySelector('.tim_form');

          console.log('Message trouvé:', confirmationMessage); // DEBUG

          if (confirmationMessage) {
            // Trouver le conteneur parent du formulaire
            const container = this.element.closest(
              '.formulaire_contact__container'
            );

            console.log('Conteneur trouvé:', container); // DEBUG

            if (container) {
              // Remplacer tout le contenu du conteneur par le message
              container.innerHTML = confirmationMessage.outerHTML;
              console.log('Conteneur remplacé!'); // DEBUG
            } else {
              // Fallback : remplacer juste le formulaire
              this.element.outerHTML = confirmationMessage.outerHTML;
              console.log('Formulaire remplacé!'); // DEBUG
            }
          } else {
            console.log(
              'ERREUR: Message de confirmation non trouvé dans le HTML'
            ); // DEBUG
          }

          this.showConfirmation();
        })
        .catch((error) => {
          console.error('Erreur:', error);
        });
    } else {
      console.log('fail');
    }
  }

  /**
   * method description
   * @return {boolean} status de la validation
   */

  validate() {
    let isValid = true;

    for (let i = 0; i < this.formElements.length; i++) {
      const input = this.formElements[i];

      if (input.required && !this.validateInput(input)) {
        isValid = false;
      }
    }
    return isValid;
  }

  validateInput(inputEvent) {
    const input = inputEvent.currentTarget || inputEvent;

    if (input.validity.valid) {
      this.removeError(input);
    } else {
      this.addError(input);
    }
    return input.validity.valid;
  }

  addError(input) {
    const container =
      input.closest('[data-input-container]') || input.closest('.input');
    /*^^Cherche le plus proche parent avec la classe input ou data-input-container^^*/
    container.classList.add('error');
  }

  removeError(input) {
    const container =
      input.closest('[data-input-container]') || input.closest('.input');
    /*^^Cherche le plus proche parent avec la classe input ou data-input-container^^*/
    container.classList.remove('error');
  }

  showConfirmation() {
    this.element.classList.add('is-sent');
  }
}
