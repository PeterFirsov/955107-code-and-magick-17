'use strict';

(function () {

  var wizardWrap = document.querySelector('.setup-wizard-appearance');
  var wizardFigure = wizardWrap.querySelector('.setup-wizard');
  var wizardCoatColor = wizardFigure.querySelector('.wizard-coat');
  var wizardEyeColor = wizardFigure.querySelector('.wizard-eyes');
  var wizardfireballColor = document.querySelector('.setup-fireball-wrap');

  window.colorize(wizardCoatColor);
  window.colorize(wizardfireballColor);
  window.colorize(wizardEyeColor);

})();
