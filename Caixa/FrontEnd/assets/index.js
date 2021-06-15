setInterval(function () {
    let novaHora = new Date();

    document.getElementById("labelCod").innerHTML = novaHora;
}, 1000)

const tabela = document.getElementById('table')
const btn = document.getElementById('btnCatch')
let arrComanda = []
const gerarComanda = (valor) => {
    fetch(`http://localhost:3333/comandas/${valor}`)
        .then(res => {
            return res.json()
        }).then(res => {
            tabela.innerHTML=`<div class="row">
            <div class="col">Código</div>
            <div class="col-sm-6">Item</div>
            <div class="col">Qtd</div>
            <div class="col">Valor</div>
            <div class="col">Total</div>
        </div>`
            arrComanda = res.row
            gerarProd(arrComanda)
        }).catch(e => {
            alert(e)
        })
}



const gerarProd = (valor) => {
    for (const i of valor) {
        console.log(i)
        fetch(`http://localhost:3333/${i.codProduto}`)
        .then(res => {
            return res.json()
        }).then(res => {
            console.log(res)
            gerarItem(i.codProduto,res.data.nome,i.qtd,res.data.valor)
        }).catch(e => {
            alert(e)
        })
    }

}


const gerarItem = (arqCode,arqNome, arqQtd, arqValor) => {
    let arqTotal = arqValor*arqQtd
    tabela.innerHTML += `<div class="row">
    <div class="col">${arqCode}</div>
    <div class="col-sm-6">${arqNome}</div>
    <div class="col">${arqQtd<1?arqQtd.toFixed(3):arqQtd}</div>
    <div class="col">R$${arqValor.toFixed(2)}</div>
    <div class="col">R$${arqTotal.toFixed(2)}</div>
</div>`
}

btn.addEventListener('click', () => {
    const codigo = document.getElementById('inputCod').value
    gerarComanda(codigo)
    
})