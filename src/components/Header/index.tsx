import logoImg from '../../assets/logo.svg';

import { Container, Content, TextLogo } from './styles';

import { useModal } from '../../contexts/Modal/modalContext';

export function Header() {

  const { handleOpenNewTaskModal } = useModal();

  return (
    <Container>
      <Content>
        <TextLogo>
          <img src={logoImg} alt="Task To Do" />
          <span className='header-title'>Task To Do</span>
        </TextLogo>
        <button 
          type="button"
          onClick={handleOpenNewTaskModal}
          >
          Nova task
        </button>
      </Content>
    </Container>
  );
}