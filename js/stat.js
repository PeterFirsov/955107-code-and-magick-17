'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var WIN_GAP = 130;
var TEXT_WIDTH = 50;
var barHeight = CLOUD_HEIGHT - GAP - FONT_GAP - WIN_GAP - GAP;
var BAR_WIDTH = 40;
var center = CLOUD_WIDTH / 2;

var isStorageSupport = true;
var storage = "";

try {
storage = localStorage.getItem("name");
} catch (err) {
isStorageSupport = false;
}

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', center + GAP, CLOUD_Y + (GAP + FONT_GAP) * 1);
  ctx.fillText('Список результатов:', center + GAP, CLOUD_Y + (GAP + FONT_GAP) * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP + TEXT_WIDTH + (GAP * 4 + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(' + 360 * Math.random() + ',' + (0 + 100 * Math.random()) + '%,' + (0 + 100 * Math.random()) + '%)';
    }
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH + (GAP * 4 + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP * 2 - FONT_GAP, BAR_WIDTH, -(barHeight * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + TEXT_WIDTH + (GAP * 4 + BAR_WIDTH) * i, -(barHeight * times[i]) / maxTime);
  }
};
