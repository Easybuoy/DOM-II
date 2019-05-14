// Your code goes here
let anchorTags = document.querySelectorAll('a');
    anchorTags.forEach(anchor => {
        anchor.addEventListener('mouseover', (e) => {
            e.preventDefault();
        TweenMax.to("a", 1, {boxShadow:"0px 0px 20px #17A2B8", padding: "10px"});
    })

    anchor.addEventListener('mouseout', (e) => {
        e.preventDefault();
    TweenMax.to("a", 1, {boxShadow: "none", padding: "0px"});
})
});



window.addEventListener('load', () => {
    TweenMax.from('.logo-heading', 2, { scale: 0, ease: Bounce.easeOut })
    TweenMax.to(".logo-heading", 1, {boxShadow:"0px 0px 20px #17A2B8", padding: "10px"});
});

window.addEventListener('click', (event) => { 
    TweenMax.to(event.target.localName, 2, {  opacity: 0 });
});

window.addEventListener('dblclick', (event) => {
    TweenMax.to(event.target.localName, 3, { ease: Back.easeOut,  opacity: 1 });
});

let btns = document.querySelectorAll('.btn');
    btns.forEach((btn) => {
        btn.addEventListener('mouseenter', (event) => {
        TweenMax.to(".btn", 1, {scale: 1.2});
    });
    
    btn.addEventListener('mouseleave', () => {
        TweenMax.to(".btn", 1, {scale: 1});
    });
});


document.body.addEventListener('copy', (event) => {
    alert(`You just copied ${event.target.innerText}`)
})

document.addEventListener('scroll', () => {
    let destinations = document.querySelectorAll('.destination');
        TweenMax.from('.destination', 0, { rotation:0, yoyo:true, repeat:0, ease:Linear.easeNone } );
        TweenMax.to('.destination', 2, { rotation:360, yoyo:true, repeat:0, ease:Linear.easeNone } );
})

window.addEventListener('beforeprint', () => {
    return alert('You are about to print.')
})

window.addEventListener('afterpring', () => {
    return alert('You just printed the document.')
})

//Propagation
let nav = document.querySelector('.nav-container');
nav.addEventListener('click', (event) => { 
    console.log('fireddddddd')
    });

let navLogo = document.querySelector('.logo-heading');
navLogo.addEventListener('click', (event) => { 
    console.log('fired')
        event.stopPropagation();
    });

