import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Grid, 
  Typography, 
  Paper, 
  Container, 
  TextField, 
  Button,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import AuthService from '../../services/auth.service';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(null);

  const [message, setMessage] = useState(null);
  const [successful, setSuccessful] = useState(null);

  const isValid = password === '' || confirmPassword === '';
    
  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    AuthService.register(username, password).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
        setSuccessful(false);
      }
    );
    console.log(message);
    
  };
  
  return (
    <div style={{ alignItems: 'flex-start', padding: 12, marginTop: '250px' }}>
      <Container maxWidth='sm'>
        <Paper style={{ padding: 16}}>
          <Grid container alignItems='center' justify='center' spacing={2}>
            {message && 
              (<Alert severity="info">{message}</Alert>)
            }
            <Grid item xs={12}>
              <Typography variant='h5' align='center'>
                Sign Up
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ paddingTop: 20 }}>
              <TextField 
                required
                fullWidth
                name='username'
                label='Username'
                variant='outlined'
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} style={{ paddingTop: 20 }}>
              <TextField 
                type='password'
                fullWidth
                required 
                name='password'
                variant='outlined'
                label='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} style={{ paddingTop: 20 }}>
              <TextField
                type='password'
                fullWidth
                required 
                name='confirmPassword'
                variant='outlined'
                label='Confirm Password'
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
              { password !== confirmPassword && 
                <Alert variant='filled' severity='error' style={{margin: 16}}>
                  Passwords must match!
                </Alert>
              }
            </Grid>
            <Grid item xs={12} style={{ paddingTop: 20, display: 'flex', justifyContent: 'center' }}>
              <Button 
                variant='contained' 
                color='primary' 
                type='submit' 
                disabled={isValid} 
                onClick={handleRegister}> 
                Register
              </Button>
            </Grid>
            <Button variant='text' style={{ fontSize: '11px', textDecoration: 'none' }}>
              <Link to='/login'>GO TO LOGIN PAGE</Link>
            </Button>
          </Grid>
        </Paper>
      </Container>
    </div>
  )
}

export default SignUp;
