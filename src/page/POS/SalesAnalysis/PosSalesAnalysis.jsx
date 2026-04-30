import { useState } from 'react';
import { Pie, Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement, LineElement, PointElement, RadialLinearScale } from 'chart.js';

// Register necessary components for each type of chart
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement, LineElement, PointElement, RadialLinearScale);

// Chart configurations
const CHART_TYPES = {
  Pie: {
    Component: Pie,
    data: {
      datasets: [
        {
          label: "POS Charts",
          data: [300, 50, 100, 20, 40],
          backgroundColor: ["red", "blue", "yellow", "orange", "green"],
          hoverOffset: 5,
        },
      ],
      labels: ["Jan", "Feb", "March", "April", "May"],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom" },
      },
      layout: { padding: { bottom: 40 } },
    },
  },
  Line: {
    Component: Line,
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          type: "line",
          label: "Line Chart",
          data: [65, 59, 80, 81, 56],
          borderColor: "rgb(75, 192, 192)",
          fill: false,
        },
      ],
    },
  },
  Bar: {
    Component: Bar,
    data: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Revenue",
          data: [500, 400, 450, 300, 350],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgb(75, 192, 192)",
          borderWidth: 1,
        },
      ],
    },
  },
  Area: {
    Component: Line,
    data: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Area Chart",
          data: [65, 59, 80, 81, 56],
          fill: true,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.4,
        },
      ],
    },
  },
};

const PosSalesAnalysis = () => {
  const [chartShow, setChartShow] = useState("Pie");

  // Handle chart selection
  const handleChartShow = (event) => setChartShow(event.target.value);

  // Get chart data and component
  const { Component, data, options } = CHART_TYPES[chartShow];

  return (
    <div className="container mx-auto">
      {/* Chart Selector */}
      <div className="flex justify-center mb-8">
        <label htmlFor="chart-selector" className="sr-only">
          Select Chart Type
        </label>
        <select
          id="chart-selector"
          className="select select-accent w-auto"
          value={chartShow}
          onChange={handleChartShow}
        >
          {Object.keys(CHART_TYPES).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Chart Display */}
      <div className="h-72 w-full flex justify-center">
        <Component data={data} options={options} />
      </div>
    </div>
  );
};

export default PosSalesAnalysis;
