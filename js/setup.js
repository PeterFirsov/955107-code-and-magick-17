'use strict';

var WIZARD_COUNT = 4;

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var wizards = [];

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var wizardWrap = document.querySelector('.setup-wizard-appearance');
var coatInput = wizardWrap.querySelector('input[name="coat-color"]');
var eyeInput = wizardWrap.querySelector('input[name="eyes-color"]');
var wizardFigure = wizardWrap.querySelector('.setup-wizard');
var wizardCoatColor = wizardFigure.querySelector('.wizard-coat');
var wizardEyeColor = wizardFigure.querySelector('.wizard-eyes');
var wizardfireballColor = document.querySelector('.setup-fireball-wrap');
var fireColor = wizardfireballColor.querySelector('input[name="fireball-color"]');

var changeCoatColor = function () {
  var randomCoatColor = COAT_COLORS[generateRandomInteger(0, COAT_COLORS.length - 1)];
  wizardCoatColor.style.fill = randomCoatColor;
  coatInput.value = randomCoatColor;
};

var changeEyeColor = function () {
  var randomEyeColor = EYE_COLORS[generateRandomInteger(0, EYE_COLORS.length - 1)];
  wizardEyeColor.style.fill = randomEyeColor;
  eyeInput.value = randomEyeColor;
};

var changeFireBallColor = function () {
  var randomFireColor = FIREBALL_COLORS[generateRandomInteger(0, FIREBALL_COLORS.length - 1)];
  wizardfireballColor.style.background = randomFireColor;
  fireColor.value = randomFireColor;
};

wizardCoatColor.addEventListener('click', function () {
  changeCoatColor();
});

wizardEyeColor.addEventListener('click', function () {
  changeEyeColor();
});

wizardfireballColor.addEventListener('click', function () {
  changeFireBallColor();
});

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
