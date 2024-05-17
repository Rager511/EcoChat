import React, { useState } from 'react'; // <-- Add this import for useState

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import DotsVertical from 'mdi-material-ui/DotsVertical'

const data = [
  // ...same data array
]

const SalesByCountries = () => {
  return (
    <></>
)
}

const App = () => {
  const [showSalesByCountries, setShowSalesByCountries] = useState(false);

  return (
    <div>
      {/* Other components */}
      
      {showSalesByCountries && <SalesByCountries />}
    </div>
  );
};

export default App;
