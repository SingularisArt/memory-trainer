import React, { useEffect, useState } from "react";
import {
  AreaSeries,
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Tooltip,
  DateTime,
  LineSeries,
  Legend,
  IPointEventArgs,
} from "@syncfusion/ej2-react-charts";
import axios from "axios";

import Header from "../../components/Header/Header";

import { FormatSeconds } from "../../utils/misc";
import { memoryTypes } from "../../config/theme";

import Cards from "../../images/headers/cards.png";
import "./CardsPage/CardsPage.css";

type StatsProps = {};

const Stats: React.FC<StatsProps> = () => {
  const [cards, setCards] = useState([]);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/cards");
        setCards(res.data);
        if (res.data.length > 0) {
          setSelectedData(res.data[res.data.length - 1]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const processData = (data) => {
    return data.map((item) => {
      const time = FormatSeconds(item.finished_time);

      const yValue =
        item.item === "Cards"
          ? Math.round(item.number_of_items / 52)
          : item.number_of_items;
      const tooltip = `Time: ${time}<br>Score: ${item.score * 100}<br>`;
      const extraInfo =
        item.item === "Decks"
          ? `Decks: ${item.number_of_items}`
          : item.number_of_items === 52
          ? "Decks: 1"
          : `Cards: ${item.number_of_items}`;

      return { ...item, yValue, tooltip: tooltip + extraInfo };
    });
  };

  const processedData = processData(cards);

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

  const yAxisRange = calculateYAxisRange(cards);

  const pointClick = (args: IPointEventArgs) => {
    setSelectedData(args.pointData);
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
          <Inject services={[AreaSeries, DateTime, LineSeries, Tooltip, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={processedData}
              xName="date"
              yName="yValue"
              type="Area"
              opacity={0.6}
              marker={{ visible: true }}
              fill='#69D2E7'
              tooltipMappingName="tooltip"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>

      <div className="more-detail">
        {selectedData ? (
          <>
            Time: {FormatSeconds(selectedData.finished_time)}<br />
            Score: {selectedData.score * 100}<br />
            {selectedData.item === "Decks" ? (
              `Decks: ${selectedData.number_of_items}`
            ) : selectedData.number_of_items === 52 ? (
              "Decks: 1"
            ) : (
              `Cards: ${selectedData.number_of_items}`
            )}
          </>
        ) : (
          "Select a point on the chart to view more details."
        )}
      </div>
    </div>
  );
};

export { Stats };
