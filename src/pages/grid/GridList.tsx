import React from 'react'
import { Container, Grid2, Paper, Typography } from '@mui/material';

function GridList() {
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
        { id: 6, name: 'Item 6' },
      ];
    
      return (
        <Container>
      <Grid2 container spacing={2}>
        {items.map((item) => (
          <Grid2 item xs={12} sm={6} md={4} key={item.id}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">{item.name}</Typography>
            </Paper>
          </Grid2>
        ))}
      </Grid2>
    </Container>
          );
    }

export default GridList