import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { AppContainer } from "./App.style";
import { ROUTES } from "./values/routes";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        <Routes>
          <Route exact path={ROUTES.HOME} element={<div>HOME</div>} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
