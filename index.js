/* Enter the code to remove the main node element under this comment */
let myMain = document.querySelector('#main')
myMain.remove()

/* Create your new element here and assign it to newHeader */
let newHeader = document.createElement('h1')
// <h1></h1>
newHeader.id = "victory"
// <h1 style="background-color: red">
// <h1 id="victory"></h1>
newHeader.innerText = "Nathan is the champion!"
// <h1 id="victory">Nathan is the champion</h1>
document.body.appendChild(newHeader)
// <body>
// <h1 id="victory">Nathan is the champion</h1>
// </body>