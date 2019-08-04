
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/coffee.png') {
      myImage.setAttribute ('src','images/liam.png');
    } else {
      myImage.setAttribute ('src','images/coffee.png');
    }
}