import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const interactions = [
  {
    client: 'Lora Jackson',
    timestamp: '2024-05-12 10:15',
    message: 'How should we track and report our company\'s ESG performance?',
    response: 'You can track and report ESG performance using key performance indicators (KPIs) such as greenhouse gas emissions, diversity metrics, employee turnover rates, and community engagement initiatives.',
  },
  {
    client: 'Rodney Sharp',
    timestamp: '2024-05-12 11:30',
    message: 'How can we ensure transparency in our business operations?',
    response: 'You can ensure transparency and ethical conduct by disclosing relevant information to stakeholders, conducting regular ethics training for employees, and conducting internal audits to monitor compliance.',
  },
];

const ChatbotInteractionsTable = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClientClick = (client) => {
    setSelectedClient(client);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedClient(null);
    setDialogOpen(false);
  };

  return (
    <>
      <Card>
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label='table of chatbot interactions'>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'primary.main' }}>
                <TableCell>
                  <Typography variant="subtitle1" style={{ color: '#fff', fontSize: '0.8rem' }}>Client</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" style={{ color: '#fff', fontSize: '0.8rem' }}>Timestamp</Typography>
                </TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {interactions.map((interaction, index) => (
                <TableRow hover key={index} onClick={() => handleClientClick(interaction.client)} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                  <TableCell>{interaction.client}</TableCell>
                  <TableCell>{interaction.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>{`Conversation of ${selectedClient}`}</DialogTitle>
        <DialogContent>
          {interactions
            .filter((interaction) => interaction.client === selectedClient)
            .map((interaction, index) => (
              <div key={index} style={{ marginBottom: '16px', textAlign: interaction.client === 'Chatbot' ? 'left' : 'right' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ alignSelf: 'flex-end', marginBottom: '8px', marginRight: '-150px' }}>
                    <Typography variant="subtitle1" style={{ textAlign: 'right', marginRight: '165px' }}>{interaction.client}</Typography>
                    <div style={{ background: '#eee', padding: '10px', borderRadius: '10px', maxWidth: '70%', wordWrap: 'break-word', alignSelf: 'flex-end', textAlign: 'left', whiteSpace: 'pre-line', paddingLeft: '10px' }}>
                      <Typography variant="body1">{interaction.message}</Typography>
                    </div>
                  </div>
                  <div style={{ alignSelf: 'flex-start', marginBottom: '8px', marginLeft: '30px' }}>
                    <Typography variant="subtitle1" style={{ textAlign: 'left', marginLeft: '10px' }}>Chatbot</Typography>
                    <div style={{ background: '#581B98', color: '#fff', padding: '10px', borderRadius: '10px', maxWidth: '70%', wordWrap: 'break-word', textAlign: 'left', whiteSpace: 'pre-line', paddingLeft: '10px' }}>
                      <Typography variant="body1" sx={{color: '#fff'}}>{interaction.response}</Typography>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ChatbotInteractionsTable;
