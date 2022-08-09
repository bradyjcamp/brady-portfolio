import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function Main() {
  return (
    <div className="Main">
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <h1>Hello there!</h1>
        </Box>
      </Container>
    </div>
  );
}

export default Main;