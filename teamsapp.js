const createTeams = () => {
    const drpValue = document.querySelector('#numTeams')
    let numOfTeams = drpValue.value

    // RANDOMIZE LIST
    sepTeams = []
    randNames = []
    let newUl = document.querySelector('#namesList')
    newUl.style.display = "none"
    for (let i = newUl.children.length; i >= 0; i--) {
        newUl.appendChild(newUl.children[Math.random() * i | 0])
    }
    let randElems = document.querySelectorAll('li')
    randElems.forEach ( x => randNames.push(x.innerHTML))
    
    // SEPARATE TEAMS
    pplPerTeam = Math.floor(randNames.length/numOfTeams) 
    for (let i = 0; i < randNames.length ; i += pplPerTeam) {
        sepTeams.push( randNames.slice(i, i + pplPerTeam) )
    }

    // DISPLAY TEAMS   
    const row = document.createElement('div')
    row.classList.add('row')
    document.querySelector("#divContainer").appendChild(row)

    console.log(sepTeams)
 
    sepTeams.forEach (
        x => {
            let col = document.createElement('div')
            col.classList.add('col-6')
            col.classList.add('mt-3')
            row.appendChild(col)
            const ulNames = document.createElement('ul')
            col.appendChild(ulNames)
            x.forEach(
                ppName => {
                    let liElem = document.createElement('li')
                    liElem.innerHTML = ppName
                    ulNames.appendChild(liElem)
                }
            )
        }
    )
    
}

const addToList = () => {
    const inputField = document.querySelector('#chName') 
    const inputName = inputField.value
    
    const elem = document.createElement('li')
    elem.innerHTML = inputName
    document.querySelector('#namesList').appendChild(elem)
}

const ClearList = () => {
    const list = document.querySelector('#namesList')
    list.innerHTML = ""
}

const displayInput = () => {

    // GENERATE NAME LABEL
    const elem = document.createElement('label')
    elem.innerHTML = "Choose a name"
    elem.setAttribute('for', 'chName')
    document.querySelector("#divContainer").appendChild(elem)

    // GENERATE NAME FIELD
    const field = document.createElement('input')
    field.setAttribute('type', 'text')
    field.setAttribute('id', 'chName')
    field.setAttribute('name', 'chName')
    field.setAttribute('placeholder', 'ex. Tony...')
    document.querySelector("#divContainer").appendChild(field)

    // GENERATE ADD BUTTON
    const button = document.createElement('input')
    button.setAttribute('type', 'button')
    button.setAttribute('value', 'Add to list')
    button.setAttribute('id', 'adder')
    document.querySelector("#divContainer").appendChild(button)  
    button.onclick = addToList  

    // GENERATE CLEAR BUTTON
    const buttonClear = document.createElement('input')
    buttonClear.setAttribute('type', 'button')
    buttonClear.setAttribute('value', 'Clear List')
    buttonClear.setAttribute('id', 'remover')
    document.querySelector("#divContainer").appendChild(buttonClear)  
    buttonClear.onclick = ClearList  

    // GENERATE NUM TEAMS LABEL
    const labNum = document.createElement('label')
    labNum.innerHTML = "How many teams?"
    labNum.setAttribute('for', 'numTeams')
    document.querySelector("#divContainer").appendChild(labNum)

    // GENERATE DROPDWON NUMBER OF TEAMS
    const drpdwn = document.createElement('select')
    drpdwn.setAttribute('id', 'numTeams')
    drpdwn.setAttribute('name', 'numTeams')
    document.querySelector("#divContainer").appendChild(drpdwn)
    
    const opt = document.createElement('option')
    opt.setAttribute('value', '1')
    opt.innerHTML = "1"
    document.querySelector("#numTeams").appendChild(opt)
    
    const opt2 = document.createElement('option')
    opt2.setAttribute('value', '2')
    opt2.innerHTML = "2"
    document.querySelector("#numTeams").appendChild(opt2)

    const opt3 = document.createElement('option')
    opt3.setAttribute('value', '3')
    opt3.innerHTML = "3"
    document.querySelector("#numTeams").appendChild(opt3)

    const opt4 = document.createElement('option')
    opt4.setAttribute('value', '4')
    opt4.innerHTML = "4"
    document.querySelector("#numTeams").appendChild(opt4)

    const opt5 = document.createElement('option')
    opt5.setAttribute('value', '5')
    opt5.innerHTML = "5"
    document.querySelector("#numTeams").appendChild(opt5)

    const opt6 = document.createElement('option')
    opt6.setAttribute('value', '6')
    opt6.innerHTML = "6"
    document.querySelector("#numTeams").appendChild(opt6)

    // CREATE TEAMS BUTTON
    const createButton = document.createElement('input')
    createButton.setAttribute('type', 'button')
    createButton.setAttribute('value', 'Create teams')
    createButton.setAttribute('id', 'teamer')
    document.querySelector("#divContainer").appendChild(createButton)  
    createButton.onclick = createTeams  
}

displayInput()

