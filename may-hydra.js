/* global Hydra osc shape */

// create canvases
const canvas = document.createElement("CANVAS");

// function to initialize hydra
// feel free to edit the size or move them into arguments
const initHydra = ({makeGlobal, canvas}) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const hydra = new Hydra({
    canvas: canvas,
    detectAudio: false,
    enableStreamCapture: false,
    makeGlobal,
    autoLoop: false, // important!!
  });
  document.querySelector("#app").appendChild(canvas);
  return hydra;
}

// instantiate hydra
const hydra = initHydra({canvas: canvas, makeGlobal: true});

// synchronize hydra updates
// if you go for autoLoop: true, hydra instances will be out of sync
let start, previousTimeStamp;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
    previousTimeStamp = timestamp;
  }
  const dt = timestamp - previousTimeStamp;
  
  hydra.tick(dt);

  previousTimeStamp = timestamp
  window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);

// as you like...

// MAY 1 approx
// noise(20).modulate(noise().kaleid(8)).out(o0)
// render(o0)

// MAY 2
// osc(10,0.15,2).kaleid(6).out(o1)
// shape(4,0.8).repeat(12,12).modulate(o1).out(o2)
// src(o2).diff(o1).out(o3)
// render(o3)

// MAY 3
// noise(2,0.8).color(1.2,0,-0.3).hue(() => (time%360)/4).kaleid(10).rotate(()=>(time%360)/2).out(o0)
// noise(5,0.3).out(o1)
// src(o0).modulate(o1).out(o2)
// render(o2)

// MAY 4
// noise(20).color(1,0,1).colorama().out(o0)
// osc(10,0.1,2).out(o1)
// src(o1).diff(o0).kaleid(8).modulateScale(o3).out(o2)
// osc(20).kaleid(8).out(o3)
// render(o2)

// MAY 5
// osc(12).color(0,1,1).rotate(0.785).out(o0)
// shape(4,0.85).repeat(12,12).out(o1)
// src(o1).modulate(o0).modulate(o3).color(-1,-1,-1).out(o2)
// osc(15).color(0.5,-0.5,0).out(o3)
// render(o2)

// MAY 6
// osc().modulate(noise()).out(o0)
// osc(5,0.2,0.5).out(o1)
// src(o0).diff(o1).out(o2)
// render(o2)

// MAY 7
// osc(15,-0.1,1).modulate(gradient().blend(noise(10))).kaleid(10).luma(0.2,0.7).saturate(2).out(o0)
// render(o0)

// MAY 8
// osc(5,-0.4,1.5).saturate(0.3).diff(src(o1)).out(o0)
// noise(6,0.6,0.2).kaleid(7).luma(0.2,0.5).modulate(src(o0)).rotate(1.57).out(o1)
// render(o0)

// MAY 9
// osc(10,0.15,1).modulateKaleid(src(o1),7).modulate(noise(5)).hue(0.5).out(o0)
// noise().rotate(()=>(time/8)).out(o1)
// render(o0)

// MAY 10
// osc(10,0.1,1.3).rotate(1.57).modulateKaleid(src(o1),4).luma().out(o0)
// osc().out(o1)
// render(o0)

// MAY 11
// noise(15).modulate(noise().kaleid(8)).out(o0)
// shape(4,0.9).color(-1,-1,-1).rotate(0.72).repeat(10,10).modulate(src(o0)).out(o1)
// render(o1)

// MAY 12
// voronoi(5).rotate(() => (time/5)).modulate(osc(30,-0.1).kaleid(20)).color(1,-1).hue(0.8).out(o0)
// osc(10,-0.1,0.8).hue(0).kaleid(20).modulate(src(o0)).diff(src(o0)).out(o1)
// render(o1)

// MAY 13
// s0.initVideo("https://i.imgur.com/ivCWWhY.mp4")
// src(o0).layer(src(s0).mask(src(s0).invert().thresh()).colorama(0.2).hue(() => (time/5))).out(o0)
// render(o0)

// MAY 14
// s0.initCam()
// src(o0).modulate(noise(),0.003)
//   .layer(osc(10,0.2,1.5).modulate(src(s0).sub(gradient()),1)
//     .mask(src(s0).invert().thresh())).out(o0)
// render(o0)

// MAY 15
// s0.initVideo("https://i.imgur.com/1ofTLN9.mp4")
// src(s0).thresh().colorama(0.3).hue(() => (time/5)).out(o0)
// osc(10,0.2,2).modulate(src(s0).sub(gradient()),1).mask(src(s0).thresh().invert().thresh()).out(o1)
// render(o1)

// MAY 16
// s0.initImage("https://i.imgur.com/d5ZwUuH.jpeg")
// osc(10,0.2,1.2).modulate(src(s0).sub(gradient()),1).mask(src(s0).thresh().invert().thresh()).out(o0)
// osc(20,0.1,1.5).hue(0.5).modulate(src(s0).invert().sub(gradient()),1).mask(src(s0).thresh()).add(src(o0)).out(o1)
// render(o1)

