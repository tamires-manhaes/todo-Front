import React, { FormEvent, useContext, useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import TaskItem from '../../components/TaskItem';
import { Container, Content, Form, TasksList } from './style';
import { ActionsBox } from '../../components/TaskItem/styles';
import { ToDoContext } from '../../context/ToDo';
import { LoadingContext } from '../../context/Loading';

const Home = () => {
  const { todos, addTodo, deleteTodo, getAlltodos } = useContext(ToDoContext);
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [value, setValue] = useState<string>('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value.length === 1) {
      alert('adicione uma task!');
    } else {
      setIsLoading(true);
      addTodo(value);
      setValue(' ');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getAlltodos();
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Content>
        <h1>To-Do List</h1>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="Add Task"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ActionsBox>
            <button type="submit" className="add">
              Adicionar
            </button>

            <button
              type="reset"
              onClick={(e) => setValue(' ')}
              className="cancel"
            >
              Cancelar
            </button>
          </ActionsBox>
        </Form>
        <TasksList>
          {todos &&
            todos.map((task) => (
              <TaskItem
                key={task.id}
                id={task.id}
                task={task.task}
                is_done={task.is_done}
                deleteTodo={deleteTodo}
              />
            ))}
        </TasksList>

        <Loading isLoading={isLoading} />
      </Content>
    </Container>
  );
};

export default Home;
