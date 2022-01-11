import { FormEvent, useRef } from 'react';

import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';

import { useModal } from '../../contexts/Modal/modalContext';

import { taskState } from '../../enums/enum';

import { Container } from './styles';

import { capitalize } from 'lodash';

Modal.setAppElement('#root');

export function NewTaskModal() {
  const { isNewTaskModalOpen, handleCloseNewTaskModal } = useModal();

  const formElement = useRef<HTMLFormElement>(null);

  async function handleNewTask(e: FormEvent) {
    e.preventDefault();
    if(formElement.current) {
      const form = formElement?.current;
      const data = {
        title: form['titulo'].value,
        text: form['description'].value
      };
      
      console.log(data);
    }
  }

  const options = Object.values(taskState).map(
    (value: string) => capitalize(value));
    
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
          placeholder='Descrição'
          name='description'
        />

        <select
          placeholder='Selecione'
          name='state'
        >
          {
            options.map(option => 
              <option key={option} value={option}>{option}</option>
            )
          }
        </select>

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}