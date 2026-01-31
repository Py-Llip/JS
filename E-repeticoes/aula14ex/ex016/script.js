var inputs = window.document.getElementsByTagName('input')
inputs[3].addEventListener('click', loop)

function loop() {
    let result = document.getElementsByTagName('output')[0]
    if (inputs[1].value.length == 0) {
        return result.innerText = 'O campo [Fim] é obrigatório!'
    }
    if (inputs[0].value.length == 0) {
        inputs[0].value = 0
    }
    if (inputs[2].value.length == 0 || inputs[2].value <= 0) {
        window.alert(`O passo [${inputs[2].value}] não é permitido, considerado [1]`)
        inputs[2].value = 1
    }
    
    result.innerHTML = 'Contando: <br>'
    let c = Number(inputs[0].value)
    let f = Number(inputs[1].value)
    let p = Number(inputs[2].value)
    if (c < f) {
        for (c; c <= f; c += p) {
            result.innerHTML += `${c} &#128073;`
        }
    } else {
        for (c; f <= c; c -= p) {
            result.innerHTML += `${c} \u{1F449}`
        }
    }
    result.innerHTML += `\u{1F3C1}`
}

