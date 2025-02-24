window.addEventListener('scroll', function() {
    const scroll = this.window.scrollY;
    const barSuccess = this.document.querySelector('.quality-progress-bar-success');
    console.log(scroll)

    if (scroll >= 1400) {
        barSuccess.classList.add('active');
    } else {
        barSuccess.classList.remove('active'); 
    }
});