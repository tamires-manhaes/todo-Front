
type DeleteTask = (taskId: string) => void;

type CreateTask = (Todo: CreateTodo) => void;

export interface ILoader {
  isLoading: boolean
}

export interface TaskItemProps {
  id: string,
  task: string,
  is_done: boolean,
  deleteTodo: DeleteTask,
}

export interface CreateTodo {
  task: string,
  is_done: boolean
}

export interface TaskList {
  tasks: TaskItemProps[];
}
