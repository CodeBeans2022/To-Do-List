let item = document.querySelector('#item');
let output = document.querySelector('#output');

let list = [];

function addItem() {
    list.push({
        id: '',
        name: item.value,
        createdDate: '',
        completed: ''
    })

    for(let i = 0; i < 0; i++) {
        
    }
    
    console.log(list);

    list.forEach((item) => {
        output.innerHTML += `
        <div class="listItem">
        <input type="checkbox">
        <h2 class="itemHeading">${item.name}</h2>
        <button id="delete">X</button>
        </div>
        `
    })
    
}

function sortItems() {

}