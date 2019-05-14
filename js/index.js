// Your code goes here
let anchorTags = document.querySelectorAll('a');
    anchorTags.forEach(anchor => {
        anchor.addEventListener('mouseover', (e) => {
            e.preventDefault();
            // e.stopPropagation();
        TweenMax.to("a", 1, {boxShadow:"0px 0px 20px #17A2B8", padding: "10px"});
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
        btn.addEventListener('mouseenter', (event) => { console.log('fireddddddd')
        event.stopPropagation();
        TweenMax.to(".btn", 1, {scale: 1.2});
    });
    
    btn.addEventListener('mouseleave', () => {
        TweenMax.to(".btn", 1, {scale: 1});
    });
});


let destination = document.querySelector('.destination');
destination.addEventListener('mouseover', (event) => { console.log('firred')
    
});


document.body.addEventListener('copy', (event) => {
    alert(`You just copied ${event.target.innerText}`)
})
