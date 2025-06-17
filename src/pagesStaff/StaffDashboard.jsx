import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LinearScale, CategoryScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"
import Nav2 from "../components/Nav2";
import Dir from "../components/Dir";
import { StaffNavItems } from "../data/navItems";
import "./StaffDashboard.css";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function StaffDashboard() {
  const stats = [
    { title: "Total Students", value: 1200, icon: "👨‍🎓", color: "blue" },
    { title: "Courses Assigned", value: 5, icon: "📚", color: "green" },
    { title: "Attendance Rate", value: "98%", icon: "📊", color: "orange" },
    { title: "Pending Tasks", value: 3, icon: "📝", color: "purple" },
  ];


  const chartData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "week 5", "week 6",],
    datasets: [
      {
        label: "My Attendance",
        data: [20, 40, 90, 50, 20, 100],
        borderColor: "#6a0dad",
        backgroundColor: "rgba(106, 13, 173, 0.2)",
        tension: 0.4,
        pointRadius: 3,
        pointBackgroundColor: "#6a0dad"
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Attendance for the Term",
        font: {
          size: 18,
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#ddd",
        },
      },
    }
  }
  return(
    <div className = "staff-dashboard" >
      <Nav2 navItems={StaffNavItems} subtitle="Staff Panel" />
      <div className="dashboard-content">
        <Dir />
        <h1 className="dashboard-heading">Dashboard</h1>
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className={`stat-card ${stat.color}`}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-info">
                <h2>{stat.value}</h2>
                <p>{stat.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="chart-section">
          <Line data={chartData} options={chartOptions}/>
        </div>
      </div>
    </div >
  );
}

export default StaffDashboard;