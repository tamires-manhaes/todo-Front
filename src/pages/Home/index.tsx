import React, { FormEvent, useEffect, useState } from 'react';
import { Container, Content, Form, ItemTask, TasksList, TaskBox, ActionsBox, Loader } from './style';
import { BiTrash, BiCheckCircle, BiXCircle } from 'react-icons/bi';
import { DeleteTask,  ILoader, TaskItemProps } from '../../types';
import { getAllTodos, createToDo, deleteToDo, toDoDone} from '../../services/index';

const Loading: React.FC<ILoader> = ({ isLoading }) => {
  return (
    <>
      {
        isLoading ? (
          <Loader>
            <div className="loader">Loading...</div>
          </Loader>
        )  : (
          <span></span>
        )
      }
    </>
  );
}

const TaskItem: React.FC<TaskItemProps> = ({ id, task, is_done, deleteTodo }) => {
  const isDone = is_done;

  const setDoneTask = async (id: string, isDone: Boolean) => {
    const taskDone = isDone === true ? false : true;
    await toDoDone(id, taskDone);
    window.location.reload();
  }

  return (
    <ItemTask>
      <TaskBox>
        <span className={`${is_done ? 'isDone' : 'notDone'}`}>{task}</span>
      </TaskBox>

      <ActionsBox>
        <button type="button" onClick={() => setDoneTask(id, isDone)} className={`${is_done ? 'isDone' : 'notDone'}`} title={`${is_done ? 'done' : 'not done'}`}>
          {
           isDone === true ? (
            <BiXCircle size={25} color="var(--red)" />
           ) : (
            <BiCheckCircle size={25} color="var(--green)" />
          )
          }
        </button>

        <button type="button" onClick={() => deleteTodo(id)} className="deleteButton">
          <BiTrash size={25} color="#fff" />
        </button>
      </ActionsBox>
    </ItemTask>
  );
}

const Home = () => {
  const [tasks, setTasks] = useState<TaskItemProps[]>([]);
  const [value, setValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  const addForm = async (event: FormEvent) => {
    event.preventDefault();
    if(value){
      const newTask = {
        task: value,
        is_done: false
      }

      setIsLoading(true);
      const newTaskResponse = await createToDo(newTask);
      setTasks([...tasks, newTaskResponse]);
      setIsLoading(false);
    }
    
  }

  const deleteTask: DeleteTask = async (id: string) => {
    try {
      setIsLoading(true);
      await deleteToDo(id);
      setTasks(tasks.filter(task => task.id !== id));
      setValue(` `);
      setIsLoading(false);
    }catch(e){
      alert('error!');
    }
  }

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const localTasks = await getAllTodos();
      setTasks(localTasks);
      setIsLoading(false);
    })()
  }, []);

  return (
    <Container>
      <Content>
        <h1>To-Do List</h1>
        <Form onSubmit={addForm}>
          <input 
            type="text" 
            required  
            placeholder="Add Task" 
            onChange={e => setValue(e.target.value)} 
          />
          <ActionsBox>
            <button 
              type="submit" 
              className="add"
            >
              Adicionar
            </button>

            <button 
              type="reset" 
              onClick={e => setValue(" ")} 
              className="cancel"
            >
              Cancelar
            </button>
          </ActionsBox>

        </Form>
        <TasksList>
          {
            tasks && tasks.map(task => (
              <TaskItem 
                key={task.id} 
                id={task.id} 
                task={task.task} 
                is_done={task.is_done} 
                deleteTodo={deleteTask} 
              />
            ))
          }
        </TasksList>

        <Loading isLoading={isLoading}/>

      </Content>
    </Container>
  )
}

export default Home;
