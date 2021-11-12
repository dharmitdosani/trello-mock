import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { AppContainer, AppContent } from "./App.style";
import { ROUTES } from "./values/routes";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        <AppContent>
          <Routes>
            <Route exact path={ROUTES.HOME} element={<Homepage />} />
          </Routes>
        </AppContent>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
