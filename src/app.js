

 import 'babel-polyfill';
 import server from './cats';
 import $ from 'jquery';
let button = window.document.getElementById("myB");
button.addEventListener("click",changeLocation );
if()


alert(window.location.toString()==="file:///home/user/IdeaProjects/simple/index.html#disp")
/*
 for (const cat of cats) {
     $('<li></li>').text(cat).appendTo(ul);
 }
*/
function changeLocation() {
    window.location.href="file:///home/user/IdeaProjects/simple/index.html#disp";
    server.doHello();
}

