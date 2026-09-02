let headingElement = document.getElementById('heading');
console.log(headingElement);

let paragraphElement = document.getElementsByClassName('info');
console.log(paragraphElement); // Array-like object 
[...paragraphElement].forEach(element => {
    console.log(element);
})

const getByTag = document.getElementsByTagName('p');
console.log(getByTag);

// Query Selector

const querySelectorP = document.querySelector('p.info') // querySelector returns the first element that matches the specified CSS selector(s) info is the classname of [p] tag
console.log(querySelectorP); // return the first element with the class 'info'

const querySelectorAllP = document.querySelectorAll('p.info');
console.log(querySelectorAllP);

const querySelectorById = document.querySelector('#heading');
console.log(querySelectorById); // querySelector returns the first element that matches the specified CSS selector(s) heading is the id of [h1] tag

//querySelectorAll still get 2 ids if we write with same id in html but not a valid one

function highlightText() {

    const infoSelector = document.querySelectorAll('p.info');
    infoSelector.forEach(element => {
        // console.log(element.className); we can see all the element properties in console
        element.style.animation = 'slideIn 1s ease-in-out forwards';
        element.style.color = 'blue';
    })
} 

function searchItems() { 
    const searchInput = document.querySelector('#searchInput').value.toLowerCase();
    const optionList = document.querySelectorAll("ul#itemList li");
    optionList.forEach(item => { 
        console.log(document.getElementsByTagName('li')); // returns an HTMLCollection of all <li> elements in the document
       item.style.display = item.innerText.toLowerCase().includes(searchInput) ? 'block' : 'none';

    })
}


const newParagraph = document.createElement('p');
newParagraph.innerText = 'This is a new paragraph created using JavaScript.';
document.body.appendChild(newParagraph); // Append the new paragraph to the body of the document
console.log(newParagraph)

const divId = document.getElementById("text");
const divTextArray =  divId.innerText.split(" ")

const calDuplicateWords = divTextArray.reduce((acc,cur) => {
   acc[cur] = (acc[cur] || 0) + 1
   return acc
},{})
const res =  document.getElementById("displayDuplicateWords")
console.log(res.innerHTML)
if (res) {
    res.innerHTML = ''
    for (const [key,value] of Object.entries(calDuplicateWords)) {
        const p = document.createElement("p")
        p.textContent = `${key}: ${value}`
        res.appendChild(p)
    }
}

// inserting h2 before p
const heading2 =  document.createElement("h2")
heading2.innerText = "Heading 2 created from .js"
const paragraph =  document.querySelector("p.info")
document.body.insertBefore(heading2, paragraph) // inserting before that particular heading2

// inserting h3 after h2
const heading3 = document.createElement("h3");
heading3.innerText = "Heading 3 also created from js"
const heading2Text = document.getElementsByTagName("h2")
document.body.insertBefore(heading3, heading2.nextElementSibling)

// remove li from ul
const list = document.getElementById("ul-list")
console.log(list)
const removeFirstChildreden = list.children[0];
list.removeChild(removeFirstChildreden) // remove 1st child
list.remove() // remove all
// list.replaceChild(<h1>Hi</h1>)

// getAttributes details
const img1 = document.querySelector("img")
console.log(img1.getAttribute('alt'))
// setAttribute -> replace the attribute name 
// removeAttribute -> remove that attribute
// hasAttribute -> it will say whether present or not

const getButtonDetails = document.getElementById("button")
// var counter = 0
// getButtonDetails.onclick = function() {
//     // console.log("Hello clicked")
//     counter++
// console.log(counter)
// const createPElement = document.createElement('p')
// createPElement.innerHTML = `<span>Count:${counter}</span>`

// document.body.insertBefore(createPElement,getButtonDetails)
// }

// getCustomEventBtn.addEventListener("click", handleClick)
const handleClick = () => {
    console.log("110- clicked")
}
getButtonDetails.addEventListener('click',handleClick)
// getButtonDetails.removeEventListener('click', handleClick)
function handleChangeSearch  (e)  {
console.log(e.target) // current targetted event

}
const searchInput = document.getElementById("search");
searchInput.addEventListener('change', handleChangeSearch)

// bubbling phase
const eventBubble = document.getElementById("event-bubble")
eventBubble.addEventListener("click", () => console.log("button clicked child"))

const parentEvent = document.getElementById("parent")
parentEvent.addEventListener("click", () => console.log("parent Event clicked"))

const grandParentEvent = document.getElementById("grandparent")
grandParentEvent.addEventListener("click", () => console.log("grand parent button clicked"))

// capturing phase

const eventBubbleCapture = document.getElementById("event-bubble")
eventBubble.addEventListener("click", () => console.log("button clicked child"),true)

const parentEventCapture = document.getElementById("parent")
parentEvent.addEventListener("click", () => console.log("parent Event clicked"), true)

const grandParentEventCapture = document.getElementById("grandparent")
grandParentEventCapture.addEventListener("click", () => console.log("grand parent button clicked"),true)


// nextSibling - node
// prevSibling - node
// nextElementSibling - Element
// prevElementSibling - Element

function handleClickCustom (userName) {
 const createnewEvent = new CustomEvent('userlogedin',{
    detail:userName
 })
 document.dispatchEvent(createnewEvent)
}
document.addEventListener("userlogedin", (e) => {
    const user = e.detail
    // console.log(user,"user")
    const welcomeText =  document.getElementById("welcome")
    welcomeText.innerText    = `Welcome ${user}`
})







