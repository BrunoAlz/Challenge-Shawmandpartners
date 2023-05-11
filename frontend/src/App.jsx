import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UsersList from "./pages/UsersList";
import UserDetails from "./pages/UserDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Container } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<UsersList />} />
            <Route path="/" element={<UserDetails />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
