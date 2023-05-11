import "./App.css";
import UsersList from "./pages/UsersList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
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
