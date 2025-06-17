import './StudentDashboard.css';
import { Line } from 'react-chartjs-2'; // Import Line chart
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Dir from "../components/Dir";
import Nav2 from "../components/Nav2";
import { studentNavItems } from '../data/navItems';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function StudentDashboard() {
  const stats = [
    { title: "Courses Enrolled", value: 8, icon: "📚", color: "blue" },
    { title: "Academic Performance(last session)", value: "90%", icon: "📝", color: "green" },
    { title: "Attendance Rate", value: "92%", icon: "📊", color: "orange" },
    { title: "Upcoming Exams", value: 3, icon: "🕒", color: "purple" },
    
  ];

  // Data for the line chart
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Assignment Submissions",
        data: [20, 40, 6, 8, 10, 12, 15],
        borderColor: "#6a0dad",
        backgroundColor: "rgba(106, 13, 173, 0.2)",
        tension: 0.4, // Smooth curve
        pointRadius: 3,
        pointBackgroundColor: "#6a0dad",
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Assignment Submissions Over Time",
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
    <div className="student-dashboard">
      <Nav2 navItems={studentNavItems} subtitle="Student Panel" />
      <div className="dashboard-content">
        <Dir />
        <h1 className="dashboard-heading">Dashboard</h1>
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className={`stat-card ${stat.color}`}>
              <div className="stat-icon">
                {stat.icon}
              </div>
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

export default StudentDashboard;