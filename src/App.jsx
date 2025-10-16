import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";

export default function App() {
  return (
    <BrowserRouter>
      <header style={{ padding: 20, background: "#222", color: "white" }}>
        <nav style={{ display: "flex", gap: 20 }}>
          <Link to="/books" style={{ color: "white" }}>Books</Link>
          <Link to="/add-book" style={{ color: "white" }}>Add Book</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="*" element={<h2 style={{ textAlign: "center" }}>404 Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}