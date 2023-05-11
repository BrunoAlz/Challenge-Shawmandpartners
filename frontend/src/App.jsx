import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UsersList from "./pages/UsersList";
import Header from "./components/Header"

import { Container } from "react-bootstrap";




function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<UsersList />} />
          </Routes>
        </Container>
      </main>
    </BrowserRouter>
  );
}

export default App;
