function Success() {
    alert("Your message has been sent successfully!");
  }

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
console.log('loaded')

menu.onclick = () => {
    console.log('clicked')
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}