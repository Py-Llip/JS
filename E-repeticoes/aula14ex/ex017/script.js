const { createElement } = require("react")



function tabuada() {
    let n = document.querySelector('#in').value
    //var b = document.querySelector('input[type="button"]')
    let r = document.getElementsByTagName('select')[0]
    if (n.length == 0) {
        window.alert('Por favor, insira um número.')
    } else {
        r.innerHTML = ''
        n = Number(n)
        for (let i = 0; i <= 10; i++) {
            op = document.createElement('option')
            op.text = `${n} x ${i} = ${n*i}`
            op.value = `tab${c}`
            r.appendChild(op)
        }
    }
    
    
}