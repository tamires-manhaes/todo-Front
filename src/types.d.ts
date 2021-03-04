type DeleteTask = (taskId: string) => void;

type CreateTask = (Todo: CreateTodo) => void;

type EditTask = (taskId: string) => void;

export interface TaskItemProps {
  id: string,
  task: string,
  is_done: boolean,
  deleteTodo: DeleteTask,
  editTodo: EditTask
}

export interface CreateTodo {
  task: string,
  is_done: boolean
}

export interface TaskList {
  tasks: TaskItemProps[];
}
