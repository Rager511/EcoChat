import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import DotsVertical from 'mdi-material-ui/DotsVertical';
import Link from 'next/link';

import Box from '@mui/material/Box';

const WeeklyOverview = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card>
        <CardHeader
          title='ESG Reporting Frameworks'
          titleTypographyProps={{
            sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
          }}
          action={
            <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
              <DotsVertical />
            </IconButton>
          }
        />
        <CardContent>
          <Box sx={{ mb: 3 }}>
            <Typography variant='body2' sx={{ mb: 2 }}>
              ESG is increasingly essential, and investors are incorporating ESG as it helps make profitable investments.
            </Typography>
            <Typography variant='body2' sx={{ mb: 2 }}>
              The ESG reporting methodology gives investors, consumers, and employees a holistic insight into their sustainability initiatives.
            </Typography>
            <Typography variant='body2' sx={{ mb: 7.5 }}>
              The frameworks down below offer a systematic way to evaluate a company’s sustainability performance, ESG-related risks, opportunities, and their effects on the environment and society.
            </Typography>
          </Box>
          <Button fullWidth variant='contained' onClick={handleClickOpen} sx={{ mb:2 , mt: 2 }}>
            Details
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle sx={{ backgroundColor: 'primary.main', color: 'white', mb: 7 }}>Examples of Best ESG reporting frameworks</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <div>
                  <Card variant="outlined" sx={{ p: 2, borderRadius: '12px', mb: 2 }}>
                    <Typography variant="body1">
                      <Link href="https://www.ifrs.org/" passHref>
                        <span target="_blank" rel="noopener noreferrer">
                        <img src="/images/misc/1689147241324.jpeg" alt="IFRS standards" style={{ width: '35px', height: '20px', marginRight: '8px' }} />
                          IFRS sustainability disclosure standards
                        </span>
                      </Link>
                    </Typography>
                  </Card>
                  <Card variant="outlined" sx={{ p: 2, borderRadius: '12px', mb: 2 }}>
                    <Typography variant="body1">
                      <Link href="https://www.globalreporting.org/" passHref>
                        <span target="_blank" rel="noopener noreferrer">
                        <img src="images/1689147463720.png" alt="GRI standards" style={{ width: '35px', height: '20px', marginRight: '8px' }} />
                          GRI standards
                        </span>
                      </Link>
                    </Typography>
                  </Card>
                  <Card variant="outlined" sx={{ p: 2, borderRadius: '12px', mb: 2 }}>
                    <Typography variant="body1">
                      <Link href="https://sasb.org/" passHref>
                        <span target="_blank" rel="noopener noreferrer">
                        <img src="images/1689147512070.png" alt="SASB standards" style={{ width: '35px', height: '20px', marginRight: '8px' }} />
                          SASB standards
                        </span>
                      </Link>
                    </Typography>
                  </Card>
                  <Card variant="outlined" sx={{ p: 2, borderRadius: '12px', mb: 2 }}>
                    <Typography variant="body1">
                      <Link href="https://www.cdsb.net/water" passHref>
                        <span target="_blank" rel="noopener noreferrer">
                        <img src="images/1689147643740.jpeg" alt="CDSB framework" style={{ width: '35px', height: '20px', marginRight: '8px' }} />
                          CDSB Framework
                        </span>
                      </Link>
                    </Typography>
                  </Card>
                  <Card variant="outlined" sx={{ p: 2, borderRadius: '12px', mb: 2 }}>
                    <Typography variant="body1">
                      <Link href="https://www.cdp.net/en" passHref>
                        <span target="_blank" rel="noopener noreferrer">
                        <img src="images/1689147897127.png" alt="CDP framework" style={{ width: '35px', height: '20px', marginRight: '8px' }} />
                          CDP Framework
                        </span>
                      </Link>
                    </Typography>
                  </Card>
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeeklyOverview;