// MAY 17
// s0.initImage("https://i.imgur.com/oXLV31a.jpeg")
// s0.initVideo("https://i.imgur.com/jQ4rGeU.mp4")
// osc(10,0.2,1.2).modulate(src(s0).sub(gradient()),1).mask(src(s0).thresh().invert().thresh()).out(o0)
// osc(10,0.1,1.5).hue(0.5).modulate(src(s0).invert().sub(gradient()),1.5).mask(src(s0).thresh(0.4)).out(o1)
// render(o1)

// MAY 18
// s0.initImage("https://i.imgur.com/sjEkmBZ.jpg")
// osc(20,0.1,1.0).hue(0.5).modulate(src(s0).invert().sub(gradient()),1).mask(src(s0).thresh()).out(o0)
// render(o0)

// MAY 19
// s0.initImage("https://i.imgur.com/zxUKgfb.jpg")
// osc(20,0.1,1.1).hue(0.5).modulate(src(s0).invert().sub(gradient()),1).mask(src(s0).thresh()).out(o0)
// render(o0)

// MAY 20
// osc(10,0.1,1.5).rotate(1.57).modulate(noise()).colorama(0.2).thresh(0.5).out(o0)
// render(o0)

// MAY 21
// s0.initImage("https://i.imgur.com/TggGt93.jpg")
// osc(15,0.05,1.5).hue(0.5).modulate(src(s0).invert().sub(gradient()),1).mask(src(s0).thresh(0.3)).out(o0)
// render(o0)

// MAY 22
// shape(20).repeat(3,3).invert().scroll(() => (Math.sin(time)), () => (-time/8)).out(o0)
// src(o1).layer(src(o0).mask(src(o0).invert().thresh()).colorama(0.5).hue(() => (time/4))).out(o1)
// render(o1)

// MAY 23
// s0.initVideo("https://i.imgur.com/m9OFe00.mp4")
// src(o0).modulate(noise(),0.003)
//   .layer(osc(10,0.2,1.5).modulate(src(s0).sub(gradient()),1)
//     .mask(src(s0).invert().thresh())).out(o0)
// render(o0)

// MAY 24
// s0.initVideo("https://i.imgur.com/FAB5NZM.mp4")
// osc(15,0.05,1.5).hue(0.5).modulate(src(s0).invert().sub(gradient()),1).mask(src(s0).thresh()).out(o0)
// render(o0)

// MAY 25
// s0.initImage("https://i.imgur.com/qfQTr78.png")
// osc(20,-0.1,1.5).hue(0.5).modulate(src(s0).invert().sub(gradient()),1).mask(src(s0).thresh(0.6)).out(o0)
// noise(10).modulate(noise().kaleid(8)).mask(src(s0).thresh(0.1).invert().thresh()).color(0.5,0.82,0.17).out(o1)
// src(o1).add(src(o0)).out(o2)
// render(o2)

// MAY 26
// s0.initImage("https://i.imgur.com/nBLuHhB.jpg")
// osc(20,-0.15,1.2).hue(0.9).diff(osc(10,-0.15,0.1).hue(0.5)).modulate(src(s0).invert().sub(gradient()),1).mask(src(s0).thresh(0.3)).out(o0)
// render(o0)

// MAY 27
// s0.initImage("https://i.imgur.com/cgqE4F1.jpg")
// osc(20,-0.15,0.9).hue(0.6).saturate(2).modulate(src(s0).invert().sub(gradient()),1).mask(src(s0).thresh(0.3)).out(o0)
// render(o0)

// MAY 28
// shape(20,0.9).repeat(3,3).modulate(osc(50,0.05)).modulate(osc(50).rotate(1.57)).rotate(1.57).out(o0)
// gradient(0).invert().sub(src(o0)).out(o1)
// gradient(0).invert().rotate(3.14).sub(src(o0).invert()).out(o2)
// src(o1).add(src(o2)).out(o3)
// render(o3)

// MAY 29
// s0.initImage("https://i.imgur.com/KGu2MXf.jpg")
// shape(1,1).mult(voronoi(1000,2).blend(o2).luma()).out(o0)
// src(s0).thresh(0.05).mult(voronoi(100,2).luma()).out(o1)
// src(o0).add(src(o1)).scrollX(0.005,0).scrollY(0.005,0).out(o2)
// osc(5,0.1,1.5).rotate(0.7).mult(src(o2)).out(o3)
// render(o3)

// MAY 30
osc(10,0.2,1)
  .modulateScale(osc(40,0,1).kaleid(8))
  .repeat(3,4)
  .modulate(o0,0.05)
  .modulateKaleid(shape(4,0.1,1))
  .out(o0)

// OTHER STUFF
// osc(10,0.1,1.5).modulate(noise()).colorama(0.2).thresh(0.5).out(o0)
// osc(10,0.1,1.5).modulate(src(o0).mask(src(o0)).invert().thresh()).kaleid().out(o1)

// WTF
// src(o0)
//  .saturate(1.01)
//  .scale(.999)
//  .color(1.01,1.01,1.01)
//  .hue(.01)
//  .modulateHue(src(o1).hue(.3).posterize(-1).contrast(.7),2)
//   .layer(src(o1)
//          .luma()
//          .mult(gradient(1)
//                .saturate(.9)))
//   .out(o0)

// noise(1, .2)
//   .rotate(2,.5)
//   .layer(src(o0)
//   .scrollX(.2))
//   .out(o1)

// render(o0)
