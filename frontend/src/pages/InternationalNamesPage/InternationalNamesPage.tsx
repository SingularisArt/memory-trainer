import React, { useState } from "react";

import Home from "./Home";
import Memorize from "./Memorize";
import Preparation from "./Preparation";
import Recall from "./Recall";
import RecallBreak from "./RecallBreak";
import Status from "./Status";

import "./InternationalNamesPage.css";

type InternationalNamesPageProps = {};
type PageState =
  | "Home"
  | "Preparation"
  | "Memorize"
  | "RecallBreak"
  | "Recall"
  | "Status";

const InternationalNamesPage: React.FC<InternationalNamesPageProps> = () => {
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
        return <Recall onClick={() => setCurrentPage("Status")} />;
      case "Status":
        return <Status onClick={() => setCurrentPage("Home")} />;
      default:
        return null;
    }
  };

  return <div>{renderPage()}</div>;
};

export default InternationalNamesPage;
