import { Box, Typography } from '@mui/material'

const EmptyState = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        textAlign: 'center',
        bgcolor: 'white',
        px: 2,
      }}
    >
      {/* SVG illustration */}
      <Box
        component="img"
        src="/empty-state.svg"
        alt="Empty state illustration"
        sx={{
          width: '320px',
          height: '197.24px',
          mb: 0, // rasm bilan sarlavha orasidagi masofa
        }}
      />

      {/* Title */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          color: '#424242',
          mb: 1, // title va description orasidagi masofa
          fontSize: '1.25rem', // fontni kattalashtirdik
        }}
      >
        <strong>No items yet</strong>
      </Typography>

      {/* Description */}
      <Typography
        variant="body2"
        sx={{
          color: '#757575',
          maxWidth: 400,
          fontSize: '1rem', // description fontni kattalashtirdik
        }}
      >
        Add content to see progress, deadlines, <br />analytics and activity.
      </Typography>
    </Box>
  )
}

export default EmptyState
