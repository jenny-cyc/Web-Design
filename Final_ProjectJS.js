<script>
    document.onkeydown = checkKey;

var currentStyle = 1;
var previousStyle = 2;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '__________') {
       // left arrow
       previousStyle = currentStyle;
       currentStyle--;
       if(currentStyle < 1) {
       	currentStyle = 3;
       }
       _____________(currentStyle, previousStyle);
    }
    else if (e.keyCode == '__________') {
       // right arrow
       previousStyle = currentStyle;
       currentStyle++;
       if(currentStyle > 3) {
       	currentStyle = 1;
       }
       _____________(currentStyle, previousStyle);
    }

}

function _____________(styleNo, prevStyleNo) {

    var oldlink = document.querySelector('link[href="FPstyle'+prevStyleNo+'.css"]');
    if(oldlink) {
    	oldlink.remove();
    }

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "FPstyle"+currentStyle+".css");

    document.getElementsByTagName("head").item(0).appendChild(newlink);
}
    </script>
