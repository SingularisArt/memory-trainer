import React, { useState } from "react";

import RecallBreak from "./RecallBreak";
import Recall from "./Recall";
import Home from "./Home";
import Preparation from "./Preparation";
import Memorize from "./Memorize";
import Status from "./Status";

import "./CardsPage.css";

type CardsPageProps = {};

const CardsPage: React.FC<CardsPageProps> = () => {
  const [showHome, setShowHome] = useState(true);
  const [showPreparation, setShowPreparation] = useState(false);
  const [showMemorize, setShowMemorize] = useState(false);
  const [showRecallBreak, setShowRecallBreak] = useState(false);
  const [showRecall, setShowRecall] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  const onClickHome = () => {
    setShowStatus(false);
    setShowHome(true);
  };
  const onClickPreparation = () => {
    setShowHome(false);
    setShowPreparation(true);
  };
  const onClickMemorize = () => {
    setShowPreparation(false);
    setShowMemorize(true);
  };
  const onClickRecallBreak = () => {
    setShowMemorize(false);
    setShowRecallBreak(true);
  };
  const onClickRecall = () => {
    setShowRecallBreak(false);
    setShowRecall(true);
  };
  const onClickStatus = () => {
    setShowRecall(false);
    setShowStatus(true);
  };

  return (
    <div>
      {showHome ? <Home onClick={onClickPreparation} /> : null}
      {showPreparation ? <Preparation onClick={onClickMemorize} /> : null}
      {showMemorize ? <Memorize onClick={onClickRecallBreak} /> : null}
      {showRecallBreak ? <RecallBreak onClick={onClickRecall} /> : null}
      {showRecall ? <Recall onClick={onClickStatus} /> : null}
      {showStatus ? <Status onClick={onClickHome} /> : null}
    </div>
  );
};

export default CardsPage;
