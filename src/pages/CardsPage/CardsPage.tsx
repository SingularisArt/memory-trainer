import React, { useState } from "react";

import Home from "./Home";
import Memorize from "./Memorize/Memorize";
import Preparation from "./Preparation";
import Recall from "./Recall/Recall";
import RecallBreak from "./RecallBreak";
import Score from "./Score";

import "./CardsPage.css";

type CardsPageProps = {};
type PageState =
  | "Home"
  | "Preparation"
  | "Memorize"
  | "RecallBreak"
  | "Recall"
  | "Score";

const CardsPage: React.FC<CardsPageProps> = () => {
  const [currentPage, setCurrentPage] = useState<PageState>("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home onClick={() => setCurrentPage("Preparation")} />;
      case "Preparation":
        return <Preparation onClick={() => setCurrentPage("Memorize")} />;
      case "Memorize":
        return <Memorize onClick={() => setCurrentPage("RecallBreak")} />;
      case "RecallBreak":
        return <RecallBreak onClick={() => setCurrentPage("Recall")} />;
      case "Recall":
        return <Recall onClick={() => setCurrentPage("Score")} />;
      case "Score":
        return <Score onClick={() => setCurrentPage("Home")} />;
      default:
        return null;
    }
  };

  return <div>{renderPage()}</div>;
};

export default CardsPage;
