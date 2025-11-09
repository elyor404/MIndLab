import { Box, Typography } from '@mui/material'
import EmptyState from '../components/EmptyState/EmptyState'

const GroupsPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        Groups
      </Typography>
      <EmptyState
        title="No groups yet"
        message="Create a group to start organizing courses and managing interns."
      />
    </Box>
  )
}

export default GroupsPage

