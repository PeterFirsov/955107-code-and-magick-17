'use strict';

(function () {
  var SAVE_URL = 'https://js.dump.academy/code-and-magick';
  var LOAD_URL = 'https://js.dump.academy/code-and-magick/data';


  var request = function (onSuccess, onError, data) {
    var xhr = new XMLHttpRequest();
    var goodAnswer = 200;
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === goodAnswer) {
        onSuccess(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    if (data) {
      xhr.open('POST', SAVE_URL);
      xhr.send(data);
    } else {
      xhr.open('GET', LOAD_URL);
      xhr.send();
    }
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend = {
    load: function (onLoad, onError) {
      request(onLoad, onError);
    },
    save: function (onLoad, onError, data) {
      request(onLoad, onError, data);
    },
    errorHandler: errorHandler
  };

})();
