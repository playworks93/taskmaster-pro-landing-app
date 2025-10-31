import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import TaskList from './components/TaskList'
import TaskDetail from './components/TaskDetail'
import CollaborationPanel from './components/CollaborationPanel'
import AnalyticsDashboard from './components/AnalyticsDashboard'
import NotificationCenter from './components/NotificationCenter'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>TaskMaster Pro</h1>
          <p className="tagline">Empower Your Productivity</p>
        </div>
        {isAuthenticated && (
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        )}
      </header>

      <main className="app-main">
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <Auth onLogin={handleLogin} />
        )}
      </main>

      <footer className="app-footer">
        <div className="features">
          <h3>Key Features:</h3>
          <ul>
          <li>Task Creation & Management</li>
          <li>Collaboration Tools</li>
          <li>Advanced Analytics Dashboard</li>
          <li>Due Date & Reminders</li>
          <li>Integration with Calendar Apps</li>
          <li>Priority Tagging & Categorization</li>
          </ul>
        </div>
        <p>&copy; 2025 TaskMaster Pro. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App