import React, { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Toastr from "common/Toastr";
import authApi from 'apis/auth';
import { validator } from "../../helper";
import { defaultErrorState } from "../../constants";

const theme = createTheme();

export default function Login({history}) {
  const [emailError, setEmailError] = useState(defaultErrorState);
  const [passwordError, setPasswordError] = useState(defaultErrorState);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password')

    const payload = {
      user: { email, password }
    }

    if (validate(email, password)) {
      try {
        let response =  await authApi.login(payload)
        if (response.status >= 200 || response.status < 300) {
          localStorage.setItem(
            "DirectShiftsUser",
            JSON.stringify(response.data)
          );
          Toastr.success("Logged in successfully")
          history.push("/")
        }
        
      } catch(error){
        console.log(error)
      }
    }
  };

  const validate = (email, password) => {
    let emailValidation = validator("email", email);
    let passwordValidation = validator("password", password);
    if (!emailValidation.error && !passwordValidation.error) {
      return true;
    }
    if (emailValidation.error) {
      setEmailError(emailValidation);
    }
    if (passwordValidation.error) {
      setPasswordError(passwordValidation);
    }
    return false;
  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              error={emailError.error}
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              helperText={emailError.message}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              error={passwordError.error}
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              helperText={passwordError.message}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}