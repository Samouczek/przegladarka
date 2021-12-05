const btn = document.querySelector('#btn');
const element = document.querySelector('#result');

const randomNumbers = () => {
    const array = [];
    for (let i = 0; i < 20; i++){
        array.push(Math.floor(Math.random() * (100-1))+1);
    }
    return array;
}

function compareNumbers(a,b) {
    return a-b;
}

const eventNumbers = (array) => {
    const tab = array.filter(item =>  (item % 2) === 0);
    return tab.sort(compareNumbers);
}

const oddNumbers = (array) => {
    const tab = array.filter(item => (item % 2) !== 0);
    return tab.sort(compareNumbers);
}

function createTable(numbers, titleText, name) {
    if (document.querySelector(`.${name}`)){
        document.querySelector(`.${name}`).remove();
    }
    if (numbers.length > 0) {
        const table = document.createElement("table");
        element.appendChild(table).classList.add(name);
        const head = document.createElement("thead");
        table.appendChild(head);
        const body = document.createElement("tbody");
        table.appendChild(body);
        const rowHead = document.createElement("tr");
        head.appendChild(rowHead).classList.add('head_row');
        const title = document.createElement("th");
        title.innerText = titleText;
        head.appendChild(title);
        numbers.forEach((item) => {
            const row = document.createElement("tr");
            body.appendChild(row);
            const data = document.createElement("td");
            data.innerText = item;
            row.appendChild(data);
        })
    }
}

const showRandomNumbers = (event) => {
    event.preventDefault();
    const numbers = randomNumbers();
    const eventNum = eventNumbers(numbers);
    const oddNum = oddNumbers(numbers);
    createTable(eventNum, 'Liczby parzyste','event');
    createTable(oddNum, 'Liczby nieparzyste','odd');
}

btn.addEventListener('click', showRandomNumbers)
