import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import { AppContainer, AppContent } from "./App.style";
import { ROUTES } from "./values/routes";
import HomePage from "./pages/HomePage/HomePage";
import BoardPage from "./pages/BoardPage/BoardPage";
import { useSelector } from "react-redux";

function App() {
  const finalState = useSelector((state) => state);
  console.log("store: ", finalState);

  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        <AppContent>
          <Routes>
            <Route exact path={ROUTES.HOME} element={<HomePage />} />
            <Route exact path={ROUTES.BOARD} element={<BoardPage />} />
            <Route
              path="*"
              element={<Navigate to={ROUTES.HOME} replace={true} />}
            />
          </Routes>
        </AppContent>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
