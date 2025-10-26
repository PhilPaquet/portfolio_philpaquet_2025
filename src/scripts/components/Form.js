export default class Form {
  constructor(element) {
    this.element = element;
    this.formElements = this.element.elements;

    // Les trois champs principaux
    this.inputs = {
      fullname: this.element.querySelector('#fullname'),
      email: this.element.querySelector('#email'),
      message: this.element.querySelector('#message'),
    };

    // Bouton d’envoi
    this.submitButton = this.element.querySelector('.btn_fleche');

    this.init();
  }

  init() {
    this.element.setAttribute('novalidate', '');

    // Seulement le premier champ actif au départ
    this.inputs.fullname.closest('.input').classList.add('active');

    // Écouteurs
    this.inputs.fullname.addEventListener('input', () => this.handleProgress());
    this.inputs.email.addEventListener('input', () => this.handleProgress());
    this.inputs.message.addEventListener('input', () =>
      this.handleButtonState()
    );

    // Initialiser le bouton à l’état inactif
    this.handleButtonState();

    // Validation classique
    for (let i = 0; i < this.formElements.length; i++) {
      const input = this.formElements[i];
      if (input.required) {
        input.addEventListener('input', this.validateInput.bind(this));
      }
    }

    this.element.addEventListener('submit', this.onSubmit.bind(this));
  }

  handleProgress() {
    const { fullname, email, message } = this.inputs;

    // fullname valide → active email
    if (fullname.validity.valid && fullname.value.trim() !== '') {
      email.closest('.input').classList.add('active');
    } else {
      email.closest('.input').classList.remove('active');
      message.closest('.input').classList.remove('active');
      this.submitButton.classList.remove('active');
      this.submitButton.classList.add('inactive');
      return;
    }

    // email valide → active message
    if (email.validity.valid && email.value.trim() !== '') {
      message.closest('.input').classList.add('active');
    } else {
      message.closest('.input').classList.remove('active');
    }

    this.handleButtonState();
  }

  handleButtonState() {
    const messageValue = this.inputs.message.value.trim();

    if (messageValue.length > 0) {
      this.submitButton.classList.add('active');
      this.submitButton.classList.remove('inactive');
    } else {
      this.submitButton.classList.add('inactive');
      this.submitButton.classList.remove('active');
    }
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      console.log('success');
      const formData = new FormData(this.element);

      fetch(this.element.action, {
        method: this.element.method || 'POST',
        body: formData,
      })
        .then((response) => response.text())
        .then((html) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const confirmationMessage = doc.querySelector('.tim_form');

          if (confirmationMessage) {
            const container = this.element.closest(
              '.formulaire_contact__container'
            );
            if (container) {
              container.innerHTML = confirmationMessage.outerHTML;
            } else {
              this.element.outerHTML = confirmationMessage.outerHTML;
            }
          }

          this.showConfirmation();
        })
        .catch((error) => console.error('Erreur:', error));
    } else {
      console.log('fail');
    }
  }

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

    // Validation stricte de l’email
    if (input.type === 'email') {
      const strictEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{1,}$/;
      if (!strictEmailPattern.test(input.value.trim())) {
        input.setCustomValidity('Adresse courriel invalide');
      } else {
        input.setCustomValidity('');
      }
    }

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
    container.classList.add('error');
  }

  removeError(input) {
    const container =
      input.closest('[data-input-container]') || input.closest('.input');
    container.classList.remove('error');
  }

  showConfirmation() {
    this.element.classList.add('is-sent');
  }
}
