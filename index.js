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

const newParagraph = document.createElement('p');
newParagraph.innerText = 'This is a new paragraph created using JavaScript.';
document.body.appendChild(newParagraph); // Append the new paragraph to the body of the document
console.log(newParagraph)

const divId = document.getElementById("text");
const divTextArray = divId.innerText.split(" ")

const calDuplicateWords = divTextArray.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1
    return acc
}, {})
const res = document.getElementById("displayDuplicateWords")
console.log(res.innerHTML)
if (res) {
    res.innerHTML = ''
    for (const [key, value] of Object.entries(calDuplicateWords)) {
        const p = document.createElement("p")
        p.textContent = `${key}: ${value}`
        res.appendChild(p)
    }
}

// inserting h2 before p
const heading2 = document.createElement("h2")
heading2.innerText = "Heading 2 created from .js"
const paragraph = document.querySelector("p.info")
document.body.insertBefore(heading2, paragraph) // inserting before that particular heading2

// inserting h3 after h2
const heading3 = document.createElement("h3");
heading3.innerText = "Heading 3 also created from js"
const heading2Text = document.getElementsByTagName("h2")
document.body.insertBefore(heading3, heading2.nextElementSibling)

// remove li from ul
const array = ['Revanth', 'Madhan', 'Pydisetti']
const list = document.getElementById("ul-list")
array.forEach((item) => {
    const li = document.createElement("li")
    li.innerText = item
    list.appendChild(li)
})

// const removeFirstChildreden = list.children[0];
// list.removeChild(removeFirstChildreden) // remove 1st child
// list.remove() // remove all
// list.replaceChild(<h1>Hi</h1>)

// getAttributes details
// const img1 = document.querySelector("img")
const img1 = document.querySelector("img")
img1.getAttribute('alt')
img1.setAttribute('height','200px')
img1.setAttribute('width','300px')
const newOne = img1.setAttribute('alt','profileImg')
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
const callFun = () => {
    console.log("function called")
}
getButtonDetails.addEventListener('click', handleClick)
getButtonDetails.addEventListener('click',callFun)
getButtonDetails.removeEventListener('click', handleClick)
function handleChangeSearch(e) {
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
eventBubble.addEventListener("click", () => console.log("button clicked child"), true)

const parentEventCapture = document.getElementById("parent")
parentEvent.addEventListener("click", () => console.log("parent Event clicked"), true)

const grandParentEventCapture = document.getElementById("grandparent")
grandParentEventCapture.addEventListener("click", () => console.log("grand parent button clicked"), true)


// nextSibling - node
// prevSibling - node
// nextElementSibling - Element
// prevElementSibling - Element

function handleClickCustom(userName) {
    const createnewEvent = new CustomEvent('userlogedin', {
        detail: userName
    })
    document.dispatchEvent(createnewEvent)
}
document.addEventListener("userlogedin", (e) => {
    const user = e.detail
    // console.log(user,"user")
    const welcomeText = document.getElementById("welcome")
    welcomeText.innerText = `Welcome ${user}`
})

const nameValue = document.getElementById("name")
const emailValue = document.getElementById("email")
const pwd = document.getElementById("password")
function textChange() {
    if (nameValue.value.length > 0 && nameValue.value.length < 8) {
        // const s = document.getElementById("nameError");
        // s.textContent = "Name validation failed"
        // s.style.color = "red"
        return true
    } else if (nameValue.value.length === 0) {
        // isError = true
        // const s = document.getElementById("nameError");
        // s.textContent = 'It should not be empty'
        // s.style.color = 'red'
        return true
    } else if (nameValue.value.length >= 8) {
        // isError = false
        // const s = document.getElementById("nameError");
        // s.textContent = ''
        // s.style.color = ''
        return false
    }
}

function emailChange() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const s = document.getElementById("emailError")
    if (!emailRegex.test(emailValue.value)) {
        // s.textContent = "Email Validation failed"
        // s.style.color = "red"
        return true
    } else if (emailRegex.test(emailValue.value)) {
        // s.textContent = "Password Validation failed"
        // s.style.color = "red"
        return false
    } else if (emailRegex.test(emailValue.value)) {
        // s.textContent = ""
        return false
    }

}

