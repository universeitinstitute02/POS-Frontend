"use client";

import { useState } from 'react';
import { Pie, Line, Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  Title, 
  Tooltip, 
  Legend, 
  ArcElement, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  LineElement, 
  PointElement, 
  RadialLinearScale,
  Filler
} from 'chart.js';

// Register necessary components for each type of chart
ChartJS.register(
  Title, 
  Tooltip, 
  Legend, 
  ArcElement, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  LineElement, 
  PointElement, 
  RadialLinearScale,
  Filler
);

// Chart configurations
const CHART_TYPES = {
  Pie: {
    Component: Pie,
    data: {
      datasets: [
        {
          label: "POS Charts",
          data: [300, 50, 100, 20, 40],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF9F40", "#4BC0C0"],
          hoverOffset: 10,
        },
      ],
      labels: ["Jan", "Feb", "March", "April", "May"],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom" },
      },
    },
  },
  Line: {
    Component: Line,
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          label: "Line Chart",
          data: [65, 59, 80, 81, 56],
          borderColor: "#36A2EB",
          backgroundColor: "rgba(54, 162, 235, 0.1)",
          fill: false,
          tension: 0.3
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom" },
      },
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
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgb(75, 192, 192)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom" },
      },
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
          backgroundColor: "rgba(153, 102, 255, 0.2)",
          borderColor: "rgb(153, 102, 255)",
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom" },
      },
    },
  },
};

import { HiOutlinePresentationChartLine, HiOutlineChartBar, HiOutlineTrendingUp, HiOutlineCube, HiOutlineUserGroup, HiOutlineCurrencyDollar } from 'react-icons/hi';

const PosSalesAnalysis = () => {
  const [chartShow, setChartShow] = useState("Pie");

  // Handle chart selection
  const handleChartShow = (event) => setChartShow(event.target.value);

  // Get chart data and component
  const { Component, data, options } = CHART_TYPES[chartShow];

  const stats = [
    { label: 'Total Sales', value: '$12,450', color: 'indigo', icon: HiOutlineCurrencyDollar, trend: '+12.5%' },
    { label: 'Total Orders', value: '154', color: 'emerald', icon: HiOutlineCube, trend: '+5.2%' },
    { label: 'Avg Order', value: '$80.84', color: 'violet', icon: HiOutlineTrendingUp, trend: '-2.1%' },
    { label: 'New Customers', value: '12', color: 'amber', icon: HiOutlineUserGroup, trend: '+8.4%' }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Sales Analysis</h1>
          <p className="text-slate-500 mt-1">Real-time business performance and data visualization.</p>
        </div>
        <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
          {Object.keys(CHART_TYPES).map((type) => (
            <button
              key={type}
              onClick={() => setChartShow(type)}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                chartShow === type 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' 
                : 'text-slate-500 hover:text-indigo-600'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols- stat-cards gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={i} className="card-modern p-6 group hover:border-indigo-200 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-2xl bg-${stat.color}-50 text-${stat.color}-600 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className={`text-xs font-black px-2 py-1 rounded-lg ${stat.trend.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                {stat.trend}
              </span>
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            <p className="text-2xl font-black text-slate-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="card-modern p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-6 bg-indigo-600 rounded-full"></div>
            <h2 className="text-xl font-bold text-slate-900">{chartShow} Visualization</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
              Current Period
            </div>
          </div>
        </div>
        
        <div className="h-[400px] w-full flex justify-center items-center">
          <div className="w-full h-full max-w-4xl">
            <Component data={data} options={{
              ...options,
              maintainAspectRatio: false,
              plugins: {
                ...options.plugins,
                legend: {
                  ...options.plugins.legend,
                  labels: {
                    usePointStyle: true,
                    padding: 20,
                    font: {
                      family: "'Inter', sans-serif",
                      weight: 'bold',
                      size: 11
                    }
                  }
                }
              }
            }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosSalesAnalysis;
