'use strict';

(function () {

  var filterIt = function () {

    var getRank = function (wizard) {
      var rank = 0;

      if (wizard.colorCoat === window.coatColor) {
        rank += 2;
      }
      if (wizard.colorEyes === window.eyesColor) {
        rank += 1;
      }

      return rank;
    };

    var updateWizards = function () {
      window.wizards.render(window.wizards.data().slice().sort(function (left, right) {
        var rankDiff = getRank(right) - getRank(left);
        if (rankDiff === 0) {
          rankDiff = window.wizards.data().indexOf(left) - window.wizards.data().indexOf(right);
        }
        return rankDiff;
      }));
    };
    updateWizards();
  };

  window.filterIt = filterIt;

})();
