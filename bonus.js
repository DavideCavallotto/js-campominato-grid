// bonus

console.log('griglia');
// - recupero la griglia dal DOM
const gridDOMElement = document.querySelector('.grid-container');
console.log(gridDOMElement);

// - recupero il bottone dal DOM
const btnPlayDOMElement = document.getElementById('play-btn');
console.log(btnPlayDOMElement);





btnPlayDOMElement.addEventListener('click', function(){
    
    // rimuove gli elementi generati nella griglia
    gridDOMElement.innerHTML = '';

    // - recupero gli elementi della select dal DOM 
    const difficultyDOMElement = document.getElementById('difficulty');
    const value = difficultyDOMElement.options[difficultyDOMElement.selectedIndex].value;
    console.log(value);
    
    // genera gli elementi nella griglia
    if (value === 'easy') {
        gridDOMElement.classList.add('border-grid');
        for (let i = 0; i < 100; i++) {
            const n = i + 1;
            console.log(n);
        
            const htmlCell = `<div class="grid-item">${n}</div>`;
            console.log(htmlCell);
            // - stampa gli elementi generati nel DOM
            gridDOMElement.innerHTML += htmlCell;
        }

    } else if (value === 'normal') {
        gridDOMElement.classList.add('border-normal');
        for (let i = 0; i < 81; i++) {
            const n = i + 1;
            console.log(n);
        
            const htmlCell = `<div class="grid-item medium-difficulty">${n}</div>`;
            console.log(htmlCell);
            // - stampa gli elementi generati nel DOM
            gridDOMElement.innerHTML += htmlCell;
        }
    } else if (value === 'hard') {
        gridDOMElement.classList.add('border-hard');
        for (let i = 0; i < 49; i++) {
            const n = i + 1;
            console.log(n);
        
            const htmlCell = `<div class="grid-item hard-difficulty">${n}</div>`;
            console.log(htmlCell);
            // - stampa gli elementi generati nel DOM
            gridDOMElement.innerHTML += htmlCell;
        }
    }
    
    // - recupero gli elementi generati precedentemente dal DOM 
    const gridItemDOMElements = document.querySelectorAll('.grid-item');
    console.log(gridItemDOMElements);

    // - creo un ciclo for per assegnare un evento click alla cella che vado a premere 
    for (i = 0; i < gridItemDOMElements.length; i++) {
        const currentitemElements = gridItemDOMElements[i];
        console.log(currentitemElements);

        currentitemElements.addEventListener('click', function () {
            console.log('ho cliccato sulla casella ' + currentitemElements.innerHTML);
        
            currentitemElements.classList.add('cyan-cell');
        })
    }
})

