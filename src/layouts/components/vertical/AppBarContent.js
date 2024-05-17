// ** React Imports
import React, { useState, useEffect } from 'react';

// ** MUI Imports
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import InputAdornment from '@mui/material/InputAdornment';

// ** Icons Imports
import Menu from 'mdi-material-ui/Menu';
import EarthIcon from 'mdi-material-ui/Earth';
import Magnify from 'mdi-material-ui/Magnify';


// ** Components
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler';
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown';
import NotificationDropdown from 'src/@core/layouts/components/shared-components/NotificationDropdown';

const AppBarContent = props => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props;

  // ** State for language
  const [language, setLanguage] = useState('en'); // Default language is English
  const [languageLabel, setLanguageLabel] = useState('En'); // Label for language button

  // ** Hook
  const hiddenSm = useMediaQuery(theme => theme.breakpoints.down('sm'));

  // ** Function to toggle language
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    setLanguage(newLanguage);
    setLanguageLabel(newLanguage === 'en' ? 'En' : 'Fr');
  };

  // ** UseEffect to handle language changes
  useEffect(() => {
    // Here you can implement logic to change the language of your website
    // For example, using an internationalization library like i18next
    // or updating the document's lang attribute
    document.documentElement.lang = language;
  }, [language]);

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        
        <TextField
          size='small'
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Magnify fontSize='small' />
              </InputAdornment>
            )
          }}
        />
        
        {hidden ? (
          <IconButton
            color='inherit'
            onClick={toggleNavVisibility}
            sx={{ ml: 2 }}
          >
            <Menu />
          </IconButton>
        ) : null}
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        {/* Language Label */}
        <span style={{ marginRight: '8px' }}>{languageLabel}</span>
        
        {/* Language Switch Button */}
        <IconButton color='inherit' onClick={toggleLanguage}>
          <EarthIcon />
        </IconButton>
        {/* Mode Toggler */}
        <ModeToggler settings={settings} saveSettings={saveSettings} />

        {/* Notification Dropdown */}
        <NotificationDropdown />
        
        {/* User Dropdown */}
        <UserDropdown />
      </Box>
    </Box>
  );
};

export default AppBarContent;
