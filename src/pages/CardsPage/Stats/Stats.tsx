import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";

import {
  AreaSeries,
  ChartComponent,
  DateTime,
  IPointEventArgs,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import Button from "../../../components/Button";
import Header from "../../../components/Header/Header";
import DisplayCorrectCards from "../DisplayCorrectCards";

import { memoryTypes } from "../../../config/theme";
import { FormatSeconds } from "../../../utils/misc";

import Cards from "../../../images/headers/cards.png";
import "../GlobalStyles.css";
import "./Stats.css";

type StatsProps = {};
type CardsState = {
  username: string;
  date: string;
  finishedTime: number;
  score: number;
  item: string;
  numberOfItems: number;
  actualCardData: string;
  memorizedCardData: string;
  numberOfCorrectlyMemorizedItems: number;
  numberOfIncorrectlyMemorizedItems: number;
};

type FormatState =
  | "h a"
  | "EEEE"
  | "d MMM"
  | "MMM yyyy";

type IntervalState =
  | "Hours"
  | "Days"
  | "Months";

type DateRange =
  | "today"
  | "week"
  | "month"
  | "allTime"
  | "custom";

const Stats: React.FC<StatsProps> = () => {
  const [cards, setCards] = useState<CardsState[]>([]);
  const [format, setFormat] = useState<FormatState>("MMM yyyy");
  const [interval, setInterval] = useState<IntervalState>("Months");
  const [data, setData] = useState<CardsState[]>(cards);
  const [selectedData, setSelectedData] = useState<CardsState | null>(null);
  const [dateRange, setDateRange] = useState<DateRange>("allTime");
  const [currentDeck, setCurrentDeck] = useState<number>(0);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/cards");
        setCards(res.data);
        setData(res.data);
        if (res.data.length > 0) {
          setSelectedData(res.data[res.data.length - 1]);
        }
      } catch (err) {}
    };
    fetchAllBooks();
  }, []);

  const updateData = (range: DateRange) => {
    setDateRange(range);

    let newData = [...cards];

    if (range === "today") {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      newData = newData.filter((item) => new Date(item.date) >= today);

      setInterval("Hours");
      setFormat("h a");
    } else if (range === "week") {
      const today = new Date();
      const firstDayOfWeek = today.getDate() - today.getDay();
      today.setDate(firstDayOfWeek);
      today.setHours(0, 0, 0, 0);
      newData = newData.filter((item) => new Date(item.date) >= today);

      setInterval("Days");
      setFormat("EEEE");
    } else if (range === "month") {
      const today = new Date();
      const firstDayOfMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        1,
      );
      firstDayOfMonth.setHours(0, 0, 0, 0);
      newData = newData.filter(
        (item) => new Date(item.date) >= firstDayOfMonth,
      );

      setInterval("Days");
      setFormat("d MMM");
    } else if (range === "allTime") {
      setInterval("Months");
      setFormat("MMM yyyy");
    } else if (range === "custom") {
      // TODO: Implement custom date range
    }

    setSelectedData(newData[newData.length - 1]);
    setData(newData);
  };

  const processData = (data: typeof cards) => {
    if (!data) return [];

    return data.map((item) => {
      try {
        item.memorizedCardData = JSON.parse(item.memorizedCardData);
        item.actualCardData = JSON.parse(item.actualCardData);
      } catch (err) {}

      const dateObj = new Date(item.date);
      const formattedDate = dateObj.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      });

      const formattedTime = dateObj.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });

      const date = `Date: ${formattedDate} (${formattedTime})`;
      const xValue: number = dateObj.getTime();

      const yValue =
        item.item === "Cards"
          ? item.numberOfItems / 52
          : item.numberOfItems;
      const finishedTime = `Finished Time: ${FormatSeconds(
        item.finishedTime,
      )}`;
      const score = `Score: ${(item.score * 100).toFixed(2)}%`;
      const cardsOrDecks =
        item.item === "Decks"
          ? `Decks: ${item.numberOfItems}`
          : item.numberOfItems === 52
          ? "Decks: 1"
          : `Cards: ${item.numberOfItems}`;
      const memorizedCorrectly = `Correctly Memorized: ${item.numberOfCorrectlyMemorizedItems}`;
      const memorizedIncorrectly = `Incorrectly Memorized: ${item.numberOfIncorrectlyMemorizedItems}`;

      const tooltip =
        date +
        "<br>" +
        finishedTime +
        "<br>" +
        score +
        "<br>" +
        cardsOrDecks +
        "<br>" +
        memorizedCorrectly +
        "<br>" +
        memorizedIncorrectly;

      return { ...item, xValue, yValue, tooltip };
    });
  };

  const processedData = processData(data);

  const tooltipRender = (args: any) => {
    if (args.series && args.series.tooltipMappingName === "tooltip") {
      args.text = args.text.replace(/&amp;/g, "&");
    }
  };

  const calculateYAxisRange = (data: typeof cards): { maxDecks: number } => {
    let maxDecks = 0;

    data.forEach((item) => {
      if (item.item === "Decks") {
        if (item.numberOfItems > maxDecks) {
          maxDecks = item.numberOfItems;
        }
      }
    });

    maxDecks = Math.ceil(maxDecks * 1.1);

    return { maxDecks };
  };

  const yAxisRange = calculateYAxisRange(data);

  const pointClick = (args: IPointEventArgs) => {
    setCurrentDeck(0);
    setSelectedData(data[args.pointIndex]);
  };

  const displayDecksOfCards = () => {
    if (!selectedData) return <></>;

    const data = selectedData.memorizedCardData;
    if (Object.keys(data).length === 0) return <></>;

    return (
      <div className="change-deck-of-cards">
        {Object.keys(data).length > 1 && (
          <>
            {Object.keys(data).map((_key, index) => (
              <Button
                key={index}
                text={(index + 1).toString()}
                className={`change-deck-button ${
                  currentDeck === index ? "change-deck-button-enabled" : ""
                }`}
                onClick={() => {
                  setCurrentDeck(index);
                }}
              />
            ))}
          </>
        )}
      </div>
    );
  };

  return (
    <div>
      <Header
        title="Cards (Stats)"
        color={memoryTypes.cards.color}
        image={Cards}
        link="/cards"
        buttonText="Cards"
      />

      <div className="graph">
        <div className="date-range-buttons">
          <Button
            className={
              dateRange == "today"
                ? "date-range-button-enabled"
                : "date-range-button"
            }
            onClick={() => updateData("today")}
            text="Today"
          />
          <Button
            className={
              dateRange == "week"
                ? "date-range-button-enabled"
                : "date-range-button"
            }
            onClick={() => updateData("week")}
            text="This Week"
          />
          <Button
            className={
              dateRange == "month"
                ? "date-range-button-enabled"
                : "date-range-button"
            }
            onClick={() => updateData("month")}
            text="This Month"
          />
          <Button
            className={
              dateRange == "allTime"
                ? "date-range-button-enabled"
                : "date-range-button"
            }
            onClick={() => updateData("allTime")}
            text="All Time"
          />
          <Button
            className={
              dateRange == "custom"
                ? "date-range-button-enabled"
                : "date-range-button"
            }
            onClick={() => updateData("custom")}
            text="Custom Range"
          />
        </div>

        <ChartComponent
          primaryXAxis={{
            valueType: "DateTime",
            intervalType: interval,
            labelFormat: format,
          }}
          primaryYAxis={{
            title: "Decks",
            minimum: 0,
            maximum: yAxisRange.maxDecks,
            interval: 1,
            labelFormat: "{value}",
          }}
          tooltip={{ enable: true, format: "${point.tooltip}" }}
          tooltipRender={tooltipRender}
          pointClick={pointClick}
        >
          <Inject services={[DateTime, AreaSeries, Tooltip, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={processedData}
              xName="xValue"
              yName="yValue"
              type="Area"
              opacity={0.6}
              marker={{ visible: true }}
              fill="#69D2E7"
              border={{ width: 2, color: "#44F3E5" }}
              tooltipMappingName="tooltip"
              width={2}
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>

      <div className="more-detail">
        {selectedData ? (
          <>
            {(() => {
              const actualDeck = selectedData.actualCardData[currentDeck];
              const memorizedDeck =
                selectedData.memorizedCardData[currentDeck];

              const dateObj = new Date(selectedData.date);
              const formattedDate = dateObj.toLocaleString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric",
              });

              const formattedTime = dateObj.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
              });

              return (
                <div>
                  <Typography
                    className="title"
                    gutterBottom
                    variant="h3"
                    component="div"
                    sx={{ color: memoryTypes.cards.color }}
                  >
                    {formattedDate} ({formattedTime})
                  </Typography>

                  {displayDecksOfCards()}

                  <DisplayCorrectCards
                    actualDeck={actualDeck}
                    memorizedDeck={memorizedDeck}
                  />
                </div>
              );
            })()}
          </>
        ) : (
          "Select a point on the chart to view more details."
        )}
      </div>
    </div>
  );
};

export { Stats };
