'use strict';

(function () {
  var setupDialogElement = document.querySelector('.setup');
  var dialogHandler = setupDialogElement.querySelector('.upload');
  var artifactCell = setupDialogElement.querySelectorAll('.setup-artifacts-cell');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setupDialogElement.querySelector('.setup-close');
  var artifacts = [];

  var startPositions = {
    x: getComputedStyle(setupDialogElement)['left'],
    y: getComputedStyle(setupDialogElement)['top']
  };

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var returnSetup = function () {
    setupDialogElement.style.top = startPositions.y;
    setupDialogElement.style.left = startPositions.x;
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  var openPopup = function () {
    setupDialogElement.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setupDialogElement.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupClose.addEventListener('click', function () {
    closePopup();
    returnSetup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
    returnSetup();
  });

  var setEvent = function (toggle, element) {
    toggle.addEventListener('mousedown', function (evt) {
      evt.preventDefault();

      var startCoords = {
        x: evt.clientX,
        y: evt.clientY
      };

      var dragged = false;

      var onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();
        dragged = true;

        var shift = {
          x: startCoords.x - moveEvt.clientX,
          y: startCoords.y - moveEvt.clientY
        };

        startCoords = {
          x: moveEvt.clientX,
          y: moveEvt.clientY
        };

        element.style.top = (element.offsetTop - shift.y) + 'px';
        element.style.left = (element.offsetLeft - shift.x) + 'px';

      };

      var onMouseUp = function (upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        if (dragged) {
          var onClickPreventDefault = function (e) {
            e.preventDefault();
            toggle.removeEventListener('click', onClickPreventDefault);
          };
          toggle.addEventListener('click', onClickPreventDefault);
        }

      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  };
  setEvent(dialogHandler, setupDialogElement);

  var addParentEvent = function (parent, elem) {
    parent.addEventListener('dragover', function (evt) {
      evt.preventDefault();
    });

    parent.addEventListener('drop', function () {
      parent.appendChild(elem);
    });
  };

  for (var i = 0; i < artifactCell.length; i++) {
    artifacts[i] = artifactCell[i].querySelector('img');
  }

  for (var j = 0; j < artifactCell.length; j++) {
    if (!artifacts[j] === false) {
      var artifact = artifacts[j];
      artifact.setAttribute('draggable', true);
    }
    addParentEvent(artifactCell[j], artifact);
  }

})();
