import React, {createContext, useContext, useState} from 'react';

import { NewTaskModalContextData } from '../../types/type';

const NewTaskModalContext = createContext<NewTaskModalContextData>({} as NewTaskModalContextData);

export const NewTaskModalProvider: React.FC = ({ children }) => {

  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

  function handleOpenNewTaskModal() {
    setIsNewTaskModalOpen(true);
  }

  function handleCloseNewTaskModal() {
    setIsNewTaskModalOpen(false);
  }

  return (
    <NewTaskModalContext.Provider value={{ handleOpenNewTaskModal, handleCloseNewTaskModal, isNewTaskModalOpen }}>
      { children }
    </NewTaskModalContext.Provider>
  )
}

export function useModal() {
  return useContext(NewTaskModalContext);
}

export default NewTaskModalContext;