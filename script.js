const todoForm = document.getElementById("ToDo-form");
const todoList = document.getElementById("ToDo-list");

todoForm.addEventListener("submit", function(event){
    event.preventDefault();
    const Tasks = document.getElementById('Tasks').value;
    if(Tasks){
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td class ="w-3/4">${Tasks}</td><td class ="w-1/4"><button class="w-full bg-red-600 hover:bg-red-700 text-white font-bold p-2 rounded-md cursor-pointer items-center">Delete</button></td>`;
        todoList.appendChild(newRow);

        document.getElementById('Tasks').value = '';

        const deleteButton = newRow.querySelector('button');
        deleteButton.addEventListener('click', function(){
            newRow.remove();
        })
    }
    else{
        alert("Please fill out all fields with valid data")
    }
})