function passwordChange() {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const pwdErrorMsg = document.getElementById("passwordError");
    if (pwd.value.length === 0) {
        // pwdErrorMsg.textContent = "empty value not allowed"
        // pwdErrorMsg.style.color = "red"
        return true
    }
    else if (!passwordRegex.test(pwd.value)) {
        // pwdErrorMsg.textContent = "Password Validation failed"
        // pwdErrorMsg.style.color = "red"
        return true
    } else {
        pwdErrorMsg.textContent = ""
        return false
    }
}

function formSubmit(event) {
    event.preventDefault();
    console.log("formSubmitted")
    const isInputValid = textChange();
    const isEmailValid = emailChange();
    const isPasswordvalid = passwordChange();
    console.log(inputValidation, emailValidation, passwordvalidation, "-----")
    const formErrors = document.getElementById("formErrors")

    if (isInputValid || isEmailValid || isPasswordvalid) {
        formErrors.innerText = "Form Validation failed"
        formErrors.style.color = "red"
    } else {
        formErrors.innerText = "Form submitted successfully"
        formErrors.style.color = "green"
    }
}

function validatePassword(arg) {
    const isValid = false;
    const capitalLetterRegex = /[A-Z]/
    const smallLetterRegex = /[a-z]/
    const numberRegex = /[0-9]/
    const validateSpecialCha = /[^A-Za-z0-9\s]/
    if (arg.length) {
        if (capitalLetterRegex.test(arg) && smallLetterRegex.test(arg) && numberRegex.test(arg) && validateSpecialCha.test(arg)) {
            return false
        } else {
            return true
        }
    }
}

if (validatePassword("Hello1!")) {
    console.log("Validation failed")
} else {
    console.log("Everything looks good")
}

let displayUserList = []
function userListChange() {
    const userName = document.getElementById("userList")

    if (!userName.value) {
        return
    }
    if (displayUserList.includes(userName.value)) {
        const eU = document.querySelector('#existinguser')
        eU.innerText = `User exists!! ${userName.value}`
        eU.style.color = "red"
        userName.value = ''
        return
    }
    displayUserList.push(userName.value)

    const createP = document.createElement('p');
    createP.innerText = userName.value

    document.body.insertBefore(createP, userName)

    userName.value = ''
    console.log(displayUserList, "displayUserLisr")


}

// getInput by query selector
function fruitChange() {
    const fruitSearch = document.querySelector('input[name="fruit"]').value.toLowerCase()
    const fruitsList = document.querySelectorAll("#fruits_list li")
    fruitsList.forEach((item) => {
        console.log(item.innerText.toLowerCase())
        item.style.display = item.innerText.toLowerCase().includes(fruitSearch) ? 'block' : 'none'
    })    
}
// document.body.insertBefore(newSpan, p.nextElementSibling) it will add after p. next element sibling

let parentElem = document.getElementById("parentElem");
// parentElem.children[0].replaceChildren(document.createElement('span').innerText = "Replaced")

let textDom = document.getElementById("text_dom");
console.log(textDom.parentElement,"<-Parent element")
console.log(textDom.parentNode,"<-parentNide")

console.log(textDom.children,"<-Child element")
console.log(textDom.childNodes,"<-child nodes") // return text node

let mainId = document.getElementById("main-id")
let c = mainId.children
Array.from(c).forEach(element => {
 Array.from(element.children).forEach(ele => {
    console.log(ele.innerText,"----")
 })
})

let h1 = document.getElementById("somethingh1");
console.log(h1.nextSibling) // node text /n next line
console.log(h1.nextElementSibling) // next element  h2

console.log(h1.previousSibling) // it will give previous sibling
console.log(h1.parentElement) // it will give parent elemnt from current spot
console.log(h1.previousElementSibling) // get previous element sibling if available otherwise null


// textDom.firstChild gives us -> first node
// textDom.firstElementChild gives us -> first element node
// textDom.nextSibling -> next node
// textDom.nextElementSibling -> next element node
   const divEdit = document.getElementById("editexample")
function editThis() {
 
    const pelem = document.getElementById("editthis");
    console.log(pelem.innerText)
    pelem.classList.toggle('hide')
    divEdit.classList.toggle('show')

    const createinput = document.createElement("input")
    createinput.setAttribute('name','dummy')
    createinput.setAttribute('id',"dummyId")
    divEdit.append(createinput)
    
}

const getAlllilists = document.getElementById("ul-lists");
getAlllilists.addEventListener('click', (event) => {
    if (event.target.nodeName === "LI") {
        const spanElement = document.createElement("li")
        spanElement.innerText = event.target.innerText
        getAlllilists.appendChild(spanElement)
    }
})






