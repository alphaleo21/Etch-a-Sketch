const container = document.querySelector('#container');

container.style.gridTemplateColumns = 'repeat(16, 1fr)';
container.style.gridTemplateColumns = 'repeat(16, 1fr)';

for(let i = 0;i<25; i++){
    const grid = document.createElement('div');
    grid.classList.add('grid')
    grid.style.backgroundColor = "black";
    container.insertAdjacentElement("beforeend", grid);
}