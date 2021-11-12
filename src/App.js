import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import { AppContainer } from "./App.style";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
