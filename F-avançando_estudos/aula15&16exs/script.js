var lista = []
var envio = document.getElementById('envio')
function add() {
    let get_valor = document.getElementById('in')
    
    get_valor.focus()
    let valor = get_valor.value
    get_valor.value = ''
    let validacao = function(n) {
        if (n !== "") {
            n = Number(n)
            if (n >= 1 && n <= 100) {
                if (!lista.includes(n)) { // lista.indexOf(n) != -1
                    return true
                }
                alert(`O valor [${n}] já existe na lista!`)
                return false
                
            }
            window.alert('O número deve estar entre 1 e 100')
            return false
        }
    window.alert(`Coloque um valor!`)
    return false
    }(valor)

    if (!validacao) {
        return
    }
    envio.innerHTML = ''
    valor = Number(valor)
    lista.push(valor)
    let sel = window.document.getElementById('sel')
    let option = document.createElement('option')
    option.text = `[${valor}] adicionado com sucesso!`
    sel.appendChild(option)
}

var bt = document.querySelector('input[value="Enviar"]')
bt.addEventListener('click', mostrar)

function mostrar() {
    if(lista.length > 0) {
        
        envio.innerHTML = `<p>Temos ${lista.length} cadastrados.</p>`
        let maior = lista[0]
        let menor = lista[0]
        let soma = 0
        for (let i in lista) {
            soma += lista[i]
            if (lista[i] > maior) {
                maior = lista[i]
            }
            if (lista[i] < menor) {
                menor = lista[i]
            }
        }
        envio.innerHTML += `<p>O número maior da lista é ${maior}</p><p>O número menor da lista é ${menor}</p><p>Somando todos os valores temos ${soma}</p><p>E a média dos valores digitados é ${(soma/lista.length).toFixed(2)}</p>`
        
    } else {
        window.alert('Para enviar é necessário adicionar um número.')
    }
}
