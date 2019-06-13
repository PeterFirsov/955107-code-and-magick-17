'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var compliteNames = [];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var ganerateRandom = function (names, surnames, complite, coatcolor, eyecolor) {
  for (var i = 0; i < names.length; i++) {
    complite[i] = names[Math.floor(Math.random() * (names.length - 0)) + 0] + ' ' + surnames[Math.floor(Math.random() * (names.length - 0)) + 0];
    coatColors[i] = coatcolor[Math.floor(Math.random() * (coatcolor.length - 0)) + 0];
    eyesColors[i] = eyecolor[Math.floor(Math.random() * (eyecolor.length - 0)) + 0];
  }
};

ganerateRandom(WIZARD_NAMES, WIZARD_SURNAMES, compliteNames, coatColors, eyesColors);

var wizards = [
  {
    name: compliteNames[0],
    coatColor: coatColors[0],
    eyesColor: eyesColors [0]
  },
  {
    name: compliteNames[1],
    coatColor: coatColors[1],
    eyesColor: eyesColors [1]
  },
  {
    name: compliteNames[2],
    coatColor: coatColors[2],
    eyesColor: eyesColors [2]
  },
  {
    name: compliteNames[3],
    coatColor: coatColors[3],
    eyesColor: eyesColors [3]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
