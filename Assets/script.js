let i = 0;
let j = 0;
let txt = ['web development','graphic design','3D animation','videography','photography'];
let speed = 80;
let heading = document.querySelector('#typewriterText');

function typeWriter() {
    if (i < txt[j].length) {
        heading.innerHTML += txt[j].charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        (j < txt.length - 1) ? j++ : j = 0;
        setTimeout(eraseText, 1200);
    }
}

function eraseText() {
    if (i > 0 ) {
        heading.innerHTML = heading.innerHTML.slice(0, -1);
        i = heading.innerHTML.length;
        setTimeout(eraseText, 30);
    } else {
        typeWriter();
    }
}
setTimeout(typeWriter, 1000);