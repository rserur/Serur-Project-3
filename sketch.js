
var canvas = document.getElementsByTagName('canvas')[0];
var acousticness;
var danceability;
var duration;
var energy;
var key;

function sketch(p) {

    function setup() {
        p.size(300, 300);

        p.rectMode(p.CENTER);

        p.frameRate(10);

        //p.noLoop();
    }

    function draw() {
        p.background(178, 34, 34, 128);
        grid(10);
    }

    function grid(gridSize) {
        var gridW = 25;
        var gridH = 25;

        var tempo = (p.random(40,170)/gridSize);


        for (var row = 0; row < 10; row++) {


        var acousticness = p.random(1);
        var danceability = p.random(1);
        var duration = p.random(1);
        var energy = p.random(1);
        var key = p.random(12);

            for (var col = 0; col < tempo; col++) {
                p.noStroke();
                p.fill(0, 100);
                p.rect(15 + (col * 30), 15 + (row * 30), gridW * acousticness, gridH * danceability);
                p.fill(0, 100);
                p.rect(15 + (col * 30), 15 + (row * 30), gridW * duration, gridH * energy);
            }
        }
    }

    p.setup = setup;
    p.draw = draw;

}

var p = new Processing(canvas, sketch); // actually attach and run the sketch
