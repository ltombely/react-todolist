import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  //USE STATE STATEMENTS
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState(['Selecionar Categoria', 'Estudos', 'Trabalho', 'Pessoal'])
  const [isCompleted, setIsCompleted] = useState(false);
  const [id, setId] = useState(0);
  const [now, setNow] = useState();

  //FUNCTIONS

  const clearAll = (e) => {
    e.preventDefault();
    setTodos([]);
    setCategories(['Selecionar Categoria', 'Estudos', 'Trabalho', 'Pessoal'])
  };

  const addTodo = () => {

    const newTodo = {
      id: id,
      text: text,
      date: date,
      category: category,
      now: now,
      isCompleted: isCompleted,
    };

    setTodos([...todos, newTodo]);
    setId(id + 1);
  };

  const del = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  //USE EFFECT

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    const storedCategories = localStorage.getItem("categories")

    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
    if(storedCategories){
      localStorage.getItem(JSON.parse(storedCategories))
    }

  }, []);
  


  window.addEventListener("beforeunload", () => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem('categories', JSON.stringify(categories))
  });

  return (
    <div className="d-flex justify-content-center align-items-center mt-3 w-100">
      <div className="card w-75 text-bg-secondary text-md-center">
        <h1>React App</h1>
        <h2>Lista de Tarefas</h2>
        <TodoForm
          text={text}
          setText={setText}
          setDate={setDate}
          setCategory={setCategory}
          setNow={setNow}
          addTodo={addTodo}
          clearAll={clearAll}
          setId={setId}
          categories={categories}
          setCategories={setCategories}
        />
        <section className="mt-5">
          <h2>Tarefas:</h2>
          {todos.map((todo) => (
            <Todo
              text={todo.text}
              date={todo.date}
              setDate={setDate}
              category={todo.category}
              isCompleted={todo.isCompleted}
              now={todo.now}
              id={todo.id}
              key={todo.id}
              del={del}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
export default App;

//Sempre que o React repete um componente, ele precisa de um atributo que não se repete. Esse valor que não se repete pode ser o id, e esse valor recebe o nome key. Se declara key nos props. key={todo.id}
