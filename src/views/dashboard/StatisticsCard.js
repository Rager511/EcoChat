import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import DotsVertical from 'mdi-material-ui/DotsVertical';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

const monthlyData = [
  { name: 'Jan', clients: 4000 },
  { name: 'Feb', clients: 3000 },
  { name: 'Mar', clients: 2000 },
  { name: 'Apr', clients: 2780 },
  { name: 'May', clients: 1890 },
  { name: 'Jun', clients: 2390 },
  { name: 'Jul', clients: 3490 },
  { name: 'Aug', clients: 5771 },
  { name: 'Sep', clients: 6110 },
  { name: 'Oct', clients: 6628 },
  { name: 'Nov', clients: 4997 },
  { name: 'Dec', clients: 5133 },
];

const dailyData = [
  { name: 'Mon', visitors: 200 },
  { name: 'Tue', visitors: 300 },
  { name: 'Wed', visitors: 500 },
  { name: 'Thu', visitors: 400 },
  { name: 'Fri', visitors: 600 },
  { name: 'Sat', visitors: 700 },
  { name: 'Sun', visitors: 800 },
];

const weeklyData = [
  { name: 'Week 1', visitors: 1400 },
  { name: 'Week 2', visitors: 1800 },
  { name: 'Week 3', visitors: 2000 },
  { name: 'Week 4', visitors: 2500 },
];

const RequestsData = [
  { name: 'Mon', clicks: 540 },
  { name: 'Tue', clicks: 380 },
  { name: 'Wed', clicks: 300 },
  { name: 'Thu', clicks: 250 },
  { name: 'Fri', clicks: 467 },
  { name: 'Sat', clicks: 350 },
  { name: 'Sun', clicks: 210 },

];

const StatisticsCard = ({ open, handleClose }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedChart, setSelectedChart] = useState('monthly');

  const handleViewClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleChartTypeChange = (event) => {
    setSelectedChart(event.target.value);
  };

  let chartData, chartTitle;
  if (selectedChart === 'monthly') {
    chartData = monthlyData;
    chartTitle = 'Number of Clients (Monthly)';
  } else if (selectedChart === 'daily') {
    chartData = dailyData;
    chartTitle = 'Number of Visitors (Daily)';
  } else if (selectedChart === 'weekly') {
    chartData = weeklyData;
    chartTitle = 'Number of Visitors (Weekly)';
  } else if (selectedChart === 'requests') {
    chartData = RequestsData;
    chartTitle = 'Number of Reports Requests (Daily)';
  }

  return (
    <Card>
      <CardHeader
        title='Statistics Charts'
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options'>
            <DotsVertical />
          </IconButton>
        }
        subheader={
          <>
            <Typography variant='body2' sx={{ mb: 2 }}>
              <Box component='span' fontWeight={600} color='text.primary'>
                <TrendingUpIcon fontSize="small" sx={{ mr: 1 }} />
                Total 48.5% growth
              </Box>{' '}
              this month
            </Typography>
            <Typography variant='body2' sx={{ mb: 2 }}>
              <Box component='span' fontWeight={600} color='text.primary'>
                <TrendingUpIcon fontSize="small" sx={{ mr: 1 }} />
                Engagement Rate of 60%
              </Box>{' '}
              this month
            </Typography>
            <Typography variant='body2' sx={{ mb: 4 }}>
              <Box component='span' fontWeight={600} color='text.primary'>
                <SubscriptionsIcon fontSize="small" sx={{ mr: 1 }} />
                Total 43 subscriptions
              </Box>{' '}
              this month
            </Typography>
            <Typography variant='body2' sx={{ mb: 4 }}>
              To get to know more statistics, check the charts below!
            </Typography>
          </>
        }

        titleTypographyProps={{
          mb: 3,
          lineHeight: '2rem !important',
          letterSpacing: '0.15px !important',
        }}
      />
      <CardContent>
        <Box display="flex" justifyContent="flex-start" ml={2} mt={-4}>
          <Button size='small' variant='contained' onClick={handleViewClick}>
            View
          </Button>
        </Box>
      </CardContent>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          <Select
            value={selectedChart}
            onChange={handleChartTypeChange}
          >
            <MenuItem value="monthly">Number of Clients per month</MenuItem>
            <MenuItem value="weekly">Number of Clients per week</MenuItem>
            <MenuItem value="daily">Number of Clients per day</MenuItem>
            <MenuItem value="requests">Number of Reports Requests</MenuItem>
          </Select>
        </DialogTitle>
        <DialogContent>
          <Typography variant='h6'>{chartTitle}</Typography>
          <ResponsiveContainer width={550} height={400}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey={selectedChart === 'monthly' ? 'clients' : selectedChart === 'requests' ? 'clicks' : 'visitors'} fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default StatisticsCard;
