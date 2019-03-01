var imgHover = document.getElementById('imgMe');

imgHover.addEventListener('mouseover', function () {
    imgHover.style.opacity = 1;
    imgHover.src = 'media/me.jpg';
});

imgHover.addEventListener('mouseout', function () {
    imgHover.style.opacity = .75;
    imgHover.src = 'media/me.jpg';
});


var text = new Blotter.Text("Alexa Ann Bonomo", {
    family: "'Libre Baskerville', serif",
    size: 27,
    fill: "#171717",
    paddingLeft: 40,
    paddingRight: 40
});

var material = new Blotter.RollingDistortMaterial();

var blotter = new Blotter(material, {
    texts: text
});




var elem = document.getElementById("rollingDistort-text");
var scope = blotter.forText(text);
scope.appendTo(elem);