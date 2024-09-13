import "./App.css";
import { Routes, Route } from "react-router-dom";
import LPPage from "./Components/Pages/LPPage";
import MainPage from "./Components/Pages/MainPage";
import NotFoundPage from "./Components/Pages/NotFoundPage";
import Menu from "./Components/Menu/Menu";
import GroupList from "./Components/GroupList/GroupList";
import Dictionary from "./Components/Dictionary/Dictionary";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route path="main/*" element={<MainPage />}>
            <Route path="dictionary" element={<Dictionary />} />
            <Route path="groups" element={<GroupList />} />
          </Route>
          <Route path="/learn" element={<LPPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
