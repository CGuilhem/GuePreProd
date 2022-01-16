window.onload = function () {
    if(window.innerWidth < 768) {
      document.querySelector("#param-header").classList.add('scrolled');
    } else {
      document.querySelector("#param-header").classList.remove('scrolled');
    }
}

window.onresize = function () {
    if(window.innerWidth < 768) {
      document.querySelector("#param-header").classList.add('scrolled');
    } else {
      document.querySelector("#param-header").classList.remove('scrolled');
    }
}