import { useState } from 'react'

interface DashboardProps {}

const Dashboard = (props: DashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <button 
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'task_creation_&_management' ? 'active' : ''}
          onClick={() => setActiveTab('task_creation_&_management')}
        >
          Task Creation & Management
        </button>
        <button 
          className={activeTab === 'collaboration_tools' ? 'active' : ''}
          onClick={() => setActiveTab('collaboration_tools')}
        >
          Collaboration Tools
        </button>
        <button 
          className={activeTab === 'advanced_analytics_dashboard' ? 'active' : ''}
          onClick={() => setActiveTab('advanced_analytics_dashboard')}
        >
          Advanced Analytics Dashboard
        </button>
      </nav>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="tab-content">
            <h2>Dashboard Overview</h2>
            <div className="cards">
              <div className="card">
                <h3>Total Users</h3>
                <p className="stat">1,234</p>
              </div>
              <div className="card">
                <h3>Active Sessions</h3>
                <p className="stat">567</p>
              </div>
              <div className="card">
                <h3>Revenue</h3>
                <p className="stat">$12,345</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'task_creation_&_management' && (
          <div className="tab-content">
            <h2>Task Creation & Management</h2>
            <p>Manage your task creation & management here.</p>
          </div>
        )}

        {activeTab === 'collaboration_tools' && (
          <div className="tab-content">
            <h2>Collaboration Tools</h2>
            <p>Manage your collaboration tools here.</p>
          </div>
        )}

        {activeTab === 'advanced_analytics_dashboard' && (
          <div className="tab-content">
            <h2>Advanced Analytics Dashboard</h2>
            <p>Manage your advanced analytics dashboard here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard