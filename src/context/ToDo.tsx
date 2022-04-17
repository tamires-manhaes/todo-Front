import { createContext, useContext, useState } from 'react';
import { createToDo, deleteToDo, getAllTodos } from '../services';
import { CreateTask, DeleteTask } from '../types';
import { LoadingContext } from './Loading';

interface ITodo {
  task: string;
  is_done: boolean;
  id: string;
}

interface ITodoContext {
  todos: ITodo[];
  addTodo: (todo: string) => void;
  deleteTodo: (id: string) => void;
  getAlltodos: () => void;
}

const DEFAULT_VALUE: ITodoContext = {
  addTodo: () => null,
  deleteTodo: () => null,
  getAlltodos: () => null,
  todos: [],
};

export const ToDoContext = createContext<ITodoContext>(DEFAULT_VALUE);

export const ToDoProvider: React.FC = ({ children }) => {
  const [todos, setToDos] = useState<ITodo[] | []>([]);
  const { setIsLoading } = useContext(LoadingContext);

  const getAlltodos = async () => {
    const localTasks = await getAllTodos();
    setToDos(localTasks);
  };

  const addTodo: CreateTask = async (todo: string) => {
    if (todo) {
      const newTask = {
        task: todo,
        is_done: false,
      };
      setIsLoading(true);
      const newTaskResponse = await createToDo(newTask);
      setToDos([...todos, newTaskResponse]);
      setIsLoading(false);
    }
  };

  const deleteTodo: DeleteTask = async (id: string) => {
    try {
      setIsLoading(true);
      await deleteToDo(id);
      setToDos(todos.filter((todo) => todo.id !== id));
      setIsLoading(false);
    } catch (e) {
      alert('error!');
    }
  };

  return (
    <ToDoContext.Provider value={{ todos, addTodo, deleteTodo, getAlltodos }}>
      {children}
    </ToDoContext.Provider>
  );
};
