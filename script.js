let btn = document.getElementById('btnRate');
let output = document.getElementById('output');

btn.addEventListener('click', () => {
    let rates = document.getElementsByName('rate');
    rates.forEach((rate) => {
        if (rate.checked) {
            output.innerText = `Kamu memilih bahasa pemrograman: ${rate.value}`;
        }
    });
});


const nama = document.getElementById("namasaya");
nama.style.color="red";

let logo = document.querySelector('#logo');
logo.style.padding="50px"

// section 3
// get the parent node of an element
const childElement = document.getElementById('child');
const parentElement = childElement.parentNode;
console.log(parentElement); //menampilkan elemen dengan id "parent"

// get children of an element.
const parenttElement = document.getElementById('parentt');
const childElements = parentElement.children;
console.log(childElements);

// get siblings of an element.
const element = document.getElementById('element');
const siblingElements = Array.from(element.parentNode.children)
                          .filter(child => child !== element);

console.log(siblingElements);
// End Section 3

//Section 4
let gantiElem = document.getElementById('p1');
gantiElem.innerHTML = 'Hello, world!';

const myImg = document.getElementById('imgkcg');
myImg.setAttribute('src', 'kucing2.jpg');

const parentreplacechildElement = document.getElementById('parentreplacechild');
const oldElement = document.getElementById('old');
const newElement = document.createElement('div');
newElement.setAttribute('id', 'new');
newElement.textContent = 'Ini adalah inputan Text menggunakan element baru';

parentreplacechildElement.replaceChild(newElement, oldElement);
// End Section  4

// Section 5
let btnTest = document.querySelector('#btnTest');
if (btnTest) {
    btnTest.setAttribute('Bahasa', 'Test');
    btnTest.setAttribute('disabled', '');
}

let link = document.querySelector('#vannesweb');
if (link) {
    let target = link.getAttribute('target');
    console.log(target);
}

let linkytb = document.querySelector('#ytb');
if (linkytb) {
    linkytb.removeAttribute('targetytb');
}
// End Section 5

// Section 6
let p = document.querySelector('#p2');
p.style.color = 'blue';
p.style.fontWeight = 'bold';

let menu = document.querySelector('#imgkcg');
console.log(menu.className);

// Section 7
let btn = document.querySelector('#submity');

btn.onclick = (event) => {
    console.log('clicked');
};

let textBox = document.getElementById('input');
    textBox.addEventListener('keydown', (event) => {
        console.log(`key=${event.key},code=${event.code}`);

});

//Section 8
//contoh 1
const btn = document.querySelector('#btn');        
const radioButtons = document.querySelectorAll('input[name="size"]');
btn.addEventListener("click", () => {
    let selectedSize;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            break;
        }
    }
    // show the output:
    output.innerText = selectedSize ? `You selected ${selectedSize}` : `You haven't selected any size`;
});

//Contoh 2
const cb = document.querySelector('#accept');
console.log(cb.checked);