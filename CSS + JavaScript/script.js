const div = document.getElementById('div2')
const img = document.querySelectorAll('#div2 img')
div.addEventListener('mouseenter' , entrou)
div.addEventListener('mouseout' , saiu)
img.addEventListener('mouseenter' , img)

function entrou(){
    div.style.scale = "1.1"
}

function saiu(){
    div.style.scale = "1"
}
