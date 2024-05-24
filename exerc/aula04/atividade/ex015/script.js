function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano ){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.querySelectorAll('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
    }
}
