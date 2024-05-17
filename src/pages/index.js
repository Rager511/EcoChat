// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import QuestionsTable from 'src/views/dashboard/TopQuestions'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Trophy />
        </Grid>
        <Grid item xs={12} md={8}>
          <StatisticsCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={6} md={6} lg={4}>
          <TotalEarning />
        </Grid>
        <Grid item xs={6} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='1256'
                icon={<Poll />}
                color='success'
                trendNumber='+42%'
                title='Total Visitors per week'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='15'
                color='success'
                trend='positive'
                trendNumber='+18%'
                subtitle='Last Week'
                title='Questions Rating'
                icon={<HelpCircleOutline />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='4'
                color='success'
                trend='positive'
                trendNumber='+18%'
                title='Total visitors per day'
                icon={<Poll />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='12'
                color='success'
                trend='positive'
                trendNumber='+8%'
                subtitle='Last Week'
                title='Report Requests'
                icon={<Poll />} />
            </Grid>
          </Grid>
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
            Clients Details
          </Typography>
          <Table />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
