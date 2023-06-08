import { Route, Routes } from 'react-router-dom';

// Компоненты страниц
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import Header from './Header/Header';

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;
