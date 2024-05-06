const container = document.querySelector('.grid-container')
const gridSizeButton = document.querySelector('#grid-size')
gridSizeButton.addEventListener('click', () => {
    
    const gridSize = parseInt(prompt('Please enter grid size'))
    
    if (container.hasChildNodes()) {
        container.innerHTML = ''
    }

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div')
        row.classList.add('row')
        for (let j = 0; j < gridSize; j++) {
            const column = document.createElement('div')
            column.classList.add('column')
            column.addEventListener('mouseleave', (e) => {
                e.target.style.backgroundColor = '#efff32'
            })
            row.appendChild(column)
        }
        
        container.appendChild(row)
    }
})
