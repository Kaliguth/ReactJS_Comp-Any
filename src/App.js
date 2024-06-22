import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./App.css";
import HomePage from "./pages/HomePage";
import Layout from "./layouts/Layout";
import FavoritesPage from "./pages/FavoritesPage";
import ContextProvider from "./context/Context";
import EmployeeDetailsPage from "./pages/EmployeeDetailsPage";
import Page404 from "./pages/Page404";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/employee" element={<EmployeeDetailsPage />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </ContextProvider>
  );
}

export default App;
