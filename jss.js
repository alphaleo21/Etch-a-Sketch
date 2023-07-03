const container = document.querySelector('#container');


function gridCreation(e){
    container.innerHTML = ''; 
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
    }
const color = document.getElementById('color');
const bgColor = document.getElementById('bgcolor');

function removeClear(){
    container.innerHTML = ''; // Clear the container
}

function changeColor(){
    return color.value
}
function changeBgColor(){
    container.style.backgroundColor = bgColor.value;
}

function changeSize(input){
    gridCreation(input)
}