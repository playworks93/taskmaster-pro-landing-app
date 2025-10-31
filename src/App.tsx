import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import AuthenticationComponent from './components/AuthenticationComponent'
import TaskListComponent from './components/TaskListComponent'
import TaskDetailComponent from './components/TaskDetailComponent'
import UserProfileComponent from './components/UserProfileComponent'
import NotificationComponent from './components/NotificationComponent'

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
          <p className="tagline">Organize, Prioritize, Collaborate</p>
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
          <li>User Authentication</li>
          <li>Task Creation and Management</li>
          <li>Collaborative Task Assignment</li>
          <li>Priority and Deadline Setting</li>
          <li>Analytics and Progress Tracking</li>
          <li>Real-time Notifications</li>
          </ul>
        </div>
        <p>&copy; 2025 TaskMaster Pro. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App