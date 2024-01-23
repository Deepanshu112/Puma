var t1 = gsap.timeline();

gsap.set(".a", {opacity:0, y:10})
gsap.set(".b", {opacity:0, y:10, scale : 1.8})

t1.from("#left", {
    width : 0,
    duration : 2,
    ease : Expo.easeInOut
})

t1.from("#right", {
    width : 0,
    duration : 2,
    ease : Expo.easeInOut
})
t1.to(".a", {
    delay : -1.5,
    stagger : .2,
    opacity:1,
    y : 0,
    duration : 2,
    ease : Expo.easeInOut
})
t1.to(".b", {
    delay:-1.8,
    scale : 1,
    opacity:1,
    y : 0,
    duration : 2,
    ease : Expo.easeInOut
})