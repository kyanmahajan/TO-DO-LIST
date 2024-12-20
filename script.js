let input = document.querySelector('input');
let add = document.querySelector('#buttonone');
let reset = document.querySelector('#button');
let lists = document.querySelector('#lists');
let listss = document.querySelector('#listss');

alert('You can add any task and check it when completed by clicking on it. Use the reset button for removing all the tasks')

add.addEventListener('click', ()=>{

    if(input.value==""){
        alert('you must enter something')
    }

    else{

        let li= document.createElement("li");
        li.innerHTML= input.value;

        lists.appendChild(li);
           input.value="";

           li.addEventListener('click', ()=>{
           li.classList.add('checked');
           })

    }
})

reset.addEventListener('click', () => {
    // Select all <li> elements
    let listItems = document.querySelectorAll('li');
    
    // Loop through each <li> and remove it
    listItems.forEach((ele) => {
        ele.remove();
    });
});


