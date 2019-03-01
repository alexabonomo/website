var imgHover = document.getElementById('imgMe');

imgHover.addEventListener('mouseover', function () {
    imgHover.style.opacity = 1;
    imgHover.src = 'media/me.jpg';
});

imgHover.addEventListener('mouseout', function () {
    imgHover.style.opacity = .75;
    imgHover.src = 'media/me.jpg';
});