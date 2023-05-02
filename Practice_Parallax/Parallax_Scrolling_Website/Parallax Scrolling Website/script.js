let text = document.getElementById('text');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * -.5 + 'px';
    treeLeft.style.left = value * -1.5 + 'px';
    treeRight.style.left = value * 1.5 + 'px';
    gateLeft.style.left = value * 0.5 + 'px';
    gateRight.style.left = value * -0.5 + 'px';
});


// Header minimizer scroll effects
window.addEventListener("scroll", () => {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);

});

// Scroll Animation pop up
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){  // if the entry is scrolled by (intersecting?)
            entry.target.classList.add('show'); // show class will show the sec
        } else {
            entry.target.classList.remove('show')
        }
    });
})

const secElements = document.querySelectorAll('.sec');
secElements.forEach((element) => observer.observe(element)); // Observe() observes all hidden elements

const container = document.querySelectorAll('.container');
container.forEach((element) => observer.observe(element)); 