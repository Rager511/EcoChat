import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import SwipeableViews from 'react-swipeable-views'
import { useState } from 'react'
import Poll from 'mdi-material-ui/Poll'
import ChevronLeft from '@mui/icons-material/ChevronLeft'
import ChevronRight from '@mui/icons-material/ChevronRight'
import Star from '@mui/icons-material/Star'
import Checklist from '@mui/icons-material/Checklist'
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'
import dynamic from 'next/dynamic'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import QuestionsTable from 'src/views/dashboard/TopQuestions'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import { rows } from '../../views/dashboard/Table'
import { CardHeader } from '@mui/material'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const Dashboard = () => {
  const clientNames = rows.map(row => row.client)

  const [chartIndex, setChartIndex] = useState(0)

  const handleNextChart = () => {
    setChartIndex(prevIndex => Math.min(prevIndex + 1, 2))
  }

  const handlePreviousChart = () => {
    setChartIndex(prevIndex => Math.max(prevIndex - 1, 0))
  }

  const handleChartClick = (index) => {
    setChartIndex(index)
  }

  const chartOptions1 = {
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    colors: ['#9C1DE7'],
    fill: {
      gradient: {
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#9C1DE7'],
        inverseColors: false,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 50, 100]
      }
    },
    stroke: {
      width: 3,
      curve: 'smooth',
      dashArray: 0
    },
    markers: {
      size: 4,
      colors: ['#9C1DE7'],
      strokeColors: '#fff',
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      shape: 'circle',
      radius: 2,
      hover: {
        size: 7
      }
    }
  }

  const chartOptions2 = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%', 
        endingShape: 'rounded' 
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#FFFFFF'] 
      }
    },
    xaxis: {
      categories: clientNames
    },
    colors: ['#9C1DE7'],
    fill: {
      gradient: {
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#9C1DE7'],
        inverseColors: false,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 50, 100]
      }
    },
    stroke: {
      width: 3,
      curve: 'smooth',
      dashArray: 0 
    },
    markers: {
      size: 4,
      colors: ['#9C1DE7'],
      strokeColors: '#fff',
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      shape: 'circle',
      radius: 2,
      hover: {
        size: 7
      }
    }
  };
  


  const chartOptions3 = {
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    colors: ['#9C1DE7'],
    fill: {
      gradient: {
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#9C1DE7'],
        inverseColors: false,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 50, 100]
      }
    },
    stroke: {
      width: 3,
      curve: 'smooth',
      dashArray: 0
    },
    markers: {
      size: 4,
      colors: ['#9C1DE7'],
      strokeColors: '#fff',
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      shape: 'circle',
      radius: 2,
      hover: {
        size: 7
      }
    }
  }

  const visitorsChartData = [{
    name: 'Visitors',
    data: [30, 40, 35, 50, 49, 60, 70, 80, 95, 110, 125, 160]
  }]

  const QuestionsChartData = [{
    name: 'Rating',
    data: [20, 30, 25, 40, 35, 40, 40, 30],
    color: '#E0B0FF'
  }]

  const ReportChartData = [{
    name: 'Requests',
    data: [20, 30, 25, 50, 25, 20, 60, 70, 45, 55, 100, 120]
  }]

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Trophy />
        </Grid>
        <Grid item xs={12} md={8}>
          <StatisticsCard />
        </Grid>
        <Grid item xs={12}>
        <Card>
          <CardContent>
            <CardHeader
            title="Statistics Charts"
            />
            <Box sx={{ mt: 2, overflow: 'hidden' }}>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Box 
                    onClick={() => handleChartClick(0)} 
                    sx={{ 
                      cursor: 'pointer', 
                      backgroundColor: chartIndex === 0 ? '#E5E4E2' : 'transparent',
                    }}
                  >
                    <CardStatisticsVerticalComponent
                      stats='125'
                      icon={<Poll />}
                      color='success'
                      trendNumber='+42%'
                      title='Total Visitors per month'
                      subtitle=''
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box 
                    onClick={() => handleChartClick(1)} 
                    sx={{ 
                      cursor: 'pointer', 
                      backgroundColor: chartIndex === 1 ? '#E5E4E2' : 'transparent',
                    }}
                  >
                    <CardStatisticsVerticalComponent
                      stats='4.2'
                      icon={<Star />}
                      color='warning'
                      trendNumber='+5%'
                      title='Average Rating'
                      subtitle=''
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box 
                    onClick={() => handleChartClick(2)} 
                    sx={{ 
                      cursor: 'pointer', 
                      backgroundColor: chartIndex === 2 ? '#E5E4E2' : 'transparent',
 
                    }}
                  >
                    <CardStatisticsVerticalComponent
                      stats='8'
                      icon={<Checklist />}
                      color='info'
                      trendNumber='+18%'
                      title='Total Requests per month'
                      subtitle=''
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <IconButton onClick={handlePreviousChart}>
                <ChevronLeft />
              </IconButton>
              <SwipeableViews
                index={chartIndex}
                onChangeIndex={setChartIndex}
                style={{ width: '102%', height: '330px' }}
                containerStyle={{ width: '100%' }}
              >
              <Box sx={{ height: 300, overflow: 'hidden' }}>
                <ReactApexChart
                  options={chartOptions1}
                  series={visitorsChartData}
                  type="line"
                  height={300}
                />
              /</Box>
              <Box sx={{ height: 300, overflow: 'hidden' }}>
                <ReactApexChart
                  options={chartOptions2}
                  series={QuestionsChartData}
                  type="bar"
                  height={300}
                />
              /</Box>
              <Box sx={{ height: 300, overflow: 'hidden' }}>
                <ReactApexChart
                  options={chartOptions3}
                  series={ReportChartData}
                  type="line"
                  height={300}
                />
              /</Box>
              </SwipeableViews>
              <IconButton onClick={handleNextChart}>
                <ChevronRight />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SalesByCountries />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <DepositWithdraw />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="h2" gutterBottom sx={{ lineHeight: '2rem !important', letterSpacing: '0.15px !important' }}>
            Clients Interactions with Our Chatbot
          </Typography>
          <QuestionsTable />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="h2" gutterBottom sx={{ lineHeight: '2rem !important', letterSpacing: '0.15px !important' }}>
            Employees Details
          </Typography>
          <Table />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
};

export default Dashboard;