const total = document.getElementById('total')

let valorTotal = Number.parseFloat(sessionStorage.getItem('valor-total'))

total.innerText = `R$ ${valorTotal.toFixed(2).replace('.',',')}`

//

const modal = document.getElementById('modal');
const contraste = document.getElementById('fade');

setTimeout(function showModal() {
    console.log('Teste')
    modal.classList.remove('hide')
    contraste.classList.remove('hide-cont')
}, 5000)

setTimeout(() => {
    document.getElementById('home').click()
}, 15000)