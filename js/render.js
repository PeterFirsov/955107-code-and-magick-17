'use strict';

(function () {

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var renderWizards = function () {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < window.data.length; i++) {
      fragment.appendChild(renderWizard(window.data[i]));
    }

    similarListElement.appendChild(fragment);
  };

  renderWizards();

})();
