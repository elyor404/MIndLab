import { Box, Typography } from '@mui/material'
import EmptyState from '../components/EmptyState/EmptyState'

const CoursesPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        Courses
      </Typography>
      <EmptyState
        title="Waiting for you to choose a course"
        message="Select a course to get shortcuts for grading and sessions."
      />
    </Box>
  )
}

export default CoursesPage

