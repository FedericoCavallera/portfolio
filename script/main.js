let descriptionSection = document.querySelector('.other');
let scrollBtn = document.querySelector('.continue-btn');

let scrollIntoDescription = () => {
    descriptionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
scrollBtn.addEventListener('click', scrollIntoDescription);
