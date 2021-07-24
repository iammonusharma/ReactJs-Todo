import React from "react"
import {ListGroup,ListGroupItem} from "reactstrap"
import {FaCheckDouble} from "react-icons/fa"

const Todos=({todos,markComplete})=>{
    return(
        <ListGroup className="mt-5 mb-2 items text-uppercase">
            {todos.map(todo=>(
                <ListGroupItem key={todo.id}>
                    {todo.todoString}
                    <span className="mt-1 float-end"
                    onClick={()=>markComplete(todo.id)}
                    ><FaCheckDouble /></span>
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};
export default Todos;