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

  max-height: 520px;
  overflow-y: auto;
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

export const Loader = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, .7);
  display: flex;
  align-items: center;
  justify-content: center;

  .loader,
  .loader:before,
  .loader:after {
    border-radius: 50%;
  }

  .loader {
    color: var(--light-blue);
    font-size: 11px;
    text-indent: -99999em;
    margin: 55px auto;
    position: relative;
    width: 10em;
    height: 10em;
    box-shadow: inset 0 0 0 1em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }

  .loader:before,
  .loader:after {
    position: absolute;
    content: '';
  }

  .loader:before {
    width: 5.2em;
    height: 10.2em;
    background: #fff;
    border-radius: 10.2em 0 0 10.2em;
    top: -0.1em;
    left: -0.1em;
    -webkit-transform-origin: 5.1em 5.1em;
    transform-origin: 5.1em 5.1em;
    -webkit-animation: load2 2s infinite ease 1.5s;
    animation: load2 2s infinite ease 1.5s;
  }
  .loader:after {
    width: 5.2em;
    height: 10.2em;
    background: transparent;
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 4.9em;
    -webkit-transform-origin: 0.1em 5.1em;
    transform-origin: 0.1em 5.1em;
    -webkit-animation: load2 2s infinite ease;
    animation: load2 2s infinite ease;
  }

  @-webkit-keyframes load2 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load2 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
