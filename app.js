const words = ["Vikas Anand.", "a Web Developer.", "an IITian.", "an Engineer." ];

let cursor = gsap.to('.cursor',{opacity: 0, ease: "power2.inOut", repeat: -1})

// let boTl = gsap.timeline();

// boTl.to('.box', {duration: 1, width: "17vw", delay: 0.5, ease:"power4.inOut"})
//     .from('.hi',{duration: 1, y: "7vw", ease: "power3.inOut"})
//     .to('.box', {duration: 1, height: "7vw", ease: "elastic.out"})

let masterTl = gsap.timeline({repeat: -1});

words.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 0.5})
    tl.to('.text',{duration: 2, text: word})
    masterTl.add(tl)
})