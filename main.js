let i = 0 //
let j = 0
let row = 0
let color = "white"
let width = window.innerWidth;
let something = document.getElementById("something")
let violet = document.getElementById('violet');
let indigo = document.getElementById('indigo');
let blue = document.getElementById('blue');
let green = document.getElementById('green');
let yellow = document.getElementById('yellow');
let orange = document.getElementById('orange');
let red = document.getElementById('red');
let white = document.getElementById('white');
console.log("you can look at all console logs here 😂")
window.addEventListener('load', ()=>{
    white.addEventListener('mouseover',()=>{
        color="white";
        console.log(color)
        white.style.cursor="grabbing"
       })

   violet.addEventListener('mouseover',()=>{
    color="violet";
        violet.style.cursor="grabbing"
        console.log(color)
   })
   blue.addEventListener('mouseover',()=>{
    color="blue";
    console.log(color)
    blue.style.cursor="grabbing"

   })
   indigo.addEventListener('mouseover',()=>{
    color='indigo';
    console.log(color)
    indigo.style.cursor="grabbing"

   })
   green.addEventListener('mouseover',()=>{
    color='green';
        green.style.cursor="grabbing"
    console.log(color)

   })
   yellow.addEventListener('mouseover',()=>{
    color='yellow';
    console.log(color)

   })
   orange.addEventListener('mouseover',()=>{
    color='orange';
    console.log(color)

   })
   
   red.addEventListener('mouseover',()=>{
    color='red';
    console.log(color)
   })
   
    while(row<30){
        row=row+1
        console.log('mainloop'+row);
        let board = document.createElement('div')
        board.setAttribute('id','row'+row)
        board.setAttribute('class','row')
        something.appendChild(board)
        i=0
        while(i<40){
            console.log(i)
            let board = document.getElementById('row'+row)
            let pex = document.createElement('div')
            pex.setAttribute('class', 'pixels');
            board.appendChild(pex)
            i=i+1
            pex.addEventListener('mouseover',()=>{
                console.log(color);
                pex.style.backgroundColor=color
                pex.style.cursor="grabbing"
                
                console.log("ji")
            });
            pex.addEventListener('mouseleave',()=>{
                
                pex.style.cursor="grab"
                
               
            });
        }
    }
    


    
})

