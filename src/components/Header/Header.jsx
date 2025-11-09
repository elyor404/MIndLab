import { useState } from 'react'
import {
  Box,
  IconButton,
  Button,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material'
import {
  Add as AddIcon,
  Notifications as NotificationsIcon,
  MenuBook as MenuBookIcon,
  PersonAdd as PersonAddIcon,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null)
  const [notificationAnchor, setNotificationAnchor] = useState(null)
  const [createMenuAnchor, setCreateMenuAnchor] = useState(null)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    handleMenuClose()
    // TODO: Implement logout logic
    console.log('Logout clicked')
  }

  const handleNotificationClick = (event) => {
    setNotificationAnchor(event.currentTarget)
  }

  const handleNotificationClose = () => {
    setNotificationAnchor(null)
  }

  const handleCreateMenuOpen = (event) => {
    setCreateMenuAnchor(event.currentTarget)
  }

  const handleCreateMenuClose = () => {
    setCreateMenuAnchor(null)
  }

  const handleCreateCourse = () => {
    handleCreateMenuClose()
    navigate('/courses/create')
  }

  const handleAddStudent = () => {
    handleCreateMenuClose()
    // TODO: Navigate to add student page
    console.log('Add Student clicked')
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '56px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src="/logo.svg"
        alt="MindLab Logo"
        sx={{
          height: 32,
          width: 'auto',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/home')}
      />

      {/* Right side actions */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: '#232323ff',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#030303ff',
            },
            borderRadius: '8px',
            px: 2,
          }}
          onClick={handleCreateMenuOpen}
        >
          Create
        </Button>

        <Menu
          anchorEl={createMenuAnchor}
          open={Boolean(createMenuAnchor)}
          onClose={handleCreateMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left', // menu chapga joylashadi (tugma ostida markazlashgan)
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          PaperProps={{
            elevation: 3,
            sx: {
              mt: 1,
              borderRadius: '12px',
              boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
              minWidth: 180,
              py: 0.5,
            },
          }}
        >
          <MenuItem
            onClick={handleCreateCourse}
            sx={{
              py: 1,
              px: 2,
              gap: 1.5,
              fontSize: '14px',
              '&:hover': { backgroundColor: '#f5f5f5' },
            }}
          >
            <MenuBookIcon sx={{ fontSize: 20, color: '#333' }} />
            Create Course
          </MenuItem>

          <MenuItem
            onClick={handleAddStudent}
            sx={{
              py: 1,
              px: 2,
              gap: 1.5,
              fontSize: '14px',
              '&:hover': { backgroundColor: '#f5f5f5' },
            }}
          >
            <PersonAddIcon sx={{ fontSize: 20, color: '#333' }} />
            Add Student
          </MenuItem>
        </Menu>


        <IconButton
          onClick={handleNotificationClick}
          sx={{
            color: '#363636ff',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: '#f5f5f5',
            },
          }}
        >
          <NotificationsIcon />
        </IconButton>

        <IconButton
          onClick={handleProfileMenuOpen}
          sx={{
            p: 0,
            ml: 1,
          }}
        >
          <Avatar
            sx={{
              width: 40,
              height: 40,
              bgcolor: '#1976d2',
            }}
          >
            U
          </Avatar>
        </IconButton>

        {/* Profile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>

        {/* Notification Menu */}
        <Menu
          anchorEl={notificationAnchor}
          open={Boolean(notificationAnchor)}
          onClose={handleNotificationClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleNotificationClose}>
            No notifications
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  )
}

export default Header

