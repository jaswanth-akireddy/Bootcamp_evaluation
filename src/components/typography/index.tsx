import { ThemeProvider, createTheme } from '@mui/system';
import Typography from '@mui/material/Typography';
import React from 'react';

import { Box } from '@mui/material';

type Proptype={
    content:string;
    col:string;
}
const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      line1: '#373C38',//line1
      line2: '#FF725E',//line2
      line3: '#656E66',//line3
      line4: '#656E66'//line4
    },
  }
});


function Type({content,col}: Proptype) {

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ color:col }}>{content}</Box>
    </ThemeProvider>
  );
}
export default Type