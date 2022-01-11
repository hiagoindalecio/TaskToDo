import { FormEvent, useRef } from 'react';

import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';

import { useModal } from '../../contexts/Modal/modalContext';

import { findState, taskState } from '../../enums/enum';

import { useTask } from '../../contexts/Task/taskContext';

import { task } from '../../types/type';

import { Container } from './styles';

Modal.setAppElement('#root');

export function NewTaskModal() {

  const { isNewTaskModalOpen, handleCloseNewTaskModal } = useModal();
  const { setTasks, tasks } = useTask();

  const formElement = useRef<HTMLFormElement>(null);

  async function handleNewTask(e: FormEvent) {
    e.preventDefault();
    if(formElement.current) {
      const form = formElement?.current;
      console.log()
      const stateValue: taskState = findState(form['state'].value);

      const data: task = {
        title: form['titulo'].value,
        description: form['description'].value,
        state: stateValue
      };
      
      setTasks([...tasks, data]);
      handleCloseNewTaskModal();
    }
  }

  const options = Object.entries(taskState).map(
    (value: [string, taskState]) => value);
    
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
              <option key={option[0]} value={option[0]}>{option[1]}</option>
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