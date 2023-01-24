
import { List } from './components/List';
import { Item } from './components/Item';
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const todoValue = useRef();

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  const getSubmit = (evt) => {
    evt.preventDefault();
    setTodos([...todos, {
      id: todos.at(-1)?.id + 1 || 1,
      text: todoValue.current.value,
      isComplate: false,
    }])


    todoValue.current.value = '';
    toast.success("Todo qo'shildi");
  }


  localStorage.setItem('todos', JSON.stringify(todos))


  return (
    <div className="container">
      <h1 className="display-4 fw-bold text-center my-3">Todo App</h1>
      <form className="w-50 mx-auto p-5 shadow input-group" onSubmit={getSubmit}>
        <input className="form-control" type="text" placeholder="Todo..." ref={todoValue} />
        <button className="btn btn-primary" type="submit">ADD</button>
      </form>


      {
        todos.length ? (
          <List>
            {
              todos.map((todo) => (
                <Item
                  text={todo.text}
                  key={todo.id}
                  id={todo.id}
                  isComplate={todo.isComplate}
                  todos={todos}
                  setTodos={setTodos} />
              ))
            }
          </List>
        ) : (
          <h2 className='h2 text-center py-5'>Todolar yo'q</h2>
        )
      }
      <ToastContainer 
        position='top-right'
        autoClose={2000}
      />
    </div>
  );
}


export default App;
