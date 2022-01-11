import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { TaskProvider } from './contexts/Task/taskContext';
import { NewTaskModalProvider } from './contexts/Modal/modalContext';

ReactDOM.render(
  <React.StrictMode>
    <TaskProvider>
      <NewTaskModalProvider>
        <App />
      </NewTaskModalProvider>
    </TaskProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
