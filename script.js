
document.querySelectorAll('.poke').forEach( poke => {
    poke.addEventListener('mouseover', function(){
 
if( this.classList.contains('planta')){
    this.style.setProperty('--border-color', '#39FF14')
    poke.style.backgroundColor = 'green'
    

} else if(this.classList.contains('fogo')){
    this.style.setProperty('--border-color', '#FF5733')
     poke.style.backgroundColor = '#FFA500'
}

else if(this.classList.contains('agua')){
    this.style.setProperty('--border-color','#E0F7FA')
    poke.style.backgroundColor = '#003366'
}
else if(this.classList.contains('fly')){
    this.style.setProperty('--border-color','#00FFFF')
    poke.style.backgroundColor = '#BFEFFF'

}else if(this.classList.contains('normal')){
    this.style.setProperty('--border-color', 'black')
    poke.style.backgroundColor = '#4B4B4B'
}
else if(this.classList.contains('poison')){
    this.style.setProperty('--border-color', '#39FF14')
    poke.style.backgroundColor = 'violet'
}
else if(this.classList.contains('chock')){
    this.style.setProperty('--border-color', '#00FFFF')
    poke.style.backgroundColor = 'yellow'
}
else if(this.classList.contains('ground')){
    this.style.setProperty('--border-color', 'brown')
    poke.style.backgroundColor = '#D2B48C'
}
else if(this.classList.contains('fairy')){
    this.style.setProperty('--border-color', '#FF69B4')
    poke.style.backgroundColor = '#DDA0DD'
}
else if(this.classList.contains('bug')){
    this.style.setProperty('--border-color', '#32CD32')
    poke.style.backgroundColor = '#90EE90'
}
else if(this.classList.contains('lutador')){
    this.style.setProperty('--border-color', '#FF073A')
    poke.style.backgroundColor = '#8B0000'
}

else if(this.classList.contains('psycho')){
    this.style.setProperty('--border-color', 'red')
    poke.style.backgroundColor = '#FF00FF'
}

else if(this.classList.contains('rock')){
    this.style.setProperty('--border-color', 'white')
    poke.style.backgroundColor = '#3E2723'
}
else if(this.classList.contains('ghost')){
    this.style.setProperty('--border-color', '#A900DB')
    poke.style.backgroundColor = '#512E5C'
}
else if(this.classList.contains('ice')){
    this.style.setProperty('--border-color', '#1F51FF')
    poke.style.backgroundColor = 'lightblue'
}
else if(this.classList.contains('dragon')){
    this.style.setProperty('--border-color','#C0C0C0' )
    poke.style.backgroundColor = '#00796B'
}
})
 

    poke.addEventListener('mouseout', function(){
        this.style.setProperty('--border-color', 'white')
        poke.style.backgroundColor = 'transparent'
    })
})