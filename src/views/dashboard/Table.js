import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import QuestionsTable from './TopQuestions';
import TableContainer from '@mui/material/TableContainer';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export const rows = [
  {
    adress: '123 Main St, Springfield, IL 62704, USA',
    date: '09/27/2018',
    client: 'Sally Quinn',
    role: 'Software Dev',
    email: 'eebsworth2m@sbwire.com',
    gender: 'Female'
  },
  {
    adress: '456 Elm St, Portland, OR 97205, USA',
    date: '09/23/2016',
    role: 'Software Dev',
    client: 'Margaret Bowers',
    email: 'kocrevy0@thetimes.co.uk',
    gender: 'Female'
  },
  {
    adress: '456 Elm St, Portland, OR 97205, USA',
    date: '10/15/2017',
    client: 'Minnie Roy',
    role: 'Software Dev',
    email: 'ediehn6@163.com',
    gender: 'Male'
  },
  {
    adress: '456 Elm St, Portland, OR 97205, USA',
    date: '06/12/2018',
    role: 'Software Dev',
    client: 'Ralph Leonard',
    email: 'dfalloona@ifeng.com',
    gender: 'Male'
  },
  {
    adress: '456 Elm St, Portland, OR 97205, USA',
    date: '03/24/2024d',
    role: 'Software Dev',
    client: 'Annie Martin',
    email: 'annmartin@ifeng.com',
    gender: 'Female'
  },
  {
    adress: '456 Elm St, Portland, OR 97205, USA',
    date: '08/25/2017',
    role: 'Software Dev',
    client: 'Adeline Day',
    email: 'hnisius4@gnu.org',
    gender: 'Female'
  },
  {
    adress: '456 Elm St, Portland, OR 97205, USA',
    date: '06/01/2017',
    role: 'Software Dev',
    client: 'Lora Jackson',
    gender: 'Female',
    email: 'ghoneywood5@narod.ru'
  },
  {
    adress: '456 Elm St, Portland, OR 97205, USA',
    date: '12/03/2017',
    role: 'Software Dev',
    client: 'Rodney Sharp',
    gender: 'Male',
    email: 'dcrossman3@google.co.jp'
  }
]

const clientQuestions = {
  'Sally Quinn': [
    'What specific environmental goals should the company set, and how can we achieve them?',
    'What metrics should we use to measure progress towards our environmental goals?',
    'How can we align our environmental goals with industry best practices and standards?'
  ],
  'Margaret Bowers': [
    'How can our company support and promote diversity and inclusion within its workforce and supply chain?',
    'What initiatives can our company implement to foster a more inclusive workplace culture?',
    'How can we evaluate the effectiveness of our diversity and inclusion programs?'
  ],
  'Minnie Roy': [
    'Can you describe the companys approach to ethical governance and transparency in decision-making processes?',
    'How does the company ensure accountability in its ethical governance practices?',
    'What mechanisms are in place to disclose information and decisions to stakeholders transparently?'
  ],
  'Ralph Leonard': [
    'What steps can my company take to reduce its carbon footprint and promote sustainable business practices?',
    'What innovative technologies or practices can help us in our efforts to reduce carbon footprint?',
    'How can we collaborate with suppliers and partners to promote sustainability throughout the supply chain?'
  ],
  'Annie Martin': [
    'How does the company engage with stakeholders to integrate their perspectives into its ESG strategy and decision-making?',
    'How does the company prioritize stakeholder engagement activities?',
    'What methods can we use to gather feedback from stakeholders on our ESG initiatives?'
  ],
  'Adeline Day': [
    'How can we integrate ESG into our overall business strategy?',
    'How do we integrate ESG considerations into our product development and innovation processes?',
    'What are the potential risks and opportunities associated with integrating ESG into our business strategy?'
  ],
  'Lora Jackson': [
    'How should we track and report our companys ESG performance?',
    'What frameworks or standards should we follow for reporting our ESG performance?',
    'How can we ensure accuracy and completeness in our ESG reporting?'
  ],
  'Rodney Sharp': [
    'How can we ensure transparency in our business operations?',
    'What policies and procedures are in place to ensure compliance with ethical and legal standards?',
    'How does the company address and rectify instances of non-compliance or misconduct?'
  ]
};


const statusObj = {
  New: { color: 'info' },
  Behind: { color: 'error' },
  Pending: { color: 'warning' },
  Advanced: { color: 'success' }
};

const DashboardTable = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (client) => {
    setSelectedClient(client);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'primary.main' }}>
              <TableCell>
              <Typography variant="subtitle1" h style={{ color: '#fff',fontSize: '0.8rem' }}>Employee</Typography>
              </TableCell>
              <TableCell>
              <Typography variant="subtitle1" h style={{ color: '#fff',fontSize: '0.8rem' }}>Email</Typography>
              </TableCell>
              <TableCell>
              <Typography variant="subtitle1" h style={{ color: '#fff',fontSize: '0.8rem' }}>Date</Typography>
              </TableCell>
              <TableCell>
              <Typography variant="subtitle1" h style={{ color: '#fff',fontSize: '0.8rem' }}>Role</Typography>
              </TableCell>
              <TableCell>
              <Typography variant="subtitle1" h style={{ color: '#fff',fontSize: '0.8rem' }}>Address</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow hover key={row.client} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      sx={{ fontWeight: 500, fontSize: '0.875rem !important', cursor: 'pointer' }}
                      onClick={() => handleOpen(row.client)}
                    >
                      {row.client}
                    </Typography>
                    <Typography variant='caption'>{row.gender}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.adress}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: 'primary.main', color: 'white', mb: 7 }}>{`Questions from ${selectedClient}`}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {clientQuestions[selectedClient] ? (
              clientQuestions[selectedClient].map((question, index) => (
                <div key={index}>
                  <p>{`${index + 1}. ${question}`}</p>
                  {index !== clientQuestions[selectedClient].length - 1 && <hr />}
                </div>
              ))
            ) : (
              <p>No questions found for {selectedClient}</p>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

    </Card>
  );
}

export default DashboardTable;
