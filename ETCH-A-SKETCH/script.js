/*
const div = document.createElement('div');
div.textContent = 'this is div';
document.body.appendChild(div)
div.classList.add('container')

const p = document.createElement('p');
p.textContent = 'meow'
div.appendChild(p);*/

let w = 525;


function createGrid(grid){
    let each_width = w / grid;
    console.log(each_width);

    for(let i = 0; i < grid; i++){
        const row = document.createElement('div');

        // solution was to get rid of row
        row.classList.add('row')
        
        //row.textContent = 'row';
        //row.style.color = 'magenta'
        const g = document.querySelector('.container')
        
        // row takes only 151 px
        // row.style.width = `${each_width}px`;

        for(let j = 0; j < grid; j++){
            const col = document.createElement('div');
            col.classList.add('col');
            col.textContent = 'col';
            //col.style.height = `${each_width}px`;
            col.style.width = `${each_width}px`;
            //col.style.color = 'magenta';
            
            row.appendChild(col);
            g.appendChild(row);
    
        }
    }
    

}

createGrid(4);
