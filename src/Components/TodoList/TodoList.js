const form = 'form';
const input = 'input';
const todosUL = 'todos';

form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo()
})
function addTodo(e) {
    let todoText = input.value
    if (e) {
        todoText = e.text
    }
    console.log(e.target.value)
}





