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
    "height" : "screenSizeY/3"
});
var bottomLeftTwoThird = slate.operation("move", {
    "x" : "screenOriginX",
    "y" : screenHeight * 2 / 3,
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
    "x" : screenWidth / 2,
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
    "y" : screenHeight / 2, 
    "width" : "screenSizeX",
    "height" : "screenSizeY/2"
});

slate.bind("m:ctrl,alt,cmd", function() { fullscreen.run() });
slate.bind("up:ctrl,alt,shift", function() { topRightTwoThird.run() });
slate.bind("left:ctrl,alt,shift", function() { topRightOneThird.run() });
slate.bind("right:ctrl,alt,shift", function() { bottomRightTwoThird.run() });
slate.bind("down:ctrl,alt,shift", function() { bottomLeftTwoThird.run() });
slate.bind("left:ctrl,alt,cmd", function() { halfLeft.run() });
slate.bind("right:ctrl,alt,cmd", function() { halfRight.run() });
slate.bind("up:ctrl,alt,cmd", function() { halfTop.run() });
slate.bind("down:ctrl,alt,cmd", function() { halfBottom.run() });
