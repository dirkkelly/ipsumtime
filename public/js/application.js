function makeVector(x,y) {
  return new Two.Vector(x,y);
}

function makeBody(two) {
  var bodyTopLeft = new Two.Vector(5,5),
      bodyBottomLeft = new Two.Vector(5,595),
      bodyBottomRight = new Two.Vector(445,595),
      bodyTopRight = new Two.Vector(445,5)
      body = two.makePolygon([bodyTopLeft,bodyBottomLeft,bodyBottomRight,bodyTopRight], false);

  body.fill = "#5A9C8C";
  body.stroke = "#111111";
  body.linewidth = 4;

  return body;
}

function makeFace(two) {
  var x = 30,
      y = 30,
      xz = 390,
      yz = 220,
      points = [];

  points.push(makeVector(x, y));
  points.push(makeVector(x + xz, y));
  points.push(makeVector(x + xz, y + yz));
  points.push(makeVector(x, y + yz));
  points.push(makeVector(x, y));

  var face = two.makePolygon(points);
  face.fill = "#BDFFCE";
  face.linewidth = 4;

  return face;
}

function makeLeftEye(two) {
  var x = 120,
      y = 125,
      z = 12;

  var leftEye = two.makeCircle(x, y, z);
  leftEye.fill = "#111111";

  return leftEye;
}

function makeRightEye(two) {
  var x = 330,
      y = 125,
      z = 12;

  var rightEye = two.makeCircle(x, y, z);
  rightEye.fill = "#111111";

  return rightEye;
}

function makeMouthTop(two) {
  var x = 180,
      y = 190,
      xz = 80,
      yz = 10,
      points = [];

  points.push(makeVector(x, y))
  points.push(makeVector(x + xz, y))

  var mouthTop = two.makePolygon(points);
  mouthTop.linewidth = 4;

  return mouthTop;
}

function makeMouthBottom(two) {
  var x = 180,
      y = 190,
      xz = 80,
      yz = 15,
      points = [];

  points.push(makeVector(x, y));
  points.push(makeVector(x, y + yz));
  points.push(makeVector(x + xz, y + yz));
  points.push(makeVector(x + xz, y));

  var mouthBottom = two.makePolygon(points);
  mouthBottom.linewidth = 4;

  return mouthBottom;
}

function makeDrive(two) {
  var x = 40,
      y = 275,
      xz = 225,
      yz = 20,
      points = [];

  points.push(makeVector(x, y));
  points.push(makeVector(x + xz, y));
  points.push(makeVector(x + xz, y + yz));
  points.push(makeVector(x, y + yz));
  points.push(makeVector(x, y));

  var drive = two.makePolygon(points);
  drive.fill = "#434343";
  drive.stroke = "#111111"
  drive.linewidth = 4;

  return drive;
}

function makeDriveEjector(two) {
  var x = 394,
      y = 286,
      z = 10;

  var driveEjector = two.makeCircle(x, y, z);
  driveEjector.fill = "#111111";
  driveEjector.linewidth = 4;

  return driveEjector;
}

function makeDpad(two) {
  var x = 80,
      y = 360,
      z = 40,
      points = []

  points.push(new Two.Vector(x, y));
  points.push(new Two.Vector(x + z, y));
  points.push(new Two.Vector(x + z, y + z));
  points.push(new Two.Vector(x + 2 * z, y + z));
  points.push(new Two.Vector(x + 2 * z, y + 2 * z));
  points.push(new Two.Vector(x + z, y + 2 * z));
  points.push(new Two.Vector(x + z, y + 3 * z));
  points.push(new Two.Vector(x, y + 3 * z));
  points.push(new Two.Vector(x, y + 2 * z));
  points.push(new Two.Vector(x - z, y + 2 * z));
  points.push(new Two.Vector(x - z, y + z));
  points.push(new Two.Vector(x, y + z));
  points.push(new Two.Vector(x, y));

  var dpad = two.makePolygon(points, true);
  dpad.fill = "#FFD629";
  dpad.stroke = "#111111";
  dpad.linewidth = 4;

  return dpad;
}

function makeLeftPort(two) {
  var x = 40,
      y = 510,
      z = 20,
      points = [];

  points.push(new Two.Vector(x, y));
  points.push(new Two.Vector(x, y + z));
  points.push(new Two.Vector(x + 2.5 * z, y + z));
  points.push(new Two.Vector(x + 2.5 * z, y));
  points.push(new Two.Vector(x, y));

  var leftPort = two.makePolygon(points, true);
  leftPort.fill = "#333F99";
  leftPort.linewidth = 3;

  return leftPort;
}

function makeRightPort(two) {
  var x = 110,
      y = 510,
      z = 20,
      points = [];

  points.push(new Two.Vector(x, y));
  points.push(new Two.Vector(x, y + z));
  points.push(new Two.Vector(x + 2.5 * z, y + z));
  points.push(new Two.Vector(x + 2.5 * z, y));
  points.push(new Two.Vector(x, y));

  var alternativeButton = two.makePolygon(points, true);
  alternativeButton.fill = "#333F99";
  alternativeButton.linewidth = 3;

  return alternativeButton;
}

function makeTriangleButton(two) {
  var x = 310,
      y = 360,
      z = 20,
      points = [];

  points.push(new Two.Vector(x, y));
  points.push(new Two.Vector(x + 1.25 * z, y + 2 * z));
  points.push(new Two.Vector(x - 1.25 * z, y + 2 * z));
  points.push(new Two.Vector(x, y));

  var triangleButton = two.makePolygon(points, true);
  triangleButton.fill = "#1FF7EC";
  triangleButton.linewidth = 3;

  return triangleButton;
}

function makeBigCircleButton(two) {
  var x = 310,
      y = 490,
      z = 40;

  var bigCircle = two.makeCircle(x, y, z);
  bigCircle.fill = "#FE256B";
  bigCircle.linewidth = 3;

  return bigCircle;
}

function makeSmallCircleButton(two) {
  var x = 375,
      y = 425,
      z = 30;

  var smallCircle = two.makeCircle(x, y, z);
  smallCircle.fill = "#66B73F";
  smallCircle.linewidth = 3;

  return smallCircle;
}

function animateMouthBottom(two, mouthBottom) {
  two.bind('update', function(frameRate, fps) {
    if(frameRate % 10 == 0) {
      mouthBottom.scale = 1 + Math.random() * 0.1;
    }
  }).play();
}

(function() {
  var element = $('#bmo').get(0),
      params = { width: 450, height: 600 },
      two = new Two(params).appendTo(element),
      body = makeBody(two),
      face = makeFace(two),
      leftEye = makeLeftEye(two),
      rightEye = makeRightEye(two),
      mouthTop = makeMouthTop(two),
      mouthBottom = makeMouthBottom(two),
      drive = makeDrive(two),
      driveEjector = makeDriveEjector(two),
      dpad = makeDpad(two);
      leftPort = makeLeftPort(two),
      alternativeButton = makeRightPort(two),
      triangleButton = makeTriangleButton(two),
      bigCircleButton = makeBigCircleButton(two),
      smallCircleButton = makeSmallCircleButton(two);

  animateMouthBottom(two, mouthBottom);

  two.update();
})();
