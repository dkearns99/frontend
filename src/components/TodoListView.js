import TodoItem from "./Todo"

 function TodoView(props) {
     return (

         <div>
             <ul>
                {
                 (props.todoLis && props.todoList.length > 0 )
                 ?
                props.todoList.map(todo => <TodoItem todo= 
                {todo} />)
                :
                null
            }
             </ul>
         </div>
     )
 }
export default TodoView