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
      this.element.submit();
      //envoi ajax du formulaire
      this.showConfirmation();
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
