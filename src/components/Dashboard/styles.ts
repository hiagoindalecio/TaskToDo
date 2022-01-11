import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.div`
  hr {
    background-color: var(--text-body);
  }

  .coluna {
    border-radius: 3px;
    margin-right: 5px;
    margin-top: 10px;

    &:first-child {
      margin-left: 25px;
    }
    padding-bottom: 10px;
  }

  .task {
    background: var(--input-background);
    padding: 5px;
    border-radius: 3px;
  }

  .todo {
    background: ${transparentize(0.9, '#e52e4d')};
  }

  .doing {
    background: ${transparentize(0.9, '#5429cc')};
  }

  .backlog {
    background: ${transparentize(0.9, '#33cc95')};
  }
`;