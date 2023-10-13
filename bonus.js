// bonus

console.log('griglia');
// - recupero la griglia dal DOM
const gridDOMElement = document.querySelector('.grid-container');
console.log(gridDOMElement);

// - recupero il bottone dal DOM
const btnPlayDOMElement = document.getElementById('play-btn');
console.log(btnPlayDOMElement);





btnPlayDOMElement.addEventListener('click', function(){    
    // - recupero gli elementi della select dal DOM 
    const difficultyDOMElement = document.getElementById('difficulty');
    const value = difficultyDOMElement.options[difficultyDOMElement.selectedIndex].value;
    console.log(value);
    
    if (value ==='easy') {
        gridGenerator(100)
        gridDOMElement.classList.add('border-grid');

    } else if (value === 'normal') {
        gridGenerator(81, 'medium-difficulty')
        gridDOMElement.classList.add('border-normal');
    } else if (value === 'hard') {
        gridGenerator(49, 'hard-difficulty')
        gridDOMElement.classList.add('border-hard');
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

function gridGenerator(numCells, classCell) {
    const gridDOMElement = document.querySelector('.grid-container');
    gridDOMElement.innerHTML = '';
    gridDOMElement.classList.remove('border-grid', 'border-normal', 'border-hard'); 
      

    for (let i = 0; i < numCells; i++) {
        const n = i + 1;      
    
        const htmlCell = `<div class="grid-item ${classCell}">${n}</div>`;        
        gridDOMElement.innerHTML += htmlCell;
    }
}