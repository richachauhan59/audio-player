var ctx = document.createElement('canvas').getContext('2d');
var linGrad = ctx.createLinearGradient(0, 64, 0, 200);
linGrad.addColorStop(0.5, 'rgba(218, 223, 225, 1)');

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: linGrad,
    backend: 'MediaElement',
    mediaType: 'audio',
    progressColor: 'rgba(211,160,173, 1)',
    cursorWidth: 2,
    barGap: 6,
    cursorColor: 'black',
    normalize: true,
    barWidth: 6,
    barRadius: 3,
    height: 350,
});
wavesurfer.on('loading', function (percents) {
    document.getElementById('progress').value = percents;
});
wavesurfer.on('ready', function (percents) {
    document.getElementById('progress').style.display = 'none';
});
wavesurfer.load(document.querySelector('#song'), [
    0.0218, 0.0183, 0.0165, 0.0198, 0.2137, 0.2888, 0.2313, 0.15, 0.2542, 0.2538, 0.2358, 0.1195, 0.1591, 0.2599, 0.2742, 0.1447, 0.2328, 0.1878, 0.1988, 0.1645, 0.1218, 0.2005, 0.2828, 0.2051, 0.1664, 0.1181, 0.1621, 0.2966, 0.189, 0.246, 0.2445, 0.1621, 0.1618, 0.189, 0.2354, 0.1561, 0.1638, 0.2799, 0.0923, 0.1659, 0.1675, 0.1268, 0.0984, 0.0997, 0.1248, 0.1495, 0.1431, 0.1236, 0.1755, 0.1183, 0.1349, 0.1018, 0.1109, 0.1833, 0.1813, 0.1422, 0.0961, 0.1191, 0.0791, 0.0631, 0.0315, 0.0157, 0.0166, 0.0108
]);

// Drawing Tags on canvas



function tags(x, y, text, color, width, height){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+width, y);
    ctx.quadraticCurveTo(x+width+10, y, x+width+10, y+10);
    ctx.lineTo(x+width+10, y+height);
    ctx.quadraticCurveTo(x+width+10, y+height+10, x+width, y+height+10);
    ctx.lineTo(x, y+height+10);
    ctx.quadraticCurveTo(x-10, y+height+10, x-10, y+height);
    ctx.lineTo(x-10, y+10);
    ctx.quadraticCurveTo(x-10, y, x, y);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x+width/2, y+80);
    ctx.lineTo(x+width/2, 330);
    ctx.strokeStyle = color;
    // ctx.fill();
    ctx.stroke();

    // To draw circle at end
    var circle = new Path2D();
    circle.arc(x+width/2, 330, 10, 0, 2 * Math.PI);
    ctx.fill(circle);
    ctx.stroke();

    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    // ctx.textAlign = "center";
    ctx.fillText(text, x+10, y+45);
    ctx.fillStyle = color;

    ctx.strokeStyle= "black"
}

tags(250, 150, "Introduction", "rgb(84,182,40)", 120, 70 )
tags(350, 50, "one_six", "rgb(80,201,141)", 90, 70)
tags(900, 150, "Rapport Building - Empathy", "rgb(48,92,194)", 260, 70)
tags(1200, 50, "Polite", "rgb(152,109,106)", 80, 70)
tags(1200, 160, "Rapport Build - Energy", "rgb(104,154,65)", 320, 70)




var count=1;
function setColor(btn, color){
    var property = document.getElementById(btn);
    if (count == 0){
        property.style.borderColor = "#FFFFFF"
        count=1;        
    }
    else{
        property.style.borderColor = "#31BDF1"
        count=0;
    }
}