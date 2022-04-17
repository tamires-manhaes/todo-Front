import styled from 'styled-components';

export const ItemTask = styled.li`
  background: #fff;
  color: #000;
  border-bottom: 1px solid var(--gray);
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TaskBox = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--font-normal);

  > input {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  > .isDone {
    text-decoration: line-through;
  }

  > .notDone {
    text-decoration: none;
  }
`;

export const ActionsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > button {
    border: none;
    margin: 0 5px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 250ms ease;
  }

  > .add,
  .cancel {
    height: 35px;
    width: 90px;
    padding: 5px 10px;
  }

  > .deleteButton,
  .editButton {
    padding: 5px;
  }

  > .deleteButton,
  .cancel {
    color: #fff;
    background: var(--red);
    border: 1px solid var(--red);

    &:hover {
      background: #fff;
      color: var(--red);
      border: 1px solid var(--red);
      > svg {
        color: var(--red) !important;
      }
    }
  }

  > .editButton,
  .add {
    background: var(--green);
    color: #fff;
    border: 1px solid var(--green);

    &:hover {
      background: #fff;
      color: var(--green);
      border: 1px solid var(--green);
      > svg {
        color: var(--green) !important;
      }
    }
  }

  > .isDone,
  .notDone,
  .deleteButton {
    height: 35px;
  }

  > .isDone {
    background: var(--white);
    color: var(--red);
    border: 1px solid var(--red);

    &:hover {
      background: var(--red);
      color: var(--white);
      border: 1px solid var(--white);
      > svg {
        color: var(--white) !important;
      }
    }
  }

  > .notDone {
    background: var(--white);
    color: var(--green);
    border: 1px solid var(--green);

    &:hover {
      background: var(--green);
      color: var(--green);
      border: 1px solid var(--green);
      > svg {
        color: var(--white) !important;
      }
    }
  }
`;
