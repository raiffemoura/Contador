function contar(event) {
    event.preventDefault()
    let inicio = window.document.getElementById('inicio').value
    let fim = window.document.querySelector('#fim').value
    let passo = window.document.getElementById('passo').value
    let res = window.document.getElementById('res')


    if (passo.length == 0 || fim.length == 0 || inicio.length == 0) {
        
        res.innerHTML = "Impossível contar!"

    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)

        if (p <= 0){
            window.alert("Passo inválido! Considerando PASSO 1")
            p = 1
        }

        if (i < f) {
            // Contagem Crescente
            for (let c = i; c <= f; c += p) {
               res.innerHTML += `${c} `

            }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c-=p){
                res.innerHTML += `${c} `
            }
        }
        
    }
}   