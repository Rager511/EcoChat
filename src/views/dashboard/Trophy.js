// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import Link from 'next/link'

// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

// Styled component for the trophy image
const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
})

const Trophy = () => {
  // ** Hook
  const theme = useTheme()
  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h6' sx={{ mb: 4 }}>Welcome Back !</Typography>
        <Typography variant='body2' sx={{ mb: 10 }}>Our chatbot serves as a valuable tool for ESG companies seeking to integrate sustainability into their core business operations, engage stakeholders effectively, and demonstrate their commitment to responsible and ethical practices. </Typography>
        <Link href='/chatbot/' passHref>
          <Button size='small' variant='contained'>
            Try it!
          </Button>
        </Link>
        <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
      </CardContent>
    </Card>
  )
}

export default Trophy
