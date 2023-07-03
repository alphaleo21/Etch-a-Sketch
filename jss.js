const container = document.querySelector('#container');
let count = 0;

function gridCreation(e){
    if(count<1){
        for(let j =0;j<e;j++){
            const row = document.createElement('div');
            row.classList.add('row');
            for(let i=0;i<e;i++){
                const grid = document.createElement('div');
                grid.classList.add('grid');
                grid.addEventListener("mouseover", () =>{
                    grid.style.backgroundColor = changeColor();
                })
                row.appendChild(grid);
            }
            container.appendChild(row);
        }
        count++;
    }else if(count == 1){
        const row = document.querySelectorAll(".row")
        const grid = document.querySelectorAll(".grid")
        row.clear;
        grid.clear;
        count = 0;
        console.log("hello")
    }
    
}

const color = document.getElementById('color');
const bgColor = document.getElementById('bgcolor');

function clear(){
    
}

function changeColor(){
    return color.value
}

function changeSize(input){
    gridCreation(input)
}