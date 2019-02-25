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

material.uniforms.uSineDistortSpread.value = 0.5;
material.uniforms.uSineDistortSpread.type = 1f;
material.uniforms.uSineDistortAmplitude.value = 0.01;
material.uniforms.uSineDistortAmplitude.type = 1f
material.uniforms.uNoiseDistortVolatility.value = 20;
material.uniforms.uNoiseDistortVolatility.type = 1f;
material.uniforms.uNoiseDistortAmplitude.value = 0.01;
material.uniforms.uNoiseDistortAmplitude.type = 1f;
material.uniforms.uDistortPosition.value = 0.5;
material.uniforms.uDistortPosition.type = 2f;
material.uniforms.uRotation.value = 170;
material.uniforms.uRotation.type = 1f;
material.uniforms.uSpeed.value = 0.08
material.uniforms.uSpeed.type = 1f;




var elem = document.getElementById("rollingDistort-text");
var scope = blotter.forText(text);
scope.appendTo(elem);