import styled from 'styled-components';

export const Container = styled.header`
  background: var(--purple);
`;

export const TextLogo = styled.div`
  .header-title {
    color: var(--shape);
    margin-left: 10px;
  }

  display: flex;
  aling-items: center;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 3rem;

  display: flex;
  aling-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #FFF;
    background: var(--green);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;