const nav = document.querySelector('.header-wrap');

    window.addEventListener('scroll', function(){
        nav.classList.toggle('active', this.window.scrollY >0)
    })