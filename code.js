let itemInput = document.querySelector('#item');
let output = document.querySelector('#output');
let id = 1;
let list = [];
let addItemBtn = document.querySelector('#addItem');

addItemBtn.addEventListener('click', (e) => {
    event.preventDefault();
    list.push({
        id: '',
        name: itemInput.value,
        createdDate: new Date(),
        completed: false
    });
    id++;
    output.innerHTML = '';
    itemInput.value = '';
    render();
})

// function addItem() {
    // console.log(list);
    // console.log(list[0].createdDate);
// }

function sortItems() {
    
}

function deleteBtn() {
    let deleteBtns = [...document.querySelectorAll('#delete')];
    deleteBtns.forEach((item) => {
        item.addEventListener('click', (e) => {
            list.splice((parseInt(deleteBtns.indexOf(item))), 1);
            console.log(list);
        })
    })
}


function render() {
    
    output.innerHTML = '';

    list.forEach((item) => {
        output.innerHTML += `
        <div class="listItem">
        <input type="checkbox">
        <h2 class="itemHeading">${item.name}</h2>
        <button id="delete" onclick="deleteBtn()">X</button>
        </div>
        `
    })
}


// String Methods

// let names = ["Jason", "John", "James"];

// for(let i = 0; i < names.length; i++ ) {
//     if(names[i] == "Jason") {
//         console.log(`Found at position ${i}`);
//     }
// }

// console.log(names.filter (name => {
//     return name.charAt(1) == "a"
// }));

// console.log(names[0].charAt(2));

// let data = [3, "Beans", 7];

// let addition = data.filter(d => {
//     return Number.isInteger(d)
// }).reduce((a,b) => {return a+b})
// console.log(addition);