import { isDOMComponent } from 'react-dom/test-utils';
import client from '../client/index';
import { CreateTodo } from '../types';

const getAllTodos = async () => {
  const tasks = (await client.get('/todos')).data;

  return tasks;
}

const toDoDone = async (id: string, isDone: Boolean) => {
  const response = (await client.put(`/todo/done/${id}`, { is_done: isDone })).data;

  return response;
}

const createToDo = async (todo: CreateTodo) => {
  const response = (await client.post('/todo', todo)).data;

  return response;
}

const deleteToDo = async (taskId: string) => {
  const response = (await client.delete(`/todo/${taskId}`)).data;

  return response;
}

export {
  getAllTodos,
  createToDo,
  deleteToDo,
  toDoDone
}
