var screenWidth = 1920;
var screenHeight = 1080;

var fullscreen = slate.operation("move", {
    "x" : "screenOriginX",
    "y" : "screenOriginY",
    "width" : "screenSizeX",
    "height" : "screenSizeY"
});
var topRightTwoThird = slate.operation("move", {
    "x" : screenWidth / 3,
    "y" : "screenOriginY",
    "width" : "screenSizeX*2/3",
    "height" : "screenSizeY*2/3"
});
var topRightOneThird = slate.operation("move", {
    "x" : "screenOriginX",
    "y" : "screenOriginY",
    "width" : "screenSizeX/3",
    "height" : "screenSizeY*2/3"
});
var bottomRightTwoThird = slate.operation("move", {
    "x" : screenWidth / 3,
    "y" : screenHeight * 2 / 3,
    "width" : "screenSizeX*2/3",
    "height" : "screenSizeY*2/3"
});
var bottomLeftTwoThird = slate.operation("move", {
    "x" : "screenOriginX",
    "y" : screenHeight * 2 / 3,
    "width" : "screenSizeX*2/3",
    "height" : "screenSizeY/3"
});

slate.bind("m:ctrl,alt,cmd", function() { fullscreen.run() });
slate.bind("up:ctrl,alt,shift", function() { topRightTwoThird.run() });
slate.bind("left:ctrl,alt,shift", function() { topRightOneThird.run() });
slate.bind("right:ctrl,alt,shift", function() { bottomRightTwoThird.run() });
slate.bind("down:ctrl,alt,shift", function() { bottomLeftTwoThird.run() });
