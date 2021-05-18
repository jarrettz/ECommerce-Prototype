import React from 'react';

import { Grid, Container, Paper, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import LoginForm from './LoginForm';

const Login = () => {

  return (
    <Container maxWidth='xs' style={{ marginTop: '250px' }}>
      <Paper style={{ padding: 16}}>
        <Grid container alignItems='center' justify='center'>
          <Grid item xs={12}>
            <Typography variant='h5' align='center'>
              Sign In
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <LoginForm />
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant='text' style={{ fontSize: '11px', textDecoration: 'none' }}>
              <Link to='/signup'>DON'T HAVE AN ACCOUNT? REGISTER HERE</Link>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default Login;