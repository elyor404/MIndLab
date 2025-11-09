import { useLocation, useNavigate } from 'react-router-dom'
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material'
import {
  Home as HomeIcon,
  MenuBook as CoursesIcon,
  Groups as GroupsIcon,
  People as UsersIcon,
} from '@mui/icons-material'

const menuItems = [
  { id: 'home', label: 'Home', icon: HomeIcon, path: '/home' },
  { id: 'courses', label: 'Courses', icon: CoursesIcon, path: '/courses' },
  { id: 'groups', label: 'Groups', icon: GroupsIcon, path: '/groups' },
  { id: 'users', label: 'Users', icon: UsersIcon, path: '/users', adminOnly: true },
]

const Sidebar = ({ open, onToggle }) => {
  const location = useLocation()
  const navigate = useNavigate()
  // TODO: Get user role from context/state
  const userRole = 'admin' // This should come from auth context

  const filteredMenuItems = menuItems.filter(
    (item) => !item.adminOnly || userRole === 'admin'
  )

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <Box
      sx={{
        width: 92,
        backgroundColor: '#f5f5f5',
        borderRight: '1px solid #e0e0e0',
        transition: 'width 0.3s ease',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <List sx={{ pt: 1, pb: 1, px: 0 }}>
        {filteredMenuItems.map((item, index) => {
          const Icon = item.icon
          const isActive =
            location.pathname === item.path ||
            (item.path !== '/home' && location.pathname.startsWith(item.path))

          return (
            <ListItem 
              key={item.id} 
              disablePadding 
              sx={{ 
                mb: 0.5, 
                px: open ? 1 : 0.5,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
                sx={{
                  minHeight: open ? 56 : 72,
                  height: open ? 56 : 72,
                  width: open ? 'calc(100% - 16px)' : 'calc(100% - 8px)',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  px: open ? 2.5 : 0.5,
                  py: open ? 1 : 0.5,
                  mx: open ? 1 : 0.5,
                  backgroundColor: isActive ? '#E6E6E6' : 'transparent',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: isActive ? '#E6E6E6' : '#eeeeee',
                  },
                  '&.Mui-selected': {
                    backgroundColor: '#E6E6E6',
                    '&:hover': {
                      backgroundColor: '#E6E6E6',
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 0,
                    mb: open ? 0 : 0.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#222222',
                  }}
                >
                  <Icon />
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: open ? '14px' : '11px',
                    fontWeight: 400,
                    color: '#222222',
                    textAlign: 'center',
                    lineHeight: 1.2,
                  }}
                  sx={{
                    mt: 0,
                    mb: 0,
                    '& .MuiListItemText-primary': {
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}

export default Sidebar

