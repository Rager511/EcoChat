import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

const CardStatsVertical = props => {
  // ** Props
  const { title, subtitle, color, icon, stats, trend, trendNumber, onClick, isSelected } = props

  return (
    <Card sx={{ backgroundColor: isSelected ? '#E5E4E2' : 'transparent' }} onClick={onClick}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 5.5 }}>
          <Avatar sx={{ boxShadow: 3, marginRight: 4, color: 'common.white', backgroundColor: `#9C1DE7` }}>
            {icon}
          </Avatar>
        </Box>
        <Typography sx={{ fontWeight: 600, fontSize: '0.875rem', textAlign: 'center' }}>{title}</Typography>
        <Box sx={{ marginTop: 1.5, display: 'flex', flexWrap: 'wrap', marginBottom: 1.5, alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant='h6' sx={{ mr: 2, textAlign: 'center' }}>
            {stats}
          </Typography>
          <Typography
            component='sup'
            variant='caption'
            sx={{ color: '#9C1DE7', textAlign: 'center' }}
          >
            {trendNumber}
          </Typography>
        </Box>
        <Typography variant='caption' sx={{ textAlign: 'center' }}>{subtitle}</Typography>
      </CardContent>
    </Card>
  )
}

export default CardStatsVertical
