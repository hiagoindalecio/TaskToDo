import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import { NewTaskModal } from './components/NewTaskModal';

function App() {

  return (
    <>
    <GlobalStyle />
    <Header />
    <NewTaskModal />
    </>
  );
}

export default App;
