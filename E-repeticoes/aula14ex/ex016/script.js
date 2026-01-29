var inputs = window.document.getElementsByTagName('input')
inputs[3].addEventListener('click', loop)

function loop() {
    if (inputs[1].value === "") {
        return window.alert('O campo [Fim] é obrigatótios')
    }
    if (inputs[0].value === "") {
        inputs[0].value = 0
    }
    if (inputs[2].value === "") {
        inputs[2].value = 1
    }


    result = document.getElementsByTagName('output')[0]
    result.innerHTML = 'Contando: <br>'
    for (var c = Number(inputs[0].value); c <= Number(inputs[1].value); c += Number(inputs[2].value)) {
        result.innerHTML += `${c} &#128073;`
    }
    result.innerHTML += `&#127937;`
    
}

