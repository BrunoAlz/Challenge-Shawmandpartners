import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UsersList from "./pages/UsersList";
import UserDetails from "./pages/UserDetails";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import { Container } from "react-bootstrap";
import NotFound404 from "./pages/NotFound404";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/users" element={<UsersList />} />
            <Route path="/users/:username/details" element={<UserDetails />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
