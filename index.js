document.querySelectorAll(".drum").forEach(function(valor,indice,array){
    document.querySelectorAll(".drum")[indice].addEventListener("click",function(){
        let selecionado=this.innerHTML
        makeSound(selecionado)
        animacao(selecionado)
    })
})

document.addEventListener("keydown", function(e){
    let selecionado=e.key
    makeSound(selecionado)
    animacao(selecionado)
})

function makeSound(selecionado){
    switch (selecionado){
        case 'w':
            var tom1= new Audio('sounds/tom-1.mp3')
            tom1.play()
            break
        case 'a':
            var tom2= new Audio('sounds/tom-2.mp3')
            tom2.play()
            break
         case 's':
            var tom3= new Audio('sounds/tom-3.mp3')
            tom3.play()
            break
         case 'd':
            var tom4= new Audio('sounds/tom-4.mp3')
            tom4.play()
            break
         case 'j':
            var crash= new Audio('sounds/crash.mp3')
            crash.play()
            break
         case 'k':
            var bass= new Audio('sounds/kick-bass.mp3')
            bass.play()
            break
         case 'l':
            var snare= new Audio('sounds/snare.mp3')
            snare.play()
            break
        default:
        console.log(selecionado)
    }
}
function animacao(tecla){
    let botao =  document.querySelector(`.${tecla}`)
    botao.classList.toggle("pressed")
    setTimeout(function(){
     botao.classList.toggle("pressed")
    },100)
 }