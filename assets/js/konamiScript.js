
var konami_code = "38384040373937396665";
var keylog = "";
window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;

    keylog += key.toString();

    var lastTwenty = keylog.substr(keylog.length - 20);
    console.log(lastTwenty);
    if(lastTwenty == konami_code)
    {
      document.body.style.backgroundColor="red";
      window.setInterval(changeColor(), 100);
    }
};

function changeColor() {
    if(document.body.style.backgroundColor=="red" || document.body.style.backgroundColor=="green")
        document.body.style.backgroundColor="blue";
    else
        document.body.style.backgroundColor="green";
}
