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


function gridHoverTransition() {
    const colorSelect = document.querySelector('#colorChoice')
    let alpha = .1
    if (colorSelect.value == "Darker") {
        // console.log(this.style['background-color'][3])
        // console.log(this.style['background-color'])
        if(!this.style['background-color']){
            this.style['background-color'] = `rgba(50,160,176,${alpha})`
        }
    
        
        else if ((this.style['background-color'][3] == "a"))
        {
            let tempAlpha = this.style['background-color']
            alpha = Number(tempAlpha.slice(-3,-1)) + .1
            // console.log(tempAlpha.split(","))
            tempAlpha= tempAlpha.split(",")
            let RedC = tempAlpha[0].slice(5)
            let GreenC = tempAlpha[1]
            let BlueC = tempAlpha[2]
            // console.log(RedC,GreenC, BlueC)
            
            // console.log(alpha)
            // console.log("what")
            this.style['background-color'] = `rgba(${RedC},${GreenC},${BlueC},${alpha})`
        }
        
    }
    else if (colorSelect.value == "Lighter") {
        
        if(!this.style['background-color']){
            this.style['background-color'] = `rgba(50,160,176,${alpha})`
        }
        else if ((this.style['background-color'][3] == "a"))
        {
            let tempAlpha = this.style['background-color']
            alpha = Number(tempAlpha.slice(-3,-1)) - .1
            
            tempAlpha= tempAlpha.split(",")
            let RedC = tempAlpha[0].slice(5)
            let GreenC = tempAlpha[1]
            let BlueC = tempAlpha[2]
            // console.log(RedC, GreenC, BlueC, alpha)
            this.style['background-color'] = `rgba(${RedC},${GreenC},${BlueC},${alpha})`
        }
        
    }
    else if (colorSelect.value == "Single Color") {
        this.style['background-color'] = `rgba(50,160,176,.5)`
    }
    
    else if (colorSelect.value== "Random Colors")
    {
    let redC = Math.floor(Math.random()*255)
    let greenC = Math.floor(Math.random()*255)
    let blueC = Math.floor(Math.random()*255)
    let alphaC = Math.floor(Math.random()*10)/10
    this.style['background-color'] = `rgba(${redC}, ${greenC}, ${blueC}, ${alphaC})`
    }
    else if (colorSelect.value == "Eraser"){
        this.style['background-color'] = `rgb(255,255,255)`
    }
}

const gridChoiceoption = document.querySelector('#changeGrid')
gridChoiceoption.addEventListener('click', gridChangeSize)
gridSizer()
let gridSize = 16
createGrid(gridSize)