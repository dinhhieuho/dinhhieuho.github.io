
function DrawingOverlay(element, offsetTop) {
    
	this.element = element;
    this.offsetTop = offsetTop;
    this.prevX = null;
    this.prevY = null;

    this.canvas = document.createElement("canvas");
    if (!this.canvas) return;
    
    this.canvas.className = "drawingoverlay";
	this.canvas.id = "drawingoverlay";
    
    this.canvas.height = screen.height;
    this.canvas.width = screen.width;

    this.canvas.style.position = "absolute";
    this.canvas.style.top = offsetTop+"px";
    this.canvas.style.left = "0px";
    
    this.canvas.overlay     = this;
    this.canvas.onmousedown = this.drawMouseDown;
    this.canvas.onmouseup   = this.drawMouseUp;
    this.canvas.onmousemove = this.drawMouseMove;
    this.canvas.clear       = this.clear;
    
    element.appendChild(this.canvas);
}

DrawingOverlay.prototype.clear = function() {
    
    var g = this.getContext("2d");
    g.clearRect(0, 0, this.width, this.height);
};

DrawingOverlay.prototype.setVisible = function(visible) {
    if (visible) {
        this.canvas.style.display = "block";
    } else {
        this.canvas.style.display = "none";
    }
};

DrawingOverlay.prototype.drawMouseDown = function(event) {
    if (!event) event = window.event;
    if (event.button && event.button > 0) {
        this.overlay.clear();
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        return false;
    }

	if (event.layerX || event.layerX == 0) { // firefox
		this.overlay.prevX = event.layerX;
		this.overlay.prevY = event.layerY;
	} else if (event.offsetX || event.offsetX == 0) { // opera, chrome
		this.overlay.prevX = event.offsetX;
		this.overlay.prevY = event.offsetY;
	}
}

DrawingOverlay.prototype.drawMouseUp = function(event) {
    if (!event) event = window.event;
    this.overlay.prevX = null;
    this.overlay.prevY = null;
};

DrawingOverlay.prototype.drawMouseMove = function(event) {
    if (!event) event = window.event;
    if (this.overlay.prevX === null || this.overlay.prevY === null) return;

    if (!this.getContext) return;

	if (event.layerX || event.layerX == 0) { // firefox
		var x = event.layerX;
		var y = event.layerY;
	} else if (event.offsetX || event.offsetX == 0) { // opera, chrome
		var x = event.offsetX;
		var y = event.offsetY;
	}

	var color = document.getElementById("drawColor").value;
	//alert(color);
	if (!color) {
		color = "#000000"
	}

    var g = this.getContext("2d");
    g.lineWidth = 3;
    g.fillStyle =   color;
    g.strokeStyle = color;
    
    g.beginPath();
    g.moveTo(this.overlay.prevX, this.overlay.prevY);
    g.lineTo(x, y);
    g.stroke();
    
    this.overlay.prevX = x;
    this.overlay.prevY = y;
};
var DRAWING = true;

function startup() {
    
    if (DRAWING) {
        
		var offsetTop = 25;
		
        if (typeof(DrawingOverlay) !== "undefined") {
            new DrawingOverlay(document.getElementById("container"), offsetTop);
        }
       
        var drawing = document.createElement("div");
        drawing.style.position = "absolute";
        drawing.style.top = "0px";
        drawing.style.right = "0px";
        drawing.style.fontSize = "10px";

        var enableText = document.createTextNode("Drawing:");
        drawing.appendChild(enableText);

        var toggleOverlay = document.createElement("input");
        toggleOverlay.setAttribute("id", "toggleOverlay")
        toggleOverlay.setAttribute("type", "checkbox");
        toggleOverlay.setAttribute("title", "Drawing");
        toggleOverlay.onclick = function() {
            if (toggleOverlay.checked) {
                var canvi = document.getElementsByTagName("canvas");
                for (var i = 0; i < canvi.length; i++) {
                    canvi[i].style.display = "block";
                }
            } else {
                var canvi = document.getElementsByTagName("canvas");
                for (var i = 0; i < canvi.length; i++) {
                    canvi[i].style.display = "none";
                }
            }
        }
        drawing.appendChild(toggleOverlay);
        
        
        var clearBtn = document.createElement("button");
        clearBtn.onclick = function() {
            var draw = document.getElementById("drawingoverlay");
            draw.clear();
            
        }
        clearBtn.appendChild(document.createTextNode("Clear"));
        drawing.appendChild(clearBtn);

        var colorPicker = document.createElement("input");
        colorPicker.setAttribute("id", "drawColor");
        colorPicker.setAttribute("type", "color");
        colorPicker.setAttribute("value", "#000000");
        drawing.appendChild(colorPicker);

        document.getElementById("header").appendChild(drawing);
        toggleOverlay.onclick(); 
    }
}

window.onload = startup;

window.onresize = function() {
     setTimeout(fontScale, 100);
}