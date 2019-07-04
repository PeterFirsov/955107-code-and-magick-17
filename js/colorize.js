'use strict';

(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var wizardWrap = document.querySelector('.setup-wizard-appearance');
  var coatInput = wizardWrap.querySelector('input[name="coat-color"]');
  var eyeInput = wizardWrap.querySelector('input[name="eyes-color"]');
  var wizardFigure = wizardWrap.querySelector('.setup-wizard');
  var wizardCoatColor = wizardFigure.querySelector('.wizard-coat');
  var wizardEyeColor = wizardFigure.querySelector('.wizard-eyes');
  var wizardfireballColor = document.querySelector('.setup-fireball-wrap');
  var fireColor = wizardfireballColor.querySelector('input[name="fireball-color"]');


  var getRandomColor = function (colors) {
    return colors[Math.floor(colors.length * Math.random())];
  };

  window.colorize = function (element) {
    element.addEventListener('click', function () {
      if (element === wizardCoatColor) {
        var color = getRandomColor(COAT_COLORS);
        coatInput.value = color;
      }
      if (element === wizardEyeColor) {
        color = getRandomColor(EYE_COLORS);
        eyeInput.value = color;
      }
      if (element === wizardfireballColor) {
        color = getRandomColor(FIREBALL_COLORS);
        fireColor.value = color;
      }
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
    });
  };
})();
