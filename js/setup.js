'use strict';

(function () {
  var WIZARD_COUNT = 4;

  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var wizards = [];

  var wizardWrap = document.querySelector('.setup-wizard-appearance');
  var wizardFigure = wizardWrap.querySelector('.setup-wizard');
  var wizardCoatColor = wizardFigure.querySelector('.wizard-coat');
  var wizardEyeColor = wizardFigure.querySelector('.wizard-eyes');
  var wizardfireballColor = document.querySelector('.setup-fireball-wrap');

  window.colorize(wizardCoatColor);
  window.colorize(wizardfireballColor);
  window.colorize(wizardEyeColor);

  document.querySelector('.setup-similar').classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var generateRandomInteger = function (min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  };

  var addWizard = function () {
    for (var i = 0; i < WIZARD_COUNT; i++) {
      wizards.push({
        name: WIZARD_NAMES[generateRandomInteger(0, WIZARD_NAMES.length - 1)] + ' ' + WIZARD_SURNAMES[generateRandomInteger(0, WIZARD_SURNAMES.length - 1)],
        coatColor: COAT_COLORS[generateRandomInteger(0, COAT_COLORS.length - 1)],
        eyesColor: EYE_COLORS[generateRandomInteger(0, EYE_COLORS.length - 1)]
      });
    }
  };
  addWizard();

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var renderWizards = function () {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    similarListElement.appendChild(fragment);
  };

  renderWizards();

})();
