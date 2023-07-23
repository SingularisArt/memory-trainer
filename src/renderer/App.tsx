import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import StatsPage from '../pages/StatsPage';
import CardsPage from '../pages/CardsPage';
import ImagesPage from '../pages/ImagesPage';
import InternationalNamesPage from '../pages/InternationalNamesPage';
import NamesPage from '../pages/NamesPage';
import NumbersPage from '../pages/NumbersPage/NumbersPage';
import WordsPage from '../pages/WordsPage';

import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/images" element={<ImagesPage />} />
        <Route
          path="/international-names"
          element={<InternationalNamesPage />}
        />
        <Route path="/names" element={<NamesPage />} />
        <Route path="/numbers" element={<NumbersPage />} />
        <Route path="/words" element={<WordsPage />} />
      </Routes>
    </Router>
  );
}
