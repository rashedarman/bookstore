import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import BooksPage from './pages/Books';
import CategoriesPage from './pages/Categories';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
