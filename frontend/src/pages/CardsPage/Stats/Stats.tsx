import React, { useEffect, useState } from "react";
import {
  AreaSeries,
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Tooltip,
  DateTime,
  Legend,
  IPointEventArgs,
} from "@syncfusion/ej2-react-charts";
import axios from "axios";

import Header from "../../../components/Header/Header";

import { FormatSeconds } from "../../../utils/misc";
import { memoryTypes } from "../../../config/theme";

import Cards from "../../../images/headers/cards.png";
import "./Stats.css";

type StatsProps = {};

const DateRangeButton: React.FC<{ updateData: (range: string) => void }> = ({ updateData }) => {
  return (
    <div className="date-range-buttons">
      <button onClick={() => updateData("today")}>Today</button>
      <button onClick={() => updateData("week")}>This Week</button>
      <button onClick={() => updateData("month")}>This Month</button>
      <button onClick={() => updateData("allTime")}>All Time</button>
      <button onClick={() => updateData("custom")}>Custom Range</button>
    </div>
  );
};

const Stats: React.FC<StatsProps> = () => {
  const [cards, setCards] = useState([]);
  const [data, setData] = useState(cards);
  const [selectedData, setSelectedData] = useState(null);
  const [dateRange, setDateRange] = useState<string>("allTime");

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/cards");
        setCards(res.data);
        setData(res.data);
        if (res.data.length > 0) {
          setSelectedData(res.data[res.data.length - 1]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const updateData = (range: string) => {
    setDateRange(range);

    let newData = [...cards];

    if (range === "today") {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      newData = newData.filter((item) => new Date(item.date) >= today);
    } else if (range === "week") {
      const today = new Date();
      const firstDayOfWeek = today.getDate() - today.getDay();
      today.setDate(firstDayOfWeek);
      today.setHours(0, 0, 0, 0);
      newData = newData.filter((item) => new Date(item.date) >= today);
    } else if (range === "month") {
      const today = new Date();
      const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      firstDayOfMonth.setHours(0, 0, 0, 0);
      newData = newData.filter((item) => new Date(item.date) >= firstDayOfMonth);
    } else if (range === "custom") {
      // Implement custom range filtering logic here
    }

    setData(newData);
  };

  const processData = (data) => {
    return data.map((item) => {
      const dateObj = new Date(item.date);
      const formattedDate = dateObj.toLocaleString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });

      const formattedTime = dateObj.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      });

      const date = `Date: ${formattedDate} (${formattedTime})`

      const xValue = dateObj.getTime();
      const yValue =
        item.item === "Cards"
          ? item.number_of_items / 52
          : item.number_of_items;
      const finishedTime = `Finished Time: ${FormatSeconds(item.finished_time)}`;
      const score = `Score: ${(item.score * 100).toFixed(2)}%`;
      const cardsOrDecks =
        item.item === "Decks"
          ? `Decks: ${item.number_of_items}`
          : item.number_of_items === 52
          ? "Decks: 1"
          : `Cards: ${item.number_of_items}`;
      const memorizedCorrectly = `Correctly Memorized: ${item.number_of_correctly_memorized_items}`;
      const memorizedIncorrectly = `Incorrectly Memorized: ${item.number_of_incorrectly_memorized_items}`;

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

  const tooltipRender = (args) => {
    if (args.series && args.series.tooltipMappingName === "tooltip") {
      args.text = args.text.replace(/&amp;/g, "&");
    }
  };

  const calculateYAxisRange = (data) => {
    let maxDecks = 0;

    data.forEach((item) => {
      if (item.item === "Decks") {
        if (item.number_of_items > maxDecks) {
          maxDecks = item.number_of_items;
        }
      }
    });

    maxDecks = Math.ceil(maxDecks * 1.1);

    return { maxDecks };
  };

  const yAxisRange = calculateYAxisRange(data);

  const pointClick = (args: IPointEventArgs) => {
    setSelectedData(data[args.pointIndex]);
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
        <ChartComponent
          id="chart"
          primaryXAxis={{ valueType: "DateTime", labelFormat: "M/d/yyyy" }}
          primaryYAxis={{
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
              xName="date"
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

        <DateRangeButton updateData={updateData} />
      </div>

      <div className="more-detail">
        {selectedData ? (
          <>
            {(() => {
              const dateObj = new Date(selectedData.date);
              const formattedDate = dateObj.toLocaleString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              });

              const formattedTime = dateObj.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
              });

              return (
                <h1>
                  {formattedDate} ({formattedTime})
                </h1>
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
