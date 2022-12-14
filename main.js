/*  Forma 01  */
document.getElementById("text").innerHTML = `
<div id="app">    
    <p id="text-01">Hello World</p>
</div>
`;

/*  Forma 02  */
var paragraph = document.getElementById("app");
var helloWorld = document.createTextNode("Hello World");

paragraph.appendChild(helloWorld);

/*  Forma 03  */
document.write("Hello World");

/*  Forma 04  */
alert("Hello World");

/*  Forma 05  */
console.log("hello world");

/*  Forma 06  */
document.getElementsByTagName('h1')[0].innerHTML = 'Hello world!';

/*  Forma 07  */
document.getElementsByClassName('app')[0].innerHTML = 'Hello world!';

/* Forma 08 */
document.querySelectorAll('p')[1].innerHTML = 'Hello world!';


/* Forma 09 */
window.confirm("Hello, world!");

/* Forma 10 */
window.prompt("Hello, world!");


/* Alterando estilo com Javascript */
document.getElementById("text-01").style.color = "red";