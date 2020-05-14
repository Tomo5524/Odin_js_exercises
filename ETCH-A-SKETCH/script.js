/*
const div = document.createElement('div');
div.textContent = 'this is div';
document.body.appendChild(div)
div.classList.add('container')

const p = document.createElement('p');
p.textContent = 'meow'
div.appendChild(p);*/

let w = 500;
let h = 500;
let body_height = document.querySelector('.menu');
// how to get height menu div
// needs this as bottom of cotainer is out of body 
// to fix this, h - menu's height,
// body_height = body_height.clientHeight.toFixed(2);

// creates button to get grid input 
const dropMenu = document.querySelector('#select');
const color = document.querySelector('#color');
let grid_flag = false;
let grid = 0;
// let each_width = w / grid;
// let each_height = h / grid;
// console.log(each_height)
let opacity_flag = false;
const container = document.querySelector('.container')
const row = document.createElement('div');
const col = document.createElement('div');
let selectedColor = null;

// how to get value of drowdown
//function getValueDropmenu() {
dropMenu.addEventListener('change',(e) => {
    // value is connected with value attribute in html
    //console.log(e.target.value);
    if (grid_flag){
        removeGrid(e.target.value);
    }
    grid_flag = (grid_flag) ? false : true;
    grid = e.target.value
    createGrid(grid)
    //createGrid(e.target.value);
});
//}

color.addEventListener('click',(e) => {
    selectedColor = prompt('what color would you like?')
    console.log(selectedColor)
    
});

function removeGrid(grid){
    const each_row = document.querySelectorAll('.row');
    const each_col = document.querySelectorAll('.row');
    // value is connected with value attribute in html
    //console.log(e);
    // iterate each cell
    for (let i = 0; i < each_row.length; i++){
        // remove each row node 
        each_row[i].remove()
    }
    for (let i = 0; i < each_col.length; i++){
        // remove each column node 
        each_col[i].remove()
    }

}

// getValueDropmenu()

//const num_grid = dropMenu.options[dropMenu.selectedIndex].value
//console.log(num_grid);

function createGrid(grid){
    let each_width = w / grid;
    let each_height = h / grid;
    // console.log(each_height)
    opacity_flag = false;
    // console.log(each_width);

    for(let i = 0; i < grid; i++){
        const row = document.createElement('div');

        // solution was to get rid of row
        row.classList.add('row')
        // without this, there is a space between each row
        // and container changes dynamically according to number of rows
        row.style.height = `${each_height}px`;
        //row.textContent = 'row';
        //row.style.color = 'magenta'
        const container = document.querySelector('.container')
        // row takes only 151 px
        // row.style.width = `${each_width}px`;

        for(let j = 0; j < grid; j++){
            const col = document.createElement('div');
            col.classList.add('col');
            //col.textContent = 'a';
            //col.style.height = `${each_width}px`;
            // assign each column width and height
            col.style.width = `${each_width}px`;
            col.style.height = `${each_height}px`;
            //col.style.color = 'magenta';
            
            row.appendChild(col);
            container.appendChild(row);
    
        }
    }
    // draw each coloum
    const each_col = document.querySelectorAll('.col');
    for (let i = 0; i < each_col.length; i++){
        each_col[i].addEventListener('mouseover', (e) => {
            // how to change backgroudn color 
            // throw opacity here
            if (opacity_flag){
                each_col[i].style.opacity = 0.1;
            } else{
                each_col[i].style.backgroundColor = selectedColor;
            }
        });
    }

    const reset = document.querySelector('#reset');
    // console.log('meow')
    // console.log(reset)
    const each_row = document.querySelectorAll('.row');
    reset.addEventListener('click',(e) => {
        // value is connected with value attribute in html
        //console.log(e);
        // iterate each cell
        for (let i = 0; i < each_row.length; i++){
            // remove each row node 
            each_row[i].remove()
        }
        for (let i = 0; i < each_col.length; i++){
            // remove each column node 
            each_col[i].remove()
        }
    });

    const opacity = document.querySelector('#opacity');
    // console.log('meow')
    // console.log(reset)
    opacity.addEventListener('click',(e) => {
            opacity_flag = (opacity_flag) ? false : true;
    });
    
    
    /*
    const reset = document.querySelector('#reset');
    console.log('meow')
    console.log(reset)
    // how to get value of drowdown
    reset.addEventListener('click',(e) => {
       
        console.log(e);
        // Uncaught TypeError: each_col.remove is not a function
        // at HTMLButtonElement.<anonymous> (script.js:81)
        // (anonymous) @ script.js:81 
        // console.log(each_col) returns the whole node list
        // console.log(each_col[0]) returns a cell with given index
        each_col.remove()
    });
    */
    
    
}

// grid should not change dynamically 
// back ground and let users pick a color 
// how to reset grid by choosing grid number
// background pictuer 
// cell color is transparent so it will reveal what background is 
// opacity
// keep grid in body
// resize background image


// how to reset grid when reset button is clicked

//createGrid(3);
// mouse hover
// const h = document.querySelector('.col'); works just fine
// line ablove returns nodelist so need to iterate it to attach event optionstners
// NodeOptionsts don't have an addEventListener method. You should iterate over the nodeoptionst, 
//and addEventListener to each element within – assuming that you want to add N optionsteners.
// Alternately, select only a single element, and the remainder of your code will work as written. 


/*
const h = document.querySelectorAll('.col');
for (let i = 0; i<h.length; i++){
    h[i].addEventListener('mouseover', (e) => {
        // how to change backgroudn color 
        h[i].style.backgroundColor = 'yellow';

    });

}
*/






