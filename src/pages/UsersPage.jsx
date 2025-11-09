import { Box, Typography } from '@mui/material'
import EmptyState from '../components/EmptyState/EmptyState'

const UsersPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        Users
      </Typography>
      <EmptyState
        title="No users yet"
        message="Invite users to start building your team."
      />
    </Box>
  )
}

export default UsersPage

