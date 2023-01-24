import { toast } from 'react-toastify';

export const Item = ({text, id, isComplate, todos, setTodos}) => {
    const getDelete = (todoId) => {
        const filteredTodos = todos.filter(todo => todo.id !== todoId);
        setTodos([...filteredTodos]);
        toast.error("Todo o'chirildi");
    }

    const getEdit = (todoId, text) => {
        const findedTodos = todos.find(todo => todo.id === todoId);
        const newText = prompt('Yangi todo kiriting', text);
        findedTodos.text = newText;
        setTodos([...todos]);
        toast.warning("Todo o'zgartirildi");
    }

    const getChecked = (todoId) => {
        const findedTodo = todos.find(todo => todo.id === todoId);
        findedTodo.isComplate = !findedTodo.isComplate;
        setTodos([...todos])
        toast.info("Todo bajarildi");
    }

    return (
        <li className="list-group-item d-flex align-items-center">
            <span>{id}.</span>
            <input onChange={() => getChecked(id)} className="form-check-input mx-3" type="checkbox" checked={isComplate}/>
            <strong className={isComplate ? "text-decoration-line-through text-success" : ""}>{text}</strong>
            <button className="btn btn-warning ms-auto me-1" onClick={() => getEdit(id, text)}>EDIT</button>
            <button className="btn btn-danger" onClick={() => getDelete(id)}>DELETE</button>
        </li>
    ); 
}