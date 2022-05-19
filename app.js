const shareBtn = document.querySelector('.sharebtn');
const shareCta = document.querySelector('.share-cta');
const clientInfo = document.querySelector('.client-info');

shareBtn.addEventListener('click', () => {
    const x = window.matchMedia("min-width: 800px")

    shareCta.style.display = "flex";
    if(x.matches) {
        clientInfo.style.display = "none";
    } else {
        clientInfo.style.display = "flex";
    }
   
})
