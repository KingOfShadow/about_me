window.addEventListener('load', contentLoaded);

function contentLoaded() {
  var textSpan = document.getElementById('text');
  typeWrite(textSpan);
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function typeWrite(elem){
  var text = elem.textContent;
  elem.textContent = '';
  var randInt = 0
  for (var i = 0; i < text.length; i++) {
    randInt += parseInt(randomIntFromInterval(40,300));
    var typing = setTimeout(function(y){
      elem.textContent += text.charAt(y);
    }, randInt, i);
  };
}

