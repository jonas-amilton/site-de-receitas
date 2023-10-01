import { Container, Grid } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <ResponsiveAppBar />
      </Grid>

      <Grid item xs={12}>
        <Container sx={{ marginTop: '20px' }}>{children}</Container>
      </Grid>
    </Grid>
  );
};
