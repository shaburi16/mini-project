var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to(".center-img",{
    top: "143%",
    left: "12%"
}, 'orange')
tl.to("#choco1",{
    top:"155%",
    left: "22%"
}, 'orange')
tl.to("#spall",{
    width: "15%",
    top:"140%",
    right: "10%"
}, 'orange')
tl.to("#m1",{
    top:"110%",
    left: "70%"
}, 'orange')



var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from("#blue-spal",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#blue-cookie",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 'ca')

tl2.from("#yel-spal",{
   
    left: "100%",
    top: "110%"
}, 'ca')
tl2.from("#yel-cookie",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#spal",{
    width:"25%",
    left: "38%",
    top: "245%"
}, 'ca')

tl2.to(".center-img",{
    width:"20%",
    top: "233%",
    left: "39%",
}, 'ca')
