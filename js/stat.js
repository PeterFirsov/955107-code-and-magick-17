'use strict';

var Cloud = {
  width: 420,
  height: 270,
  x: 100,
  y: 10
};
var gapY = {
  simple: 10,
  text: 15,
  win: 130
};
var gapX = {
  bar: 40,
  text: 50
};
var barHeight = Cloud.height - gapY.text - gapY.win - gapY.simple * 2;
var center = Cloud.width / 2;

var renderRectangle = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color || 'red';
  ctx.fillRect(x, y, width, height);
};

var drawText = function (ctx, text, x, y, font, color) {
  ctx.fillStyle = color || '#000';
  ctx.font = font || '16px PT Mono';
  ctx.fillText(text, x, y);
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
  renderRectangle(ctx, Cloud.x + gapY.simple, Cloud.y + gapY.simple, Cloud.width, Cloud.height, 'rgba(0, 0, 0, 0.7)');
  renderRectangle(ctx, Cloud.x, Cloud.y, Cloud.width, Cloud.height, '#fff');

  drawText(ctx, 'Ура вы победили!', center + gapY.simple, Cloud.y + (gapY.simple + gapY.text) * 1);
  drawText(ctx, 'Список результатов:', center + gapY.simple, Cloud.y + (gapY.simple + gapY.text) * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var positionX = Cloud.x + gapY.simple + gapX.text + (gapY.simple * 4 + gapX.bar) * i;
    var dynamicPositionY = (barHeight * times[i]) / maxTime;
    drawText(ctx, players[i], positionX, Cloud.height - gapY.simple);

    renderRectangle(ctx, positionX, Cloud.height - gapY.simple * 2 - gapY.text, gapX.bar, -dynamicPositionY, (players[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsl(' + 360 * Math.random() + ',' + (0 + 100 * Math.random()) + '%,' + (0 + 100 * Math.random()) + '%)');

    drawText(ctx, Math.round(times[i]), positionX, Cloud.height - gapY.simple * 6 - dynamicPositionY);
  }
};
