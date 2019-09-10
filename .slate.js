
var fullscreen = slate.operation("move", {
    "x" : "screenOriginX",
    "y" : "screenOriginY",
    "width" : "screenSizeX",
    "height" : "screenSizeY"
});
var topRightOneThird = slate.operation("move", {
    "x" : "screenSizeX*2/3",
    "y" : "screenOriginY",
    "width" : "screenSizeX/3",
    "height" : "screenSizeY*2/3"
});
var topLeftTwoThird = slate.operation("move", {
    "x" : "screenOriginX",
    "y" : "screenOriginY",
    "width" : "screenSizeX*2/3",
    "height" : "screenSizeY*2/3"
});
var bottomRightTwoThird = slate.operation("move", {
    "x" : "screenSizeX / 3",
    "y" : "screenSizeY * 2 / 3",
    "width" : "screenSizeX*2/3",
    "height" : "screenSizeY*2/3"
});
var bottomLeftTwoThird = slate.operation("move", {
    "x" : "screenOriginX",
    "y" : "screenSizeY * 2 / 3",
    "width" : "screenSizeX*2/3",
    "height" : "screenSizeY/3"
});
var halfLeft = slate.operation("move", {
    "x" : "screenOriginX",
    "y" : "screenOriginY",
    "width" : "screenSizeX/2",
    "height" : "screenSizeY"
});
var halfRight = slate.operation("move", {
    "x" : "screenSizeX / 2",
    "y" : "screenOriginY",
    "width" : "screenSizeX/2",
    "height" : "screenSizeY"
});
var halfTop = slate.operation("move", {
    "x" : "screenOriginX",
    "y" : "screenOriginY",
    "width" : "screenSizeX",
    "height" : "screenSizeY/2"
});
var halfBottom = slate.operation("move", {
    "x" : "screenOriginX",
    "y" : "screenSizeY / 2", 
    "width" : "screenSizeX",
    "height" : "screenSizeY/2"
});
var rightTwoThird = slate.operation("move", {
    "x" : "screenSizeX / 3",
    "y" : "screenOriginY",
    "width" : "screenSizeX*2/3",
    "height" : "screenSizeY"
});
var leftOneThird = slate.operation("move", {
    "x" : "screenOriginX",
    "y" : "screenOriginY",
    "width" : "screenSizeX/3",
    "height" : "screenSizeY"
});

slate.bindAll({
    "m:ctrl,alt,cmd"                : fullscreen,
    "up:ctrl,alt,shift"             : topRightOneThird,
    "left:ctrl,alt,shift"           : topLeftTwoThird,
    "right:ctrl,alt,shift"          : bottomRightTwoThird,
    "down:ctrl,alt,shift"           : bottomLeftTwoThird,
    "left:ctrl,alt,cmd"             : halfLeft,
    "right:ctrl,alt,cmd"            : halfRight,
    "up:ctrl,alt,cmd"               : halfTop,
    "down:ctrl,alt,cmd"             : halfBottom,
    "left:ctrl,alt,cmd,shift"       : leftOneThird,
    "right:ctrl,alt,cmd,shift"      : rightTwoThird,
})
