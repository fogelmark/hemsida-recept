const changeMode = document.querySelector('#moon')
let header = document.querySelector('header')
let footer = document.querySelector('footer')
let text = document.querySelector('#recipe')
console.log(text);


changeMode.addEventListener('click', () => {
  header.classList.toggle('light')
  footer.classList.toggle('light')
  
});



let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-6em";
  }
  prevScrollpos = currentScrollPos;
}