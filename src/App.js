import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import { nanoid } from 'nanoid';
import Search from "./components/Search";
import Header from "./components/Header";


function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);



  const addTodo = (text) => {
    const date = new Date();
    const newTodo = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  const removeTodos = () => {
    setTodos([]);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  })


  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchTodo={setSearchText} />
        <TodoList todos={todos.filter((todo) =>
          todo.text.toLowerCase().includes(searchText)
        )}
          handleAddTodo={addTodo}
          handleDeleteTodo={deleteTodo}
          handeRemoveTodos={removeTodos} />
      </div>;
    </div>
  );
};
export default App;
