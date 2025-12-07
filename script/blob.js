let blob = document.querySelector('.blob-complex');
let blobText = document.querySelectorAll('.text');

document.addEventListener('DOMContentLoaded', () => {
    blob.classList.add('anim-fall');
    setTimeout(() => {
        blobText.forEach(element => {
            element.classList.add('show-text');
        })
        setTimeout(() => {
            scrollBtn.classList.add('anim-bounce');
        }, 300)
    }, 300)
    setTimeout(() => {
        blob.classList.remove('anim');
        blob.classList.add('anim-blob');
    }, 800);
})