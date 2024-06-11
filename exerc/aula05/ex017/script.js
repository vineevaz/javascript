 function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('selltab')

    if(num.value.length == 0){
        window.alert('Por favor, digite um numero')
        tab.innerHTML = ''
    } else {
        let n = Number(num.value) 
        let c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x  ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
     
 } 

 // Sempre foque nos id e class adicionado!!!
 