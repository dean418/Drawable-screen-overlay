let colors = document.getElementsByClassName('color');
let sizes = document.getElementsByClassName('size');
let container = document.getElementById('container');
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let containerStyle = getComputedStyle(container);
let mouse = {x: 0, y: 0};

canvas.width = parseInt(containerStyle.getPropertyValue('width'));
canvas.height = parseInt(containerStyle.getPropertyValue('height'));

// line config
context.lineWidth = 3;
context.lineJoin = 'round';
context.lineCap = 'round';
context.strokeStyle = '#000';

// change paint color
for(let color of colors) {
    color.onclick = changeColor;
}

function changeColor() {
    context.strokeStyle = this.getAttribute('data-color');

    for(let color of colors) {
        color.classList.remove('selected');
    }

    this.classList.add('selected');
}

//change size
for(let size of sizes) {
    size.onclick = changeSize;
}

function changeSize() {
    context.lineWidth = parseInt(this.getAttribute('data-size'));

    for(let size of sizes) {
        size.classList.remove('selected-size');
    }

    this.classList.add('selected-size');
}


// event listeners for drawing to the canvas
canvas.addEventListener('mousemove', function(event) {
	mouse.x = event.pageX - this.offsetLeft;
	mouse.y = event.pageY - this.offsetTop;
}, false);

canvas.addEventListener('mousedown', function() {
    context.beginPath();
    context.moveTo(mouse.x, mouse.y);

    canvas.addEventListener('mousemove', onPaint, false);
}, false);

canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);

function onPaint() {
    context.lineTo(mouse.x, mouse.y);
	context.stroke();
};

window.onresize = function() {
	canvas.width = parseInt(containerStyle.getPropertyValue('width'));
	canvas.height = parseInt(containerStyle.getPropertyValue('height'));
}