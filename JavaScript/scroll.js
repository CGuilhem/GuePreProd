window.onscroll = function () {
    if(window.innerWidth >= 768) {
      if(document.documentElement.scrollTop > 10) {
        document.querySelector("#param-header").classList.add('scrolled');
      } else {
        document.querySelector("#param-header").classList.remove('scrolled');
      }
    }
}