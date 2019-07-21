'use strict';

(function () {
  var WIZARD_COUNT = 4;
  var wizards = [];
  var fitered = [];

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var removeWizards = function () {
    similarListElement.innerHTML = '';
  };

  var renderWizards = function (array) {
    var takeNumber = array.length > 4 ? 4 : array.length;
    var fragment = document.createDocumentFragment();

    removeWizards();

    for (var i = 0; i < takeNumber; i++) {
      fragment.appendChild(renderWizard(array[i]));
    }

    similarListElement.appendChild(fragment);

    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  var onSuccess = function (data) {
    wizards = data.slice(0, WIZARD_COUNT);
    fitered = data.slice();
    renderWizards(wizards);
  };

  window.backend.load(onSuccess, window.backend.errorHandler);

  window.wizards = {
    render: renderWizards,
    data: function () {
      return fitered;
    }
  };
})();
