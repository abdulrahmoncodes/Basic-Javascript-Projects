// select all the classes from the HTML file using the DOM 
const notes = document.querySelector('.notes');
const submitBtn = document.querySelector('.btn-submit');
const textarea = document.querySelector('.textarea');
const showList = document.querySelector('.show-list');
const myModal = document.querySelector('#myModal');
const closeModal = document.querySelector('.close')

// A function that shows the modal container
let modalFunction = ()=>{
        if(textarea.value===''){
            myModal.style.display = 'block'
        } else {
                myModal.style.display = 'none'
        }
}

// Submit button function
submitBtn.addEventListener('click', ()=>{

// Create a todoItem variable to store all the values from the input/textarea
    let todoItem = document.createElement('div');
    todoItem.classList.add('todo-items')

// Create list-item tag and append it to the todoItem
    let li = document.createElement('li'); 
// Get the values/text from the input tag
    li.innerText = `${textarea.value}`
    todoItem.appendChild(li);

// Create deleteBtn variable and append it to the todoItem
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X';
    deleteBtn.style.cursor='pointer'
    todoItem.appendChild(deleteBtn);

//Create checkBtn variable and append it to the todoItem
    let checkBtn = document.createElement('button');

// Add functionality to the checkBtn by adding a classList
    checkBtn.classList.add('done')
    checkBtn.innerText = 'done'
    todoItem.appendChild(checkBtn)
    
// what to do if textarea is empty or filled 
    if(textarea.value===""){
        modalFunction()
    }else{
        showList.appendChild(todoItem)
    }

// Clear the textarea after click the submitBtn
    textarea.value='';

//delete a list
    deleteBtn.addEventListener('click',()=>{
        todoItem.style.display = 'none'
     })
    
//check or mark a list
     checkBtn.addEventListener('click', ()=>{
        deleteBtn.style.display = 'none'
        checkBtn.style.display = 'none'
     })
   
})

// close the modal container
closeModal.addEventListener('click', ()=>{
    myModal.style.display = 'none';
    myModal.classList.add('close')
})
