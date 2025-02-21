const iconDivs = document.querySelectorAll(".iconDiv");
const paragraphs = document.querySelectorAll('.questionDiv p');
const questions = document.querySelectorAll('.question')
const questionDiv = document.querySelectorAll('.questionDiv')


questions.forEach(question => question.addEventListener('click', function(){
    this.parentElement.querySelector('.iconDiv').classList.toggle('active')
    this.parentElement.querySelector('p').classList.toggle('active')
}));

iconDivs.forEach(icon => icon.addEventListener('click', function(){
    this.parentElement.querySelector('p').classList.toggle('active')
    this.classList.toggle('active')
}));





document.addEventListener('DOMContentLoaded', function () {
    
    const elements = Array.from(iconDivs).concat(Array.from(questions));

    elements.forEach((element, index) => {
        element.setAttribute('tabindex', '0');
        element.setAttribute('role', 'button');
        element.setAttribute('aria-expanded', 'false');

        element.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
                elements[index].classList.toggle('active');
                
                const paragraph = elements[index].closest('.questionDiv').querySelector('p');
                if (paragraph) {
                    paragraph.style.display = (paragraph.style.display === "none" || paragraph.style.display === '') ? 'block' : 'none';
                }
            }
        });
    });
});






















































/*
const iconDivs = document.querySelectorAll(".iconDiv");
const paragraphs = document.querySelectorAll('.questionDiv p');
const questions = document.querySelectorAll('.question')

iconDivs.forEach((iconDiv, index) => {
    iconDiv.addEventListener('click', () => {
        toggleQuestion(index);
    });
});

questions.forEach((question, index) => {
    question.addEventListener('click', () => {
        toggleQuestion(index);
    });

    question.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            toggleQuestion(index);
        }
    });
});

function toggleQuestion(index) {
    iconDivs[index].classList.toggle('active');
    paragraphs[index].style.display = (paragraphs[index].style.display === "none" || paragraphs[index].style.display === '') ? 'block' : 'none';
}


iconDivs.forEach((iconDiv, index) => {
    iconDiv.addEventListener('click', () => {
        toggleQuestion(index);
    });
});

questions.forEach((question, index) => {
    question.addEventListener('click', () => {
        toggleQuestion(index);
    });

    question.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            toggleQuestion(index);
        }
    });
});

function toggleQuestion(index) {
    iconDivs[index].classList.toggle('active');
    paragraphs[index].style.display = (paragraphs[index].style.display === "none" || paragraphs[index].style.display === '') ? 'block' : 'none';
}



/*const iconDivs = document.querySelectorAll(".iconDiv");
const paragraphs = document.querySelectorAll('.questionDiv p');
const question = document.querySelectorAll('.question')
iconDivs.forEach((iconDivs, index) => {
    iconDivs.addEventListener('click', () => {
        iconDivs.classList.toggle('active');
        paragraphs[index].style.display = (paragraphs[index].style.display === "none" || paragraphs[index].style.display === '') ? 'block' : 'none';  
    });
});

question.forEach((question, index) => {
    question.addEventListener('click', () => {
        iconDivs[index].classList.toggle('active');
        paragraphs[index].style.display = (paragraphs[index].style.display === "none" || paragraphs[index].style.display === '') ? 'block' : 'none';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    
    const elements = Array.from(iconDivs).concat(Array.from(question)); // Fix typo here

    elements.forEach((element, index) => {
        element.setAttribute('tabindex', '0');
        element.setAttribute('role', 'button');
        element.setAttribute('aria-expanded', 'false');

        element.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
                elements[index].classList.toggle('active');
                
                const paragraph = elements[index].closest('.questionDiv').querySelector('p');
                if (paragraph) {
                    paragraph.style.display = (paragraph.style.display === "none" || paragraph.style.display === '') ? 'block' : 'none';
                }
            }
        });
    });
});

*/
