import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Tooltip,
  DateTime,
  LineSeries,
  Legend,
} from "@syncfusion/ej2-react-charts";

import { FormatSeconds } from "../utils/misc";

type ChartProps = {}

const Chart = ({ data }) => {
  console.log(data);

  const processData = (data) => {
    return data.map((item) => {
      const time = FormatSeconds(item.finishedTime);

      const yValue =
        item.item === "Cards"
          ? item.numberOfItems / 52
          : item.numberOfItems;
      const tooltip = `Time: ${time}<br>Score: ${item.score*100}<br>`;
      const extraInfo =
        item.item === "Decks"
          ? `Decks: ${item.numberOfItems}`
          : item.numberOfItems === 52
          ? "Decks: 1"
          : `Cards: ${item.numberOfItems}`;

      return { ...item, yValue, tooltip: tooltip + extraInfo };
    });
  };

  const processedData = processData(data);

  const tooltipRender = (args) => {
    if (args.series && args.series.tooltipMappingName === "tooltip") {
      args.text = args.text.replace(/&amp;/g, "&");
    }
  };

  return (
    <ChartComponent
      id="chart"
      primaryXAxis={{ valueType: "DateTime", labelFormat: "M/d/yyyy" }}
      tooltip={{ enable: true, format: "${point.tooltip}" }}
      tooltipRender={tooltipRender}
    >
      <Inject services={[DateTime, LineSeries, Tooltip, Legend]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={processedData}
          xName="date"
          yName="yValue"
          type="Line"
          marker={{ visible: true }}
          tooltipMappingName="tooltip"
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Chart;
