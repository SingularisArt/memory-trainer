import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import CardsPage from "../pages/CardsPage/CardsPage";
import ImagesPage from "../pages/ImagesPage/ImagesPage";
import InternationalNamesPage from "../pages/InternationalNamesPage/InternationalNamesPage";
import NamesPage from "../pages/NamesPage/NamesPage";
import NumbersPage from "../pages/NumbersPage/NumbersPage";
import WordsPage from "../pages/WordsPage/WordsPage";

import { Stats as CardsStats } from "../pages/CardsPage/Stats";
import { Stats as ImagesStats } from "../pages/ImagesPage/Stats";
import { Stats as InternationalNamesStats } from "../pages/InternationalNamesPage/Stats";
import { Stats as NamesStats } from "../pages/NamesPage/Stats";
import { Stats as NumbersStats } from "../pages/NumbersPage/Stats";
import { Stats as WordsStats } from "../pages/WordsPage/Stats";

import { mainTheme, memoryTypes } from "../config/theme";

import "./App.css";

export default function App() {
  const root = document.documentElement;
  root.style.setProperty("--background", mainTheme.background);
  root.style.setProperty("--foreground", mainTheme.foreground);

  root.style.setProperty("--primary-color", mainTheme.primaryColor);
  root.style.setProperty("--secondary-color", mainTheme.secondaryColor);

  root.style.setProperty("--text-color", mainTheme.textColor);
  root.style.setProperty("--accent-color", mainTheme.accentColor);
  root.style.setProperty("--input-border-color", mainTheme.inputBorderColor);

  root.style.setProperty("--error-color", mainTheme.errorColor);
  root.style.setProperty("--warning-color", mainTheme.warningColor);
  root.style.setProperty("--success-color", mainTheme.successColor);

  root.style.setProperty("--disabled-color", mainTheme.disabledColor);
  root.style.setProperty("--note-color", mainTheme.noteColor);

  root.style.setProperty(
    "--header-background-color",
    mainTheme.header.background
  );
  root.style.setProperty("--header-text-color", mainTheme.header.color);

  root.style.setProperty(
    "--button-ok-background-color",
    mainTheme.button.ok.background
  );
  root.style.setProperty("--button-ok-text-color", mainTheme.button.ok.color);
  root.style.setProperty(
    "--button-cancel-background-color",
    mainTheme.button.cancel.background
  );
  root.style.setProperty(
    "--button-cancel-text-color",
    mainTheme.button.cancel.color
  );

  root.style.setProperty(
    "--sidebar-background-color",
    mainTheme.sidebar.background
  );
  root.style.setProperty(
    "--sidebar-links-background-color",
    mainTheme.sidebar.links.background
  );
  root.style.setProperty(
    "--sidebar-links-text-color",
    mainTheme.sidebar.links.color
  );
  root.style.setProperty(
    "--sidebar-header-background-color",
    mainTheme.sidebar.header.background
  );
  root.style.setProperty(
    "--sidebar-header-text-color",
    mainTheme.sidebar.header.color
  );
  root.style.setProperty("--sidebar-header-width", mainTheme.sidebar.width);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/images" element={<ImagesPage />} />
        <Route
          path="/international-names"
          element={<InternationalNamesPage />}
        />
        <Route path="/names" element={<NamesPage />} />
        <Route path="/numbers" element={<NumbersPage />} />
        <Route path="/words" element={<WordsPage />} />

        <Route path="/cards/stats" element={<CardsStats />} />
        <Route path="/images/stats" element={<ImagesStats />} />
        <Route
          path="/international-names/stats"
          element={<InternationalNamesStats />}
        />
        <Route path="/names/stats" element={<NamesStats />} />
        <Route path="/numbers/stats" element={<NumbersStats />} />
        <Route path="/words/stats" element={<WordsStats />} />
      </Routes>
    </Router>
  );
}
