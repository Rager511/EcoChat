import React, { useState } from 'react';
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'  // <-- Import Divider from @mui/material

// ... (rest of the code remains unchanged)

const DepositWithdraw = () => {
  // State to control the visibility of the card
  const [showDepositWithdraw, setShowDepositWithdraw] = useState(false);

  if (!showDepositWithdraw) {
    return null; // Return null to hide the component
  }

  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: ['column', 'column', 'row'] }}>
      <Box sx={{ width: '100%' }}>
        {/* ... (rest of the code remains unchanged) */}
      </Box>

      <Divider flexItem />  {/* <-- Using Divider component from MUI */}

      <Box sx={{ width: '100%' }}>
        {/* ... (rest of the code remains unchanged) */}
      </Box>
    </Card>
  )
}

export default DepositWithdraw
