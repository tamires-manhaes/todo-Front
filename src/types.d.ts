type DeleteTask = (taskId: string) => void;

type CreateTask = (todo: string) => void;

export interface ILoader {
  isLoading: boolean;
}

export interface ITodo {
  id: string;
  task: string;
  is_done: boolean;
}

export interface TaskItemProps {
  id: string;
  task: string;
  is_done: boolean;
  deleteTodo: DeleteTask;
}

export interface CreateTodo {
  task: string;
  is_done: boolean;
}

export interface TaskList {
  tasks: TaskItemProps[];
}
