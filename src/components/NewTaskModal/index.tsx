import { FormEvent, useEffect, useRef } from 'react';

import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';

import { Container } from './styles';

import { useModal } from '../../contexts/Modal/modalContext';

Modal.setAppElement('#root');

export function NewTaskModal() {
  const { isNewTaskModalOpen, handleCloseNewTaskModal, handleOpenNewTaskModal } = useModal();

  const formElement = useRef<HTMLFormElement>(null);

  async function handleNewTask(e: FormEvent) {
    e.preventDefault();
    if(formElement.current) {
      const form = formElement?.current;
      const data = {
        title: form['titulo'].value,
        text: form['text'].value
      };
      
      console.log(data);
    }
  }
    
  return (
    <Modal 
      isOpen={isNewTaskModalOpen}
      onRequestClose={handleCloseNewTaskModal}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button 
        type='button'
        onClick={handleCloseNewTaskModal}
        className='react-modal-close-button'
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container
        ref={formElement}
        onSubmit={handleNewTask}
      >
        <h2>Adicionar Task</h2>
        <input 
          type="text"
          placeholder='Título'
          name='titulo'
        />
        <input 
          type="text"
          placeholder='text'
          name='text'
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}