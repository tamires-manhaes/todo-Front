import React, { FormEvent, useEffect, useState } from 'react';
import { Container, Content, Form, ItemTask, TasksList, TaskBox, ActionsBox } from './style';
import { BiEdit, BiTrash, BiCheckCircle, BiXCircle } from 'react-icons/bi';
import { DeleteTask, EditTask, TaskItemProps } from '../../types';
import { getAllTodos, createToDo, deleteToDo, toDoDone} from '../../services/index';
import { useHistory } from 'react-router-dom';

const TaskItem: React.FC<TaskItemProps> = ({ id, task, is_done, editTodo, deleteTodo }) => {
  const [isDone, setIsDone] = useState<Boolean>(is_done);

  const setDoneTask = async (id: string, isDone: Boolean) => {
    const taskDone = isDone === true ? false : true;
    await toDoDone(id, taskDone);
    alert('task updated!!');
    window.location.reload();
  }

  return (
    <ItemTask>
      <TaskBox>
        <span className={`${is_done ? 'isDone' : 'notDone'}`}>{task}</span>
      </TaskBox>

      <ActionsBox>
        <button type="button" onClick={() => setDoneTask(id, isDone)} className={`${is_done ? 'isDone' : 'notDone'}`}>
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

        <button type="button" onClick={() => editTodo(id)} className="editButton">
          <BiEdit size={25} color="#fff" />
        </button>
      </ActionsBox>
    </ItemTask>
  );
}

const Home = () => {
  const [tasks, setTasks] = useState<TaskItemProps[]>([]);
  const [value, setValue] = useState<string>("");

  const addForm = async (event: FormEvent) => {
    event.preventDefault();
    if(value){
      const newTask = {
        task: value,
        is_done: false
      }
      
      const newTaskResponse = await createToDo(newTask);
      setTasks([...tasks, newTaskResponse]);
      window.location.reload();
    }
    
  }

  const deleteTask: DeleteTask = async (id: string) => {
    try {
      await deleteToDo(id);
      setTasks(tasks.filter(task => task.id !== id));
      alert('task deleted!');
    }catch(e){
      alert('error!');
    }
  }

  const editTask: EditTask = async (id: string) => {
    alert(id);
  }

  useEffect(() => {
    (async () => {
      const localTasks = await getAllTodos();
      setTasks(localTasks);
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
                editTodo={editTask}
              />
              ))
            }
        </TasksList>
      </Content>
    </Container>
  )
}

export default Home;
