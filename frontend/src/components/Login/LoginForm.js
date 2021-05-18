import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, TextField, Button } from '@material-ui/core';
import AuthService from '../../services/auth.service';
import { Alert } from '@material-ui/lab';

const LoginForm = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const [message, setMessage] = useState("");

  let history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");

    AuthService.login(username, password).then(
      () => {
        history.push("/");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
      }
    );
  };

  return (
    <div>
      {message && 
        (<Alert severity="info">{message}</Alert>)
      }
      <Grid item xs={12} style={{ paddingTop: 20 }}>
        <TextField 
          fullWidth
          required
          name='username'
          label='Username'
          variant='outlined'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} style={{ paddingTop: 20 }}>
        <TextField 
          fullWidth
          required
          type='password'
          name='password'
          label='Password'
          variant='outlined'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} style={{ paddingTop: 20, display: 'flex', justifyContent: 'center' }}>
        <Button variant='contained' color='primary' type='submit' onClick={handleLogin}>
          Sign In
        </Button>
      </Grid>
    </div>
  )
}

export default LoginForm;