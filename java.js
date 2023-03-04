function createGrid(gridSize){
    const gridGrab = document.querySelector('#grid')
    gridGrab.removeChild(gridGrab.firstChild)
    while(gridGrab.children.length > 0){
        gridGrab.removeChild(gridGrab.firstChild)
    }
    for(let i = 0; i < gridSize; i++){
        let divRow = document.createElement('div')
        divRow.classList.add(`grid${i}`)
        divRow.classList.add(`gridC`)
        const rowGrab = document.querySelector(`.grid${i}`)
        for(let j = 0; j<gridSize; j++) {
            let divCol = document.createElement('div')
            divCol.classList.add(`gridPiece`)
            divCol.classList.add(`${j}grid${i}`)
            divRow.appendChild(divCol)
        }
        gridGrab.appendChild(divRow)
     }
  
    const gridHover = document.querySelectorAll('.gridPiece')
gridHover.forEach (gridHov => gridHov.addEventListener('mouseover', gridHoverTransition))

}

function gridSizer() {
    const gridChooser = document.querySelector('#gridChoice')
    for(let i=1; i<101; i++) {
        let gridChocie = document.createElement('option')
        gridChocie.value=`${i}`
        gridChocie.textContent=`${i}`
        gridChooser.appendChild(gridChocie)
    }
}

function gridChangeSize() {
    let newGridSize = document.querySelector('#gridChoice')
    createGrid(newGridSize.value)
    
}

function gridHoverTransition(e) {
    let redC = Math.floor(Math.random()*255)
    let greenC = Math.floor(Math.random()*255)
    let blueC = Math.floor(Math.random()*255)
    this.style['background-color'] = `rgb(${redC}, ${greenC}, ${blueC})`
}

const gridChoiceoption = document.querySelector('#changeGrid')
gridChoiceoption.addEventListener('click', gridChangeSize)
gridSizer()
let gridSize = 16
createGrid(gridSize)