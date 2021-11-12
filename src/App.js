import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { AppContainer, AppContent } from "./App.style";
import { ROUTES } from "./values/routes";
import HomePage from "./pages/HomePage/HomePage";
import BoardPage from "./pages/BoardPage/BoardPage";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        <AppContent>
          <Routes>
            <Route exact path={ROUTES.HOME} element={<HomePage />} />
            <Route exact path={ROUTES.BOARD} element={<BoardPage />} />
          </Routes>
        </AppContent>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
