import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      <Header />
      <Box 
        sx={{ 
          display: 'flex', 
          flex: 1, 
          overflow: 'hidden', 
          marginTop: '56px',
          height: 'calc(100vh - 56px)',
        }}
      >
        <Sidebar open={sidebarOpen} onToggle={handleSidebarToggle} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflow: 'auto',
            backgroundColor: '#ffffff',
            width: '100%',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}

export default DashboardLayout

