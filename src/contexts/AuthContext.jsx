import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // TODO: Implement authentication logic
  const login = async (credentials) => {
    // Placeholder for login logic
    console.log('Login:', credentials)
    setIsAuthenticated(true)
    setUser({ role: 'admin', email: 'user@example.com' })
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
  }

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

