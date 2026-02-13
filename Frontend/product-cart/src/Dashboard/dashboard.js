import  './dashboard.css'
const Dashboard = () => {
    return (
        <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="cards-container">
        <div className="dashboard-card todo">
          <h2>Todo Tasks</h2>
          <p>Manage your daily tasks efficiently.</p>
          <button>View Tasks</button>
        </div>

        <div className="dashboard-card pending">
          <h2>Pending Tasks</h2>
          <p>Track tasks that are in progress.</p>
          <button>Check Pending</button>
        </div>

        <div className="dashboard-card completed">
          <h2>Completed Tasks</h2>
          <p>Review your completed work.</p>
          <button>View Completed</button>
        </div>
      </div>
    </div>
    )
}
export default Dashboard;