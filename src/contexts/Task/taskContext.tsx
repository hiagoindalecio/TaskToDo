import React, {createContext, useContext, useState} from 'react';

import { task, TaskContextData } from '../../types/type';

const TaskContext = createContext<TaskContextData>({} as TaskContextData);

export const TaskProvider: React.FC = ({ children }) => {

  const [tasks, setTasks] = useState<task[]>([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      { children }
    </TaskContext.Provider>
  )
}

export function useTask() {
  return useContext(TaskContext);
}

export default TaskContext;