var a = document.getElementById('to-change')

a.addEventListener('click', toClick)


function clicar(){
    a.innerHTML = 'Clicou'
    a.style.backgroundColor = 'red'
}

