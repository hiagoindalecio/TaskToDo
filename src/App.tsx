import { Header } from "./components/Header";
import { NewTaskModal } from './components/NewTaskModal';
import { Dashboard } from "./components/Dashboard";

import { GlobalStyle } from "./styles/global";

function App() {

  return (
    <>
    <GlobalStyle />
    <Header />
    <Dashboard />
    <NewTaskModal />
    </>
  );
}

export default App;
