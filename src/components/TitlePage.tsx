import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';

interface TitlePageProps {
  title: string;
}

const TitlePage: React.FC<TitlePageProps> = ({ title }) => {
  return (
    <Grid item xs={12}>
      <Typography style={{color:'#F97316'}} variant="h4">{title}</Typography>
      <Divider />
    </Grid>
  );
};

export default TitlePage;
