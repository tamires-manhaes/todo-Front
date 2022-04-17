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
    text-align: center;
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

export const TasksList = styled.ul`
  margin: 20px 0 0;
  padding: 10px 10px 0 10px;
  background: #fff;

  max-height: 520px;
  overflow-y: auto;
`;
