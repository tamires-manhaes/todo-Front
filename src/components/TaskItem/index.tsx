import { BiXCircle, BiCheckCircle, BiTrash } from 'react-icons/bi';
import { toDoDone } from '../../services';
import { TaskItemProps } from '../../types';
import { ActionsBox, ItemTask, TaskBox } from './styles';

const TaskItem: React.FC<TaskItemProps> = ({
  id,
  task,
  is_done,
  deleteTodo,
}) => {
  const isDone = is_done;

  const setDoneTask = async (id: string, isDone: Boolean) => {
    const taskDone = isDone === true ? false : true;
    await toDoDone(id, taskDone);
    window.location.reload();
  };

  return (
    <ItemTask>
      <TaskBox>
        <span className={`${is_done ? 'isDone' : 'notDone'}`}>{task}</span>
      </TaskBox>

      <ActionsBox>
        <button
          type="button"
          onClick={() => setDoneTask(id, isDone)}
          className={`${is_done ? 'isDone' : 'notDone'}`}
          title={`${is_done ? 'done' : 'not done'}`}
        >
          {isDone === true ? (
            <BiXCircle size={25} />
          ) : (
            <BiCheckCircle size={25} />
          )}
        </button>

        <button
          type="button"
          onClick={() => deleteTodo(id)}
          className="deleteButton"
        >
          <BiTrash size={25} color="#fff" />
        </button>
      </ActionsBox>
    </ItemTask>
  );
};

export default TaskItem;
