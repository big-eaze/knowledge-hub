
import { Line } from 'react-chartjs-2'; // Import Line chart
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Dir from "../components/Dir";
import Nav2 from "../components/Nav2";
import { adminNavItems} from '../data/navItems.js';
import './Dashboard.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Dashboard() {
  const stats = [
    { title: "Total Students", value: 1200, icon: "👨‍🎓", color: "blue" },
    { title: "Total Staff", value: 150, icon: "👩‍🏫", color: "green" },
    { title: "Attendance Rate", value: "95%", icon: "📊", color: "orange" },
    { title: "Uploaded Results", value: 320, icon: "📄", color: "purple" },
  ];

  // Data for the line chart
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Student Growth",
        data: [100, 200, 300, 400, 100, 800, 700],
        borderColor: "#6a0dad",
        backgroundColor: "rgba(106, 13, 173, 0.2)",
        tension: 0.4, // Smooth curve
        pointRadius: 3,
        pointBackgroundColor: "#6a0dad",
      },
      {
        label: "Staff Growth",
        data: [50, 100, 100, 78, 200, 220, 310],
        borderColor: "#3498db",
        backgroundColor: "rgba(52, 152, 219, 0.2)",
        tension: 0.4,
        pointRadius: 3,
        pointBackgroundColor: "red",
      }
    ],
    
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Student Growth Over Time",
        font: {
          size: 18,
        },
      },
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
    },
  };

  return (
    <div className="dashboard">
      <Nav2 navItems={adminNavItems} subtitle="Admin Panel"/>
      <div className="dashboard-content">
        <Dir />
        <h1 className="dashboard-heading">Dashboard Overview</h1>
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
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;