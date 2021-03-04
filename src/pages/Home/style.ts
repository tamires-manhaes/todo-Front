import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Content = styled.nav`
  background: var(--dark-blue);
  color: #fff;
  padding: 20px 40px;
  max-width: 1100px;
  width: 100%;
  min-height: 85vh;

  h1 {
    font-size: var(--font-large);
    font-weight: 900;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  > input {
    padding: 10px;
    min-width: 450px;
    border-radius: 4px;
    margin-right: 15px;
    border: none;
  }
`;

export const ItemTask = styled.li`
  background: #fff;
  color: #000;
  border-bottom: 1px solid var(--gray);
  padding: 5px 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TasksList = styled.ul`
  margin: 20px 0 0;
  padding: 10px 10px 0 10px;
  background: #fff;
`;

export const TaskBox = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--font-normal);

  > input{
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  > .isDone {
    text-decoration: line-through
  }

  > .notDone{
    text-decoration: none;
  }
`;

export const ActionsBox = styled.div`
  > button {
    border: none;
    margin: 0 5px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 250ms ease;
  }
  
  > .add , .cancel {
    height: 35px;
    width: 90px;
    padding: 5px 10px;
  }
  
  > .deleteButton , .editButton {
    padding: 5px;
  }

  > .deleteButton, .cancel {
    color: #fff;
    background: var(--red);
    border: 1px solid var(--red);

    &:hover {  
      background: #fff; 
      color: var(--red);
      border: 1px solid var(--red);
      > svg { color: var(--red) !important; }
    }
  }

  > .editButton, .add {
    background: var(--green);
    color: #fff;
    border: 1px solid var(--green);
    
    &:hover { 
      background: #fff;
      color: var(--green);
      border: 1px solid var(--green);
      > svg { color: var(--green) !important; }
    }
  }

  > .isDone, .notDone {
    border: 1px solid rgba(0,0,0, .1);
    height: 40px;
  }

  > .isDone {
    background: var(--white);
    color: var(--green);
  }

  > .notDone {
    background: var(--white);
    color: var(--red)
  }
`;
