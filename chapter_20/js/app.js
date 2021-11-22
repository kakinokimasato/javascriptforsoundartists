"use strict";

console.log(audioContext.currentTime);

var sound = audioBatchLoader({

    kick: "sounds/kick.mp3",
    snare: "sounds/snare.mp3",
    hihat: "sounds/hihat.mp3",
    shaker: "sounds/shaker.mp3"

});


window.addEventListener("mousedown", function() {

    sound.kick.play();
    sound.snare.play(0.1);
    sound.hihat.play(0.5);
    console.log(audioContext.buffer);
